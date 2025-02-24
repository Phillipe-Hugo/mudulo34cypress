const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reporterDir: "cypress/relatorio",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "ddmmyyyy_HHMMss",
  },
});
