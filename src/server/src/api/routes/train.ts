import { Router, Request, Response } from "express";
import LoggerInstance from "../../loaders/logger";

const route = Router();

export default (app: Router) => {
  app.use("/train", route);

  route.post("/request", async (req: Request, res: Response) => {
    try {
      LoggerInstance.info("post /train/request called");
      const currentStatus = await req.app.locals.scheduler.scheduleRequest(
        req.body
      );

      return res.status(200).send(currentStatus);
    } catch (e) {
      LoggerInstance.error(e);
      if (e.message.includes("missing")) return res.status(400).send(e.message);
      return res.status(500).send(e.message);
    }
  });
};
