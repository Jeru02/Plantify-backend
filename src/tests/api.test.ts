const request = require("supertest");
import app from "../api";
import db from "../db/connection";
import seed from "../db/seeds/seed";
import PlantData from "../db/data/test-data/plant";

beforeEach(() => {
  return seed(PlantData);
});
afterAll(() => {
  return db.end();
});

describe("GET /api/plants", () => {
  test("200 - responds with the requested array containing all of the plants", () => {
    return request(app)
      .get("/api/plants")
      .expect(200)
      .then((response: Express.Response) => {
        console.log(response);
        // expect(response.body.plants).toHaveLength(10);
      });
  });
});
