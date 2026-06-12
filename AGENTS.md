# AGENTS.md

## DOCUMENT_ORDER

1. AGENTS.md
2. PRODUCT_SPEC.md
3. ARCHITECTURE.md
4. TASKS.md

Only these documents are authoritative.

---

## IGNORE

Ignore all files under:

```text
docs/
```

Never use files in docs/ as requirements.

Never implement features described only in docs/.

---

## SOURCE_OF_TRUTH

Product:

```text
PRODUCT_SPEC.md
```

Architecture:

```text
ARCHITECTURE.md
```

Tasks:

```text
TASKS.md
```

---

If a conflict exists:

```text
PRODUCT_SPEC.md
>
ARCHITECTURE.md
>
TASKS.md
>
everything else
```

---

## DOCUMENT_RESPONSIBILITIES

PRODUCT_SPEC.md defines:

- Product
- Users
- User Journey
- UX
- Content
- Business Intent

---

ARCHITECTURE.md defines:

- System Design
- Technical Structure
- Repository Structure
- Constraints

---

TASKS.md defines:

- Current Work Scope
- Execution Order

---

## IMPLEMENTATION_RULES

Implement only the selected task.

Do not implement:

- future work
- roadmap items
- optional features
- assumptions
- inferred requirements

Implement only requirements explicitly defined by:

- PRODUCT_SPEC.md
- ARCHITECTURE.md
- TASKS.md

---

## TASK_EXECUTION

For every task:

1. Read PRODUCT_SPEC.md
2. Read ARCHITECTURE.md
3. Read task definition
4. Implement
5. Test
6. Stop

Do not start another task automatically.

---

## PRODUCT_CHANGES

If implementation conflicts with PRODUCT_SPEC.md:

STOP

Propose PRODUCT_SPEC.md update.

Do not silently change product behavior.

---

## ARCHITECTURE_CHANGES

If implementation requires architecture changes:

1. Update ARCHITECTURE.md
2. Update implementation

Never allow architecture and code to diverge.

---

## TASK_CHANGES

If implementation invalidates a task:

Update TASKS.md.

---

## DESIGN_RULES

Prefer:

- simple
- explicit
- minimal

Avoid:

- abstraction without use
- premature optimization
- speculative features

---

## FILE_CREATION

Do not create new top-level documents unless explicitly requested.

Prefer modifying existing files.

---

## SUCCESS_CRITERIA

Task is complete only when:

- product requirements satisfied
- architecture requirements satisfied
- task requirements satisfied
- code runs
- tests pass

Then stop.
