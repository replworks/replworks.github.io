# TASKS.md

Version 4.0

## PURPOSE

Current Work Scope

---

ARCHITECTURE.md

```text
Destination
```

TASKS.md

```text
Current Position
```

---

Only incomplete tasks may be implemented.

---

Work outside TASKS.md is prohibited.

---

## EXECUTION RULES

```text
One Prompt
=
One Task
```

---

```text
One Task
=
One Commit
```

---

Do not:

```text
Combine Tasks

Implement Future Tasks

Expand Scope

Add Unplanned Features
```

---

If required work is missing:

```text
STOP

Propose TASK update
```

---

## PHASE 1

### FOUNDATION

- [x] T001 Initialize Astro Project
- [x] T002 Configure Tailwind CSS
- [x] T003 Configure Content Collections
- [x] T004 Configure MDX Support
- [x] T005 Configure GitHub Pages Deployment
- [x] T006 Configure Linting and Formatting
- [x] T007 Configure Testing

---

## PHASE 2

### PLATFORM FOUNDATION

- [x] T101 Create Site Shell
- [x] T102 Configure Navigation
- [x] T103 Configure Layout System
- [x] T104 Configure Content Rendering
- [x] T105 Configure Search Infrastructure

---

## PHASE 3

### INITIAL WEBSITE RELEASE

- [x] T201 Create Home Page
- [x] T202 Publish Why Content
- [x] T203 Publish Manifesto
- [x] T204 Publish Specification
- [x] T205 Publish Workflow
- [x] T206 Publish Resources
- [x] T207 Publish Showcase
- [x] T208 Publish FAQ

---

## PHASE 4

### REPL WORKS REPOSITIONING

#### INFORMATION ARCHITECTURE

- [x] T401 Replace legacy navigation with new navigation structure
- [x] T402 Remove Why section
- [x] T403 Remove Manifesto section
- [x] T404 Remove Specification section

---

#### HOME

- [x] T405 Rewrite Home page for AI-Native Product Development Framework positioning
- [x] T406 Add workflow-first messaging
- [x] T407 Add REPL Works Compatible positioning
- [x] T408 Add GitHub call-to-action

---

#### WORKFLOW

- [x] T409 Rewrite Workflow documentation
- [x] T410 Publish current REPL Works workflow
- [x] T411 Explain Discussion AI vs Execution AI
- [x] T412 Explain continuous improvement workflow

---

#### PROMPTS

- [x] T413 Create Prompts section
- [x] T414 Publish IDEAS prompt
- [x] T415 Publish PITCHING_SCRIPT prompt
- [x] T416 Publish PRODUCT_SPEC prompt
- [x] T417 Publish ARCHITECTURE prompt
- [x] T418 Publish TASKS prompt
- [x] T419 Publish Review prompts

---

#### DOCUMENTS

- [x] T420 Create Documents section
- [x] T421 Publish AGENTS.md standard
- [x] T422 Publish PRODUCT_SPEC.md standard
- [x] T423 Publish ARCHITECTURE.md standard
- [x] T424 Publish TASKS.md standard
- [x] T437 Publish TECH_STACK.md standard
- [x] T439 Add raw document download endpoints

---

#### TOOLS

- [x] T425 Create Tools section
- [x] T426 Publish ai-issue
- [x] T427 Add installation guide
- [x] T428 Add GitHub repository links
- [x] T438 Publish repl-cli

---

#### SHOWCASE

- [x] T429 Convert Showcase to REPL Works Compatible Projects
- [x] T430 Publish REPL Works Website showcase
- [x] T431 Publish ai-issue showcase
- [x] T432 Publish Wifi Note showcase

---

#### FAQ

- [x] T433 Rewrite FAQ for framework positioning
- [x] T434 Add compatibility questions
- [x] T435 Add workflow questions
- [x] T436 Add planning vs execution questions

---

## PHASE 5

### SEARCH

- [x] T501 Verify search indexing for Prompts
- [x] T502 Verify search indexing for Documents
- [x] T503 Verify search indexing for Tools
- [x] T504 Verify search indexing for Showcase
- [x] T505 Verify search indexing for FAQ

---

## PHASE 6

### CONTENT REVIEW

- [x] T601 Review Workflow content
- [x] T602 Review Prompt content
- [x] T603 Review Document content
- [x] T604 Review Tool content
- [x] T605 Review Showcase content
- [x] T606 Review FAQ content

---

## PHASE 7

### RELEASE

- [x] T701 Responsive Review
- [x] T702 Accessibility Review
- [x] T703 Search Verification
- [x] T704 GitHub Pages Verification
- [x] T705 Release v2

---

## PHASE 8

### DOCUMENTATION ALIGNMENT

- [x] T801 Align document naming and structure

---

## PHASE 9

### HOMEPAGE MESSAGE CLARITY

- [x] T901 Rewrite homepage hero and Problem section, and place Problem before Workflow

---

## PHASE 10

### SHOWCASE CARD GRID

- [x] T1001 Move Showcase projects into one shared data source
- [x] T1002 Create the shared Showcase card component and connect the homepage
- [x] T1003 Replace the Showcase page with the seven-project card grid
- [x] T1004 Move the REPL Works Compatible definition into the FAQ

## PHASE 11

### HERO REDESIGN AND TERMINOLOGY UNIFICATION

- [x] T1101 Redesign homepage hero with new copy, CTAs, and inline SVG triangle diagram
- [x] T1102 Update homepage workflow section into two document stage groups
- [x] T1103 Reorder benefits section putting project continuity first
- [x] T1104 Unify terminology across site replacing Discussion AI and Execution AI with 대화형 AI and 코딩형 AI

## PHASE 12

### HOMEPAGE AND WORKFLOW MESSAGE ALIGNMENT

- [x] T1201 Redesign homepage hero and align Workflow roles, document stages, and terminology

## PHASE 13

### PROMPT SOURCE ALIGNMENT

- [x] T1301 Use templates/prompts as the canonical build-time prompt source
- [x] T1302 Render prompt output artifacts without code-block controls
- [x] T1303 Render explanatory flows and principle text across document detail pages without code-block controls
- [x] T1304 Render showcase workflow diagrams without code-block controls

## PHASE 14

### AGENTS DOCUMENT TEMPLATE

- [x] T1401 Render templates/documents/AGENTS.md at the end of the AGENTS document page with Expressive Code

## PHASE 15

### DOCUMENT SIDEBAR CONFIGURATION

- [x] T1501 Manage document sidebar order and display properties from one data source

## PHASE 16

### IMAGEFORGE SHOWCASE

- [x] T1601 Publish ImageForge in the Showcase
  - Add ImageForge to the shared Showcase data and publish its detail page.
  - Describe its two repositories, Coolify deployment, imgproxy processing, and Cloudflare CDN/Purge roles without linking the private repository.
  - Explain its REPL Works workflow, documents, tools, and owner-provided lessons.
  - Verify the public image endpoint and CDN cache against the live service.
  - Pass applicable unit, E2E, and build checks.

- [x] T1602 Feature ImageForge after Wifi Note on the homepage
  - Add ImageForge to the documented homepage featured projects.
  - Keep ImageForge immediately after Wifi Note in the shared featured order.
  - Verify the homepage card and all project checks.

---

## COMPLETION

```text
[ ]
↓
[x]
```

---

After task completion:

Review ARCHITECTURE.md

---

If architecture changed:

Update ARCHITECTURE.md
