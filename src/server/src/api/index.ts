import { Router } from "express";
import dashboard from "./routes/dashboard";
import train from "./routes/train";

// guaranteed to get dependencies
export default () => {
  const app = Router();

  dashboard(app);
  train(app);

  return app;
};
