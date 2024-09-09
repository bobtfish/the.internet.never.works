import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest'

const defaultEsmPreset = createDefaultEsmPreset()

const config: JestConfigWithTsJest = {
  testEnvironment: 'node',
  verbose: true,
  ...defaultEsmPreset,
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
    "json"
  ]
};

export default config;
