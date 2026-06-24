import { buildSearchQuery } from "../src/routes/search";
import { describe, expect, it } from "vitest";

describe("buildSearchQuery", () => {
  it("builds a search query for a normal term", () => {
    expect(buildSearchQuery("status")).toContain("status");
  });

  // TODO: Add malicious input tests during the workshop.
});
