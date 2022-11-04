module.exports = {
  branches: "master", //we can have mutliple branches here too
  repositoryUrl: "https://github.com/IqraAziz-15/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
