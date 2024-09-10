import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom", // Specify the installed JSDOM environment

  transform: {
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest to handle TypeScript files
  },
};

export default createJestConfig(config);
