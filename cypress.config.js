const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // "retries": {
    //   // Configure retry attempts for `cypress run`
    //   // Default is 0
    //   "runMode": 2,
    //   // Configure retry attempts for `cypress open`
    //   // Default is 0
    //   "openMode": 0
    // }
  },
  e2e: {
    setupNodeEvents,
    baseUrl:'https://www.google.com/',
    specPattern: "cypress/e2e/bdd-cucumber/features/*.feature",
    chromeWebSecurity: false,
    watchForFileChanges:false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000
 },
});
