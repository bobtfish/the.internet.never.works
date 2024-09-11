import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest'

const defaultEsmPreset = createDefaultEsmPreset()

const config: JestConfigWithTsJest = {
  testEnvironment: 'jsdom',
  verbose: true,
  ...defaultEsmPreset,
  "modulePaths": [
    "<rootDir>/app/"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/cdk/",
    "<rootDir>/node_modules/"
  ],
  transform: {
    ...defaultEsmPreset.transform,
    "\\.yaml$": "jest-transform-yaml",
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "yaml",
    "js",
    "jsx",
    "json",
    "css"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "^~/(.*)$": "<rootDir>/app/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/app/testing-utils/mocks.js"]
};

export default config;
