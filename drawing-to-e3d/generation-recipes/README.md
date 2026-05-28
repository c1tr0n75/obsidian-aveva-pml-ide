# Generation Recipes

Generation recipes describe how reviewed model intent becomes AVEVA E3D PML/PML2.

## Routing

- Use [SKILL.md](../../SKILL.md) as the mandatory coding contract.
- Use [pml-coding-assistant/references/database/database-data-model-index.md](../../pml-coding-assistant/references/database/database-data-model-index.md) before creating or modifying E3D element types.
- Use [pml-coding-assistant/references/database/aveva_introduction_to_attributes.md](../../pml-coding-assistant/references/database/aveva_introduction_to_attributes.md) before relying on attribute names or types.
- Use [pml-coding-assistant/examples/pml-patterns/](../../pml-coding-assistant/examples/pml-patterns/README.md) for runnable PML patterns.
- Use [pml-coding-assistant/production-reference/DBListing-examples/](../../pml-coding-assistant/production-reference/DBListing-examples/) to ground DBOUTPUT/DBLISTING syntax and actual database shape.

## Recipe Pattern

Each recipe should define:

- Input model-intent fields.
- Required project knowledge or reference pages.
- PML/PML2 output type: function, form, object, macro, DBOUTPUT, DBLISTING, or validation script.
- Preconditions and missing-data checks.
- Generated files and reload/test commands.
- DBOUTPUT/DBLISTING validation method.

## Safety Rules

- Generate query or validation PML before modifying PML when source confidence is low.
- Prefer review lists over model creation when required engineering data is missing.
- Do not generate creation scripts that depend on invented spec, bore, owner, coordinate, or connectivity values.
- Link useful reusable code back into [pml-coding-assistant/examples/pml-patterns/](../../pml-coding-assistant/examples/pml-patterns/README.md).
