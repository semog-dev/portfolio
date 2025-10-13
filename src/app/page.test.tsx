import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmConstrucao } from "./page";

test("Page_DeveRenderizarPageEmConstrucao", () => {
  render(<EmConstrucao />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Em construção..." })
  ).toBeDefined();
});
