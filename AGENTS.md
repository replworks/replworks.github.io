# AGENTS.md

## DOCUMENT_ORDER

1. AGENTS.md
2. ARCHITECTURE.md
3. TASKS.md

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

Architecture:

```text
ARCHITECTURE.md
```

Tasks:

```text
TASKS.md
```

If a conflict exists:

```text
ARCHITECTURE.md > TASKS.md > everything else
```

---

## IMPLEMENTATION_RULES

Implement only the selected task.

Do not implement:

- future work
- roadmap items
- optional features
- assumptions
- inferred requirements

Implement only requirements explicitly defined in TASKS.md.

---

## TASK_EXECUTION

For every task:

1. Read ARCHITECTURE.md
2. Read task definition
3. Implement
4. Test
5. Stop

Do not start another task automatically.

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

- requirements satisfied
- acceptance criteria satisfied
- code runs
- tests pass

Then stop.
