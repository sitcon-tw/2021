const path = require("path");
const fs = require("fs");

const gaTempHTML = fs.readFileSync(path.join(__dirname, "./template/ga.html"));

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
        '/2021/cfp/news',
        '/2021/cfp/news/',
        '/2021/cfp/ocfp-news',
        '/2021/cfp/ocfp-news/',
        '/2021/agenda',
        '/2021/agenda/',
        '/2021/venue',
        '/2021/venue/',
        '/2021/traffic',
        '/2021/traffic/',
        '/2021/team',
        '/2021/team/',
        '/2021/sponsor',
        '/2021/sponsor/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: (route) => {
        // Auto inject GA template
        route.html = route.html.replace(
          "<noscript>{{{ %GA_TEMPLATE% }}}</noscript>",
          gaTempHTML
        );
        return route;
      }
    },
  },
};
