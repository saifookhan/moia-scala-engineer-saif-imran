import config from "./config";

import express from "express";

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
}

startServer();
