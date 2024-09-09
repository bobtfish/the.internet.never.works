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
};

export default config;
