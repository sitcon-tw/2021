const path = require("path");
const fs = require("fs");

//const gaTempHTML = fs.readFileSync(path.join(__dirname, "./template/ga.html"));

//const sessionData = require(path.join(__dirname, "./public/json/session.json"));

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/2021/" : "/",
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/2021/',
        '/2021/cfp',
        '/2021/cfp/',
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    },
  },
};
