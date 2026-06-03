import { render } from "@testing-library/react";
import {  expect, test } from "vitest";
import Logout from "../pages/Logout";
import { MemoryRouter } from "react-router-dom";

test("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
        <Logout />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});