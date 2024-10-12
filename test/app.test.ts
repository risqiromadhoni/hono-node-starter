import { describe, expect, it } from "vitest";
import { app } from "../src";

describe("Vitest for hono", () => {
  it("should return Hello Hono!", async () => {
    const res = await app.request("/", {
      method: "GET",
    });
    const resBody = await res.text();
    expect(res.status).toBe(200);
    expect(resBody).toBe("Hello Hono!");
  });
})
