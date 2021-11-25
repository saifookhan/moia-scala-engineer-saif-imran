process.env.PORT = "65005";
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

  describe("Request train", () => {
    it("should throw an error because of incorrect values", async (done) => {
      const invalidTrainRequest = getDefaultTrainRequest();
      invalidTrainRequest.startTerminal = null;

      const serviceRequestRes = await request(app)
        .post("/api/train/request")
        .send(invalidTrainRequest);

      expect(serviceRequestRes.status).toBe(400);
      console.log("serviceRequestRes, ", serviceRequestRes);
      expect(serviceRequestRes.text).toMatch("values missing");
      done();
    });
  });
});
