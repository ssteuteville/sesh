const { getDefaultConfig } = require("expo/metro-config");
const findRoot = require("find-yarn-workspace-root");
const path = require("path");

// Find the project and workspace directories
// eslint-disable-next-line no-undef
const projectRoot = __dirname;
const workspaceRoot = findRoot(projectRoot);

const config = getDefaultConfig(projectRoot);
// support cjs for firebase
config.resolver.sourceExts.push("cjs");

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

config.resolver.resolverMainFields = ["react-native", "browser", "main"];

module.exports = config;
