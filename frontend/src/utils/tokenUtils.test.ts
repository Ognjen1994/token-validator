import { generateToken } from "./tokenUtils";

describe("generateToken", () => {
  it("should generate a token with the correct format", () => {
    const availableDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const token = generateToken(availableDigits);

    expect(/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(token)).toBe(true);
  });

  it("should return an empty string when no available digits are provided", () => {
    const availableDigits: string[] = [];
    const token = generateToken(availableDigits);

    expect(token).toBe("");
  });
});
