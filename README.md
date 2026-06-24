# 03 - Repository-level custom agent starter

Use this repository during the workshop section:
**Repository-level custom agents used by a team**.

## Goal

Create a team-shared AppSec reviewer agent that understands repository architecture, ownership, validation expectations, and security boundaries.

## What is already scaffolded

```text
.github/agents/repo-appsec-reviewer.agent.md
docs/architecture.md
CODEOWNERS
src/routes/search.ts
test/search.test.ts
```

## Exercise

Ask Copilot:

```text
Use the repo-appsec-reviewer agent to review this repository's architecture and the sample search route.
Identify what repository-specific AppSec assumptions are missing and propose improvements to .github/agents/repo-appsec-reviewer.agent.md.
Do not make code changes yet.
```

## Done when

- The repo-level agent names local architecture assumptions.
- Missing ownership/test/runtime facts are explicit.
- The agent remains read/search only.
