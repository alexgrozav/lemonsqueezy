import { getUser } from ".";
import { LemonsqueezyDataType } from "../../shared";
import { describe, it, expect, beforeAll } from "vitest";

describe.concurrent("User", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Get user", async () => {
    const user = await getUser({
      apiKey,
    });

    expect(user).toBeDefined();
    expect(user.data).toBeDefined();
    expect(user.data.type).toBe(LemonsqueezyDataType.users);
    expect(user.errors).toBeUndefined();
  });
});
