process.env.PORT = "65004";
import server from "../../src/app";
import { getDefaultTrainRequest } from "../testDataCreator";

const request = require("supertest");

const updatedTrainState = {
  name: 0,
  terminal: 3,
  direction: true,
  passengers: 1,
};

describe("Dashboard Endpoint", () => {
  let app;

  beforeAll(async (done) => {
    // Container.set(CafeSortService, cafeSortService);
    app = await server;
    done();
  });

  afterAll(async (done) => {
    done();
  });

  describe("Get dashboard data", () => {
    it("should return the trains state", async (done) => {
      const dashboardRes = await request(app).get("/api/dashboard");

      expect(dashboardRes.status).toBe(200);
      expect(dashboardRes.body.length).toBe(32);

      done();
    });

    it("should return non initialized values", async (done) => {
      const serviceRequestResx = await request(app)
        .post("/api/train/request")
        .send(getDefaultTrainRequest());

      // increase the clock (2ticks)
      await request(app).get("/api/dashboard");
      await request(app).get("/api/dashboard");

      // another tick will be added
      const serviceRequestRes = await request(app).get("/api/dashboard");

      expect(serviceRequestRes.status).toBe(200);
      expect(serviceRequestRes.body[0]).toEqual(updatedTrainState);

      done();
    });
  });
});
