module.exports = {
  roots: ["<rootDir>/src"], // Pasta raiz dos testes
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx|js)"],
  coverageReporters: ["lcov", "text"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["jest-styled-components"],
};
