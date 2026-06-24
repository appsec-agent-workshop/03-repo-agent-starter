export function buildSearchQuery(term: string): string {
  // Workshop intentionally leaves this naive so the repo-level agent has something to reason about.
  return `select id, title from documents where title like '%${term}%'`;
}
