#!/usr/bin/env node

const jest = require("jest");
const path = require("path");

const args = [];
const config = {
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/**/*.js"],
  testPathIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: [path.resolve(__dirname, "../setup.js")],
}; // something
args.push('--config', JSON.stringify(config));

jest.run(args);
