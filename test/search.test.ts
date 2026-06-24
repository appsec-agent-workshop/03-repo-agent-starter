import { buildSearchQuery, mergeUserPreferences } from "../src/routes/search";
import { describe, expect, it } from "vitest";

describe("buildSearchQuery", () => {
  it("builds a search query for a normal term", () => {
    expect(buildSearchQuery("status")).toContain("status");
  });

  // TODO: Add malicious input tests during the workshop.
});

describe("mergeUserPreferences", () => {
  it("keeps default preferences when the user provides an empty object", () => {
    expect(mergeUserPreferences("{}")).toEqual({
      theme: "dark",
      alerts: {
        sort: "severity",
      },
    });
  });

  // TODO: Add a lodash advisory reachability check if code starts using an advisory-specific sink such as _.template.
});
