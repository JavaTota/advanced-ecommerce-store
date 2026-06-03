import {vi} from "vitest";

vi.mock("../lib/firebase/firebase", () => ({
  auth: {},
  db: {},
}));

import { render } from "@testing-library/react";
import {  expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";



test("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
        <Login />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});