module.exports = {
  testMatch: [ "<rootDir>/client.tests/**/*.test.js" ],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
      }
};