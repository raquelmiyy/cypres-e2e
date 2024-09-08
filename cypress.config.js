const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zc4v43",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    //mochawesome é um plugin que gera um relatório de testes
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss'
  },
}});
