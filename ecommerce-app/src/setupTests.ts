import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("./lib/firebase/firebase", () => ({
    auth: {},
    db: {},
}));