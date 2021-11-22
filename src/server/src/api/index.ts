import { Router } from "express";
import dashboard from "./routes/dashboard";

// guaranteed to get dependencies
export default () => {
  const app = Router();

  dashboard(app);

  return app;
};
