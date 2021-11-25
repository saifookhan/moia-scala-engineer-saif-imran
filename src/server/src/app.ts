import config from "./config";

const express = require("express");

import Logger from "./loaders/logger";

import Scheduler from "./services/schedulerService";

async function startServer() {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app.locals.scheduler = new Scheduler();

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
  return app;
}

const server = startServer();

export default server;
