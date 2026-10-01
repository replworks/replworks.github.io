# node-cli.md

## Purpose

This document defines the implementation tech stack for all projects using the following stack:

- Node.js
- TypeScript
- CLI-based execution
- Playwright-based browser automation

This document is a strict implementation contract.

All implementation must comply with this document.

If any conflict exists between documents:

> TECH_STACK.md takes priority over all other specifications except IMPLEMENTATION_CONSTITUTION.md.

---

## Stack Definition (Immutable)

All projects MUST use the following stack:

- Language: TypeScript
- Runtime: Node.js
- Browser Automation: Playwright
- Package Manager: pnpm (recommended)

Rules:

- Do not use JavaScript without TypeScript
- Do not use alternative runtimes (Bun, Deno, etc.)
- Do not replace Playwright with other automation tools
- Do not mix multiple runtimes
- Do not assume tech stack defaults

---

## Version Lock (STRICT)

All versions MUST be explicitly pinned.

No “latest”, “stable”, or “recommended” assumptions are allowed.

### Node.js

- Node.js: 20.x LTS (exact version must be pinned per repository)

### TypeScript

- TypeScript: 5.x (minor version must be explicitly pinned per repository)

### Playwright

- Playwright: 1.4x.x (exact version must be pinned per repository)

### pnpm

- pnpm: 9.x (exact version must be pinned per repository)

Rules:

- No automatic upgrades
- No implicit version resolution
- No dependency drift allowed
- All lockfiles are considered authoritative
- Any version mismatch is a build failure condition

---

## CLI Application Model

All applications MUST be CLI-first systems.

Requirements:

- Single CLI entry point
- Command-driven execution model
- No GUI dependency for core execution
- No daemon dependency for runtime behavior

Standard commands:

- `start`
- `stop`
- `status`
- `run <mission>`

All commands must be deterministic and side-effect controlled.

---

## Project Structure Convention

All projects MUST follow this structure:

```text
src/
  cli/            # command entry layer
  core/           # orchestration and business logic
  browser/        # Playwright automation layer
  extractors/     # DOM parsing and message extraction
  router/         # decision logic
  missions/       # state management
  adapters/       # external system integrations
  utils/          # shared utilities
```

Rules:

- Each directory must have a single responsibility
- No cross-domain logic between unrelated modules
- No hidden directories
- No generic buckets like utils/shared unless explicitly justified
- Structure must reflect system responsibilities exactly

---

## Dependency Direction Rules

Strict dependency flow:

```text
cli → core → router → missions
core → browser → extractors
core → adapters
adapters → browser
```

Rules:

- No circular dependencies
- No reverse-layer imports
- No bypassing core orchestration layer
- No hidden coupling between modules

Any violation is invalid implementation.

---

## Playwright Usage Rules

Playwright is the ONLY allowed browser automation tool.

Rules:

- All interactions must simulate human behavior
- No API-level integration with external LLM providers
- No hidden DOM hooks or internal APIs
- No parallel uncontrolled sessions

Allowed actions:

- click
- type
- paste
- wait
- observe

All automation must be observable and reproducible.

---

## TypeScript Rules

Strict TypeScript mode is mandatory.

Requirements:

- strict: true
- noImplicitAny: true
- explicit typing for all core domain logic

Forbidden:

- any (unless explicitly justified)
- unsafe type assertions
- runtime type guessing without validation

Types must reflect runtime reality.

---

## CLI Tech Stack Rules

A structured CLI tech stack MUST be used.

Recommended:

- oclif (preferred)

Rules:

- Commands must be modular
- No inline command logic in entry files
- No ad-hoc argument parsing
- Each command must be independently testable

---

## Configuration Rules

Configuration MUST be externalized.

Standard location:

```text
~/.config/<app>/config.yaml
```

Rules:

- Configuration must be optional at startup
- Defaults must always be valid
- No hardcoded environment assumptions
- No implicit global configuration state

---

## Secrets Rules

Strict prohibition:

- No secrets in source code
- No secrets in configuration files
- No secrets in logs

Allowed storage:

- environment variables only
- system keychain (if explicitly defined per project)

---

## Logging Rules

Logging must be:

- structured
- minimal
- non-sensitive

Forbidden:

- tokens
- credentials
- session data containing sensitive information

Logs must support debugging without leaking secrets.

---

## Error Handling Rules

All errors MUST be:

- explicit
- descriptive
- actionable

Forbidden:

- silent failures
- generic errors
- hidden fallback logic

Each error must include:

- cause
- context
- recovery guidance

---

## Testing Rules

All tests MUST be:

- deterministic
- isolated
- repeatable

Forbidden:

- network access
- real browser sessions
- live external service calls

All external dependencies must be mocked.

---

## External Integration Rules

All external systems (e.g. GPT, Gemini) MUST be accessed through adapters.

Rules:

- business logic must not directly depend on Playwright
- adapters must encapsulate all external interaction logic
- adapters must be replaceable without affecting core logic

---

## Dependency Management Rules

- Minimize dependencies
- Prefer standard library
- Add dependencies only when strictly necessary
- Avoid overlapping libraries

Each dependency must be justified by:

- necessity
- maintenance status
- non-duplication

---

## Build & Distribution Rules

- Must produce a standalone CLI distribution
- Must not require runtime compilation in production
- Must support macOS, Linux, Windows

Distribution method:

- GitHub Releases

---

## Architecture Stability Rules

Once defined:

- directory structure must not change arbitrarily
- dependency flow must remain stable
- new features must conform to existing structure

Refactoring is allowed only if:

- TECH_STACK.md is updated accordingly
- IMPLEMENTATION_CONSTITUTION.md is updated if required

---

## Tech Stack Invariants

The following conditions MUST always remain true:

- CLI-first execution model
- TypeScript strict mode enforced
- Playwright is the only browser automation tool
- All external integrations are isolated via adapters
- Dependency direction rules are enforced
- No hidden architecture layers exist
- No runtime ambiguity in versioned dependencies

Any violation is considered a tech-stack-level failure.

---

## Final Rule

If ambiguity exists:

> Always choose deterministic behavior over flexible interpretation.

Flexibility is considered a source of implementation risk.
