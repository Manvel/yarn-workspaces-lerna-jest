const path = require("path");

module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/**/*.js"],
  testPathIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: [path.resolve(__dirname, "./setup.js")],
};
