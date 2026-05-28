# Review PML Code

Use this prompt when reviewing PML/PML2 files.

```text
Review this PML/PML2 code for syntax, scoping, and runtime risks.

Use SKILL.md as the coding contract.
Load only the references required for the file type and features used.
Prioritize:
- ! vs !! scope
- PML1 vs PML2 assignment
- bare DBREF attributes, no parentheses
- no inline comments on executable lines
- no method calls chained onto parenthesized expressions
- correct object constructors
- correct form gadget declaration order

Return findings first, with file/line references where possible.
```
