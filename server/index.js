const express = require('express');
const next = require('next');
const https = require('https');
const fs = require('fs');

const port = parseInt(process.env.PORT || '6003');
const host = '192.168.1.3';

const app = next({
  dev: process.env.NODE_ENV !== 'production',
});
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const expressApp = express();

  expressApp.get('*', (req, res) => handle(req, res));

  // Use HTTPS if HTTPS option enabled
  const hasCertificates =
    fs.existsSync('./server/192.168.1.3-key.pem') && fs.existsSync('./server/192.168.1.3.pem');
  const useHttps = process.env.HTTPS === 'true' && hasCertificates;

  if (useHttps) {
    const options = {
      key: fs.readFileSync('./server/192.168.1.3-key.pem'),
      cert: fs.readFileSync('./server/192.168.1.3.pem'),
    };
    const server = https.createServer(options, expressApp);
    server.listen(port, host);
    console.log(`> Ready on https://${host}:${port}`);
  } else {
    expressApp.listen(port, host);
    console.log(`> Ready on http://${host}:${port}`);
  }
})();

// const { Nuxt, Builder } = require("nuxt");
// const express = require("express");
// const fs = require("fs");
// const https = require("https");
// const port = process.env.PORT || 443;
// const isProd = process.env.NODE_ENV === "production";
// const app = express();
// const nuxtConfig = require("../nuxt.config.js");
// const nuxt = new Nuxt(nuxtConfig);
// let server = null;
// let dev_options = null;
// let production_options = null;

// if (isProd) {
//   //production
//   production_options = {
//     // key: fs.readFileSync("/home/admin/conf/web/ssl.kote2.tokyo.key"),
//     // cert: fs.readFileSync("/home/admin/conf/web/ssl.kote2.tokyo.pem")
//     key: fs.readFileSync("./server/10.0.0.8-key.pem"),
//     cert: fs.readFileSync("./server/10.0.0.8.pem")
//   };
//   server = https.createServer(production_options, app);
// } else {
//   //dev
//   dev_options = {
//     key: fs.readFileSync("./server/10.0.0.8-key.pem"),
//     cert: fs.readFileSync("./server/10.0.0.8.pem")
//   };
//   server = https.createServer(dev_options, app);
// }
// app.use(nuxt.render);

// function listen() {
//   server.listen(port, () => {
//     console.log(`Port: ${port}番でサーバーを起動しました`);
//   });
// }

// if (!isProd) {
//   new Builder(nuxt)
//     .build()
//     .then(listen)
//     .catch(error => {
//       console.error(error);
//       process.exit(1);
//     });
// } else {
//   listen();
// }
