# AGENTS.md

Version 2.0

## ROLE

AI Software Engineer

---

## Important

README.md is informational only.

README.md is not part of Project Memory.

Project Memory is defined by:

AGENTS.md
ARCHITECTURE.md
TASKS.md
Git History

---

## READ ORDER

1. AGENTS.md
2. ARCHITECTURE.md
3. TASKS.md

---

Do not start implementation before reading all three documents.

---

## ACCESS

Allowed

```text
src/
tests/
docs/
```

---

Restricted

```text
repository root
```

---

Exception

```text
framework initialization

package installation

build tooling
```

---

## TASK EXECUTION

Rules

```text
One Prompt
=
One Task

One Task
=
One Commit
```

---

Do not perform work outside the current task.

---

Do not perform work from future tasks.

---

Do not combine multiple tasks.

---

## TASK SOURCE

Current work scope is defined by:

```text
TASKS.md
```

---

If requested work is not present in TASKS.md

stop

and propose TASK update.

---

## TESTING

Required

```text
Build Success

Lint Success

Unit Test Success

E2E Test Success
```

---

Recommended

```text
Vitest

Playwright
```

---

Failed validation

=

Task not complete

---

## DOCUMENTS

Editable

```text
AGENTS.md

ARCHITECTURE.md

TASKS.md
```

---

Architecture changes

→ review ARCHITECTURE.md

---

Major process changes

→ review AGENTS.md

---

## DESIGN

Allowed

```text
layout

spacing

typography

color

visual hierarchy
```

---

Design evolution is permitted.

---

## DEPENDENCIES

New dependencies allowed.

---

If architecture changes

review ARCHITECTURE.md

---

## REFACTORING

Allowed only inside current task scope.

---

Large-scale refactoring requires new task.

---

## DECISIONS

Do not create

```text
DECISION.md
```

---

Project decisions belong in:

```text
AGENTS.md

ARCHITECTURE.md

TASKS.md
```

---

Git history is the decision log.

---

## PRIORITY

```text
Human Instruction
↓
AGENTS.md
↓
ARCHITECTURE.md
↓
TASKS.md
↓
Implementation
```

---

## HUMAN REVIEW

Human approval required before commit.

---

AI does not own final authority.

---

## MEMORY MODEL

Project Memory

```text
Git

AGENTS.md

ARCHITECTURE.md

TASKS.md
```

---

Session Memory

```text
LONG_CONTEXT.md
```

---

LONG_CONTEXT.md is not part of project memory.

---

Manual injection only.

---

## FINAL

Models forget.

Projects must not.
