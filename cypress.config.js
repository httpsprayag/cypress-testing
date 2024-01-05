const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://coaching-seven.vercel.app/"
  },
});
