import { expect, test } from "vitest";
import { getPinnedProjects } from "./projects.service";

test("getPinnedProjects deve retornar lista de projects", async () => {
  const res = await getPinnedProjects();

  expect(Array.isArray(res.data.user.pinnedItems.nodes)).toBeTruthy();
});
