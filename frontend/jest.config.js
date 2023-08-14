/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/*.test.ts?(x)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Important: order matters, specific rules should be defined first
  // https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss|less)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss|less)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$": `<rootDir>/__mocks__/fileMock.js`,
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  testTimeout: 30000,
};
