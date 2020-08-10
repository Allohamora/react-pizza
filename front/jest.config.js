module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/__test__/setupTests.ts"]
};