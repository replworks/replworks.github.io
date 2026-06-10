# AI_MEMORY.md

## PURPOSE

Recover decision-making context for future AI sessions.

This document is not a summary of facts.

It is a summary of:

- how the founder thinks
- why decisions were made
- what constraints exist
- what has already been learned through experimentation

---

# FOUNDER PROFILE

Background:

- ~25 years involved in web services
- Has worked as:
  - developer
  - technical lead
  - PM
  - operator
- Strong preference for operational efficiency
- Repeatedly optimized systems where:
  - 10 people → 1~2 people
  - manual workflows → automation
  - human coordination → systems/processes

Natural tendency:

- Builds systems before scaling people
- Thinks in workflows
- Thinks in operations
- Thinks in knowledge preservation

Weakness:

- Not afraid of building
- Afraid of outbound sales

Important distinction:

Conversation itself is not difficult.

Initiating conversations is difficult.

Specifically:

- cold outreach
- calling strangers
- sales meetings
- proactive networking

These are emotionally expensive.

This heavily influences business selection.

---

# CURRENT LIFE CONTEXT

- Approximately 2 years away from previous long-term company environment
- Spent about 1 year in New Zealand
- Age: 51
- Strong desire to build independent business
- Does not want to rely on traditional employment

Current concern:

Fear of restarting commercial activity after long period away from active business development.

---

# CORE DISCOVERY ABOUT AI DEVELOPMENT

Most important insight discovered during the last ~2 months of intensive AI-assisted development:

AI coding quality is NOT the primary problem.

Memory is.

Observed repeatedly:

- AI forgets project decisions
- AI forgets architecture
- AI forgets framework constraints
- AI forgets directory conventions
- AI forgets previous conclusions

This occurs even within short time spans.

Conclusion:

DO NOT try to make AI remember.

Instead:

Design projects so AI does not need memory.

This became the foundation of REPL Works.

---

# REPLWORKS ORIGIN STORY

Trigger:

Repeated failures while modifying an Astro 6+ project.

Symptoms:

- AI repeatedly generated invalid fixes
- same errors reappeared
- rollback cycles via Git became common
- human debugging became necessary

Root cause investigation found:

1. AI often referenced older Astro knowledge
2. AI lacked framework-specific constraints
3. AI lacked project structure awareness
4. AI defaulted to poor file placement decisions
5. AI repeatedly lost context

Key realization:

Problem was not coding capability.

Problem was missing project memory.

Decision:

Externalize memory into structured markdown.

Make memory:

- durable
- explicit
- portable
- model-independent

---

# REPLWORKS CORE BELIEF

Fundamental belief:

AI memory is temporary.

Project memory must be external.

Project continuity should not depend on:

- model version
- provider
- session history
- prompt history

Instead:

Projects should survive model replacement.

---

# REPLWORKS DESIGN PHILOSOPHY

Primary objective:

Reduce memory dependency.

Secondary objective:

Increase implementation consistency.

Important design preference:

Optimize documents for AI understanding.

Not human readability.

This is a critical distinction.

The founder intentionally prefers:

- compressed information
- machine-oriented structure
- minimal files
- high information density

Reason:

Context window is limited.

Human-friendly documents often waste context.

---

# FRAMEWORK.MD DECISION

Why FRAMEWORK.md exists:

Real-world failure already occurred.

Without framework-specific instructions:

AI repeatedly generated incorrect code.

Result:

Project progress stopped.

Decision:

Invest 1~2 days to create framework-specific AI memory.

Reason:

The recurring cost of errors exceeded the cost of documentation.

Important:

FRAMEWORK.md was not theoretical.

It was created to solve an already observed bottleneck.

---

# FUTURE TOOLING PRINCIPLE

Question raised:

When recurring AI-development problems appear,
should tooling be built first?

Answer evolved into:

Build tooling only when:

- problem blocks progress
  OR
- recurrence is inevitable and frequent

Examples:

### Build Now

FRAMEWORK.md

Reason:

Project already blocked.

### Build Later

AI Issuer

Reason:

Needed after multiple projects enter maintenance.

Not yet a blocker.

Expected future purpose:

Separate human identity from AI-generated operational issues.

Use dedicated AI bot account for issue creation.

---

# BUSINESS PHILOSOPHY

The founder naturally prefers:

- systems
- infrastructure
- workflows
- operations

over

- content
- branding
- aggressive sales

This affects project selection.

Projects that leverage operational leverage fit better.

Projects requiring constant relationship management fit worse.

---

# SALES CONSTRAINT

Important constraint:

Traditional sales motion is psychologically expensive.

Therefore preferred acquisition channels:

- writing
- blogging
- public building
- documentation
- case studies
- open source
- search traffic

Avoid reliance on:

- cold calls
- networking-heavy strategies
- conference-heavy sales

Not impossible.

But high energy cost.

---

# CONTENT STRATEGY DECISION

Important realization:

Writing is a more natural acquisition channel.

Evidence:

Founder has operated palgle.com for over 10 years.

Implication:

Long-form thinking is a strength.

Future marketing should heavily leverage:

- essays
- case studies
- development logs
- operational breakdowns
- architecture notes

instead of traditional sales outreach.

---

# GITHUB CONTEXT

Estimated repositories:

~120+

Across:

- personal GitHub
- REPL Works organization
- EternOps organization
- older organizations

Current concern:

Too many dormant repositories create poor signal.

Decision:

Archive or privatize low-value repositories.

Reason:

Repository count is not credibility.

Visible execution is credibility.

---

# PROJECT PORTFOLIO CONTEXT

Many projects exist simultaneously.

Examples include:

- REPL Works
- Inquiry OS
- TalkTune
- Clean Order
- WiFi Note
- SpeedCool
- SoonGanSoonGan
- KLA
- Tryvle
- ReFormat AI
- GalleryHub
- others

Important portfolio insight:

Most projects are ideas.

Few are validated.

Need prioritization.

---

# LONG GAME VS SHORT GAME

Earlier evaluation produced:

### Long Game

REPL Works
TalkTune
Inquiry OS

Reason:

Potential durable strategic assets.

Harder to build.

Harder to copy.

### Short / Cash-Generating Opportunities

WiFi Note
ReFormat AI
AI Development Operations

Reason:

Closer to current strengths.

Can generate validation and revenue sooner.

---

# AI DEVELOPMENT OPERATIONS

Unexpected business opportunity discovered during discussion.

Core idea:

Productize AI-assisted development operations.

Not coding.

Not consulting in the traditional sense.

Systematizing:

- project memory
- workflows
- documentation
- AI execution pipelines

REPL Works is foundational infrastructure for this.

---

# CURRENT EXECUTION STRATEGY

Preferred path:

1. Launch small projects quickly
2. Generate feedback
3. Generate confidence
4. Continue improving REPL Works
5. Invest larger effort into long-game projects

Reason:

Founder operates better with momentum than with extended planning.

---

# EMOTIONAL CONTEXT

Important observation:

Among many projects built in recent months,
REPL Works produced the strongest emotional response.

Reason:

Unlike most projects,

REPL Works emerged from repeated personal pain.

It feels discovered rather than invented.

Founder appears to believe:

Many project ideas are interesting.

REPL Works may be important.

---

# MANIFESTO CONTEXT

REPL Manifesto is not marketing copy.

It is a distilled description of lessons learned from actual AI-development failures.

Key sentence:

"Models forget. Projects must not."

Future AI sessions should treat this as the foundational philosophy behind all REPL Works decisions.

---

# WORKING RULE FOR FUTURE AI

When proposing new actions:

Prefer:

- durable systems
- reusable knowledge
- operational leverage
- documentation
- automation
- model-independent workflows

Avoid pushing toward:

- high-touch sales
- networking-heavy strategies
- dependence on AI memory
- framework-specific assumptions without documentation

Always ask:

"Can this be solved by making project memory stronger?"

before introducing additional complexity.
