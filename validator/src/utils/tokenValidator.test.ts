const { validateToken } = require("./tokenValidator");

describe("validateToken", () => {
  it("returns true for a valid token", () => {
    const validToken = "6193-1798-6418-7766";
    expect(validateToken(validToken)).toBe(true);
  });

  it("returns false for an invalid token", () => {
    const invalidToken = "1234-5678-9012-3457";
    expect(validateToken(invalidToken)).toBe(false);
  });
});
