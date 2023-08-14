module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/*.test.ts?(x)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testTimeout: 30000,
};
