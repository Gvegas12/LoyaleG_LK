import path from "path";

export default {
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
    "\\.s?css$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  rootDir: "../../",
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  globals: {
    __IS_DEV__: true,
  },
};
