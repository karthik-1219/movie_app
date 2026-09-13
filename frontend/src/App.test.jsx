import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import App from "./App";

const movies = { movies: [
  { id: "123", title: "Top Gun: Maverick" },
  { id: "456", title: "Sonic the Hedgehog" },
] };

describe("Movie Picture", () => {
  beforeEach(() => { vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => movies })); });
  afterEach(() => { vi.restoreAllMocks(); });

  it("renders movies returned by the API", async () => {
    render(<App />);
    expect(await screen.findByText("Top Gun: Maverick")).toBeInTheDocument();
    expect(screen.getByText("Sonic the Hedgehog")).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalledWith("http://localhost:5000/movies"));
  });
});
