module.exports = {
  ...require('./jest-common'),
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  // after Jest is loaded
  setupTestFrameworkScriptFile: require.resolve('./setup-tests.js'),
}
