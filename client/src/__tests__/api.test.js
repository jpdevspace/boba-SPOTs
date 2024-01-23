import fetchData from "../utils/http";
import mockData from "../data/mockData";

import { beforeEach, describe, expect, test } from "vitest";

describe("Testing the API", () => {
  beforeEach(() => fetch.resetMocks());

  test("Calls our API and returns data", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const res = await fetchData("lg");

    expect(res.length).toEqual(20);
    expect(fetch.requests().length).toEqual(1);
    expect(fetch.requests()[0].url).toEqual(
      "http://localhost:8080/yelp/boba/lg",
    );
  });
});
