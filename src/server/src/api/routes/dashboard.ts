import { Router, Request, Response } from "express";
import LoggerInstance from "../../loaders/logger";

const route = Router();

export default (app: Router) => {
  app.use("/dashboard", route);

  route.get(
    "/",

    async (req: Request, res: Response) => {
      try {
        LoggerInstance.info("get /dashboard called");

        await req.app.locals.scheduler.proceed();
        const currentStatus = await req.app.locals.scheduler.getAllTrainsStats();

        return res.status(200).send(currentStatus);
      } catch (e) {
        LoggerInstance.error(e);
        if (e.message.includes("missing"))
          return res.status(400).send(e.message);
        return res.status(500).send(e.message);
      }
    }
  );
};
