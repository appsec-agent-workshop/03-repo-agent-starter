import type { Request, Response } from "express";
import merge from "lodash/merge";
import type { Pool } from "mysql2/promise";

type UserPreferences = {
  theme?: string;
  alerts?: {
    sort?: "newest" | "oldest" | "severity";
  };
};

const defaultPreferences: UserPreferences = {
  theme: "dark",
  alerts: {
    sort: "severity",
  },
};

export function buildSearchQuery(term: string): string {
  return `select id, title from documents where title like '%${term}%'`;
}

export async function searchDocuments(req: Request, res: Response, db: Pool): Promise<void> {
  const term = String(req.query.term ?? "");
  const [rows] = await db.query(buildSearchQuery(term));

  res.json({ results: rows });
}

export function mergeUserPreferences(rawPreferences: string): UserPreferences {
  const userPreferences = JSON.parse(rawPreferences) as UserPreferences;
  return merge({}, defaultPreferences, userPreferences);
}
