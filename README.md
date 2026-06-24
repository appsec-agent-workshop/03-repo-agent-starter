# 03 - Repository-level custom agent starter

Use this repository during the workshop section:
**Repository-level custom agents used by a team**.

## Goal

Create a team-shared AppSec reviewer agent that can triage real findings in this repository: one supply-chain alert and one CodeQL code scanning alert.

This repository is intentionally vulnerable for the workshop. Do not copy these dependency versions or code patterns into production.

## What is already scaffolded

```text
.github/agents/repo-appsec-reviewer.agent.md
.github/codeql/codeql-config.yml
.github/dependabot.yml
alerts/codeql-sql-injection.json
alerts/dependabot-lodash.json
docs/architecture.md
CODEOWNERS
package.json
src/routes/search.ts
test/search.test.ts
```

Run setup once:

```bash
npm install
```

Useful checks:

```bash
npm run typecheck
npm test
npm run audit
```

`npm run audit` is expected to report a lodash advisory. That is part of the exercise.

## Exercise

Ask Copilot:

```text
Use the repo-appsec-reviewer agent to triage the actual findings in this repository:

1. alerts/dependabot-lodash.json
2. alerts/codeql-sql-injection.json

Read docs/architecture.md, CODEOWNERS, package.json, package-lock.json, src/routes/search.ts, test/search.test.ts, .github/dependabot.yml, and .github/codeql/codeql-config.yml.

For each finding:
- separate facts from assumptions
- cite the repo evidence
- identify missing evidence and confidence ceiling
- choose one route: fix-now, campaign-candidate, needs-reachability-analysis, needs-codeql-timeout-investigation, or human-escalation
- recommend a human-reviewed next action

Do not make code changes yet.
```

## Done when

- The repo-level agent ties both findings to concrete files in this repository.
- The lodash advisory is treated as a supply-chain finding with package, manifest, owner, tests, and upgrade path.
- The SQL query alert is treated as a CodeQL finding with source, sink, validation gaps, and fix path.
- Missing ownership/test/runtime facts are explicit and affect confidence.
- The agent remains read/search only.
