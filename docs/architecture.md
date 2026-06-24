# Demo API architecture

This is intentionally small and incomplete. Use it to teach a repository-level agent how to apply repository context to concrete Dependabot and CodeQL findings.

## Components

- `src/routes/search.ts`: search route and preference helper used by the sample findings.
- `evidence/live/`: generated live alert evidence from read-only GitHub REST calls.
- `alerts/codeql-sql-injection.json`: fallback fixture for the CodeQL alert when live API access is unavailable.
- `alerts/dependabot-lodash.json`: fallback fixture for the lodash Dependabot alerts when live API access is unavailable.
- `test/search.test.ts`: positive-path tests only.

## Current assumptions

- The API is expected to be authenticated.
- Authorization requirements are not documented yet.
- The search route reads `req.query.term`.
- Database queries must use parameters or a query builder, but this is not enforced yet.
- User preference JSON may come from authenticated users.
- Runtime exposure is authenticated but authorization behavior is unknown.
- Malicious-input tests and lodash advisory reachability checks are missing.

## Workshop task

Use the repo-level agent to triage both sample findings. The goal is not to fix the code during this lab; it is to produce a grounded human-reviewed recommendation with missing evidence, confidence, and next action.
