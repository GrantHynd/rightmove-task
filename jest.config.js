module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/jest.polyfills.js", "<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: [''],
  }
};
