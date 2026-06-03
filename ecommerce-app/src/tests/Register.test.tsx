import {vi} from "vitest";

vi.mock("../lib/firebase/firebase", () => ({
  auth: {},
  db: {},
}));

import { render } from "@testing-library/react";
import {  expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Register from "../pages/Register";



test("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
        <Register />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});