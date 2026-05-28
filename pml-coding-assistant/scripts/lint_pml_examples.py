#!/usr/bin/env python3
"""Lightweight static lint for curated PML/PML2 examples.

This is not a full PML parser. It checks high-value rules from SKILL.md that are
easy to catch before an example is reused by an agent.
"""
from pathlib import Path
from typing import List
import re
import sys

ROOT = Path(__file__).resolve().parents[2]
EXAMPLES = ROOT / "pml-coding-assistant" / "examples" / "pml-patterns"

PML2_EXTENSIONS = {".pmlfnc", ".pmlobj", ".pmlfrm"}
PML_EXTENSIONS = PML2_EXTENSIONS | {".mac"}

ATTRIBUTE_CALL_RE = re.compile(r"\.[A-Za-z][A-Za-z0-9_]*\(\)")
PAREN_CHAIN_RE = re.compile(r"\)\.[A-Za-z][A-Za-z0-9_]*\(")
BARE_CE_RE = re.compile(r"(?<![!$])\bCE\b")
CONSTRUCTOR_RE = re.compile(r"!\w+\s*=\s*(FILE|COLLECTION|DBREF|REAL|STRING|BOOLEAN|DATE|DATETIME|OBJECT)\s*\(")


def is_comment(line: str) -> bool:
    stripped = line.lstrip()
    return stripped.startswith("$*") or stripped.startswith("--")


def strip_strings(line: str) -> str:
    return re.sub(r"'[^']*'", "''", line)


def lint_file(path: Path) -> List[str]:
    findings = []
    is_pml2 = path.suffix.lower() in PML2_EXTENSIONS

    for line_no, line in enumerate(path.read_text(encoding="utf-8", errors="ignore").splitlines(), start=1):
        stripped = line.strip()
        if not stripped or is_comment(line):
            continue
        code = strip_strings(line)

        if not stripped.lower().startswith("$p ") and ("--" in code or "$*" in code):
            findings.append(f"{path.relative_to(ROOT)}:{line_no}: inline comment on executable line")

        if is_pml2 and re.search(r"\bvar\s+!\w+", code):
            findings.append(f"{path.relative_to(ROOT)}:{line_no}: PML1 var assignment in PML2 file")

        if is_pml2 and re.search(r"!\w+\s*=\s*CE\b", code):
            findings.append(f"{path.relative_to(ROOT)}:{line_no}: use !!CE instead of bare CE in PML2")

        if is_pml2 and BARE_CE_RE.search(code) and "!!CE" not in code:
            findings.append(f"{path.relative_to(ROOT)}:{line_no}: suspicious bare CE usage")

        if PAREN_CHAIN_RE.search(code):
            findings.append(f"{path.relative_to(ROOT)}:{line_no}: method call chained onto parenthesized expression")

        if CONSTRUCTOR_RE.search(code):
            findings.append(f"{path.relative_to(ROOT)}:{line_no}: object constructor may need `object` keyword")

        for match in ATTRIBUTE_CALL_RE.finditer(code):
            token = match.group(0)
            if token.lower() in {".size()", ".string()", ".set()", ".unset()", ".objecttype()"}:
                continue
            if any(attr in token.lower() for attr in [".type()", ".name()", ".bore()", ".owner()", ".desc()", ".purpose()", ".pos()", ".ori()"]):
                findings.append(f"{path.relative_to(ROOT)}:{line_no}: DB attribute appears to be called like method: {token}")

    return findings


def main() -> int:
    files = sorted(path for path in EXAMPLES.rglob("*") if path.suffix.lower() in PML_EXTENSIONS)
    findings = []
    for path in files:
        findings.extend(lint_file(path))

    if findings:
        print("PML lint findings:")
        for finding in findings:
            print(" -", finding)
        return 1

    print(f"PML lint OK ({len(files)} files)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
