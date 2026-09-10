import { describe, expect, it } from "vitest";

describe("Movie App", () => {
  it("contains the expected movie data structure", () => {
    const movies = [
      {
        id: "123",
        title: "Top Gun: Maverick",
      },
      {
        id: "456",
        title: "Sonic the Hedgehog",
      },
      {
        id: "789",
        title: "A Quiet Place",
      },
    ];

    expect(movies).toHaveLength(3);
    expect(movies[0]).toHaveProperty("id");
    expect(movies[0]).toHaveProperty("title");
  });
});