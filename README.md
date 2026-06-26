# 03 - Repository-level custom agent starter

Use this repository during the workshop section:
**Repository-level custom agents used by a team**.

## Goal

Create a team-shared AppSec reviewer agent that can triage real findings in this repository: one supply-chain finding and one CodeQL alert.

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
scripts/fetch-security-alerts.sh
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

`npm run audit` is expected to exit non-zero and report a high-severity lodash advisory. GitHub Dependabot may show multiple related lodash alerts for the same pinned version; triage them as a supply-chain finding with a shared package/fix pattern. The code imports `lodash/merge`, but the high-severity advisory still needs function-level reachability review rather than assuming the shown helper proves reachability.

## Fetch live alert evidence

Use live GitHub security alerts as the primary evidence source:

```bash
bash scripts/fetch-security-alerts.sh
```

The script performs read-only `gh api` requests and writes:

```text
evidence/live/code-scanning-alerts.json
evidence/live/dependabot-alerts.json
```

The committed files in `alerts/` are fallback fixtures for dry runs, offline work, or participants without security-alert API access.

## Exercise

Ask Copilot:

```text
Use the repo-appsec-reviewer agent to triage the actual findings in this repository:

1. evidence/live/dependabot-alerts.json
2. evidence/live/code-scanning-alerts.json

If live API access is unavailable, use the fixture files in alerts/ instead.

Read docs/architecture.md, CODEOWNERS, package.json, package-lock.json, src/routes/search.ts, test/search.test.ts, .github/dependabot.yml, .github/codeql/codeql-config.yml, and scripts/fetch-security-alerts.sh.

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
- Live evidence from `evidence/live/` is used when available; fixture JSON is clearly treated as fallback.
- The lodash alerts are treated as a supply-chain finding with package, manifest, owner, tests, and upgrade path.
- The agent does not claim lodash exploitability only because lodash is imported; it identifies missing reachability evidence for the specific advisory.
- The SQL query alert is treated as a CodeQL finding with source, sink, validation gaps, and fix path.
- Missing ownership/test/runtime facts are explicit and affect confidence.
- The agent remains read/search only.
