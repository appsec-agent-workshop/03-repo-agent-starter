# Demo API architecture

This is intentionally small and incomplete. Use it to teach a repository-level agent what context it should look for.

## Components

- `src/routes/search.ts`: search route used by the sample CodeQL alert.
- `test/search.test.ts`: placeholder tests.

## Current assumptions

- The API is expected to be authenticated.
- Authorization requirements are not documented yet.
- Database query construction rules are not documented yet.
- Runtime exposure is unknown.

## Workshop task

Update this document or the repo-level agent with the facts a real team would need before making a triage recommendation.
