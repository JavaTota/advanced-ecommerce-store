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