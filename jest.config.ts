import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  modulePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/cdk/",
    "<rootDir>/node_modules/"
  ]
};

export default config;
