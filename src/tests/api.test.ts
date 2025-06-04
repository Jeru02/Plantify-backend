const request = require("supertest");
import app from "../api";
import db from "../db/connection";
import seed from "../db/seeds/seed";
import PlantData from "../db/data/test-data/plant.test";
import { Response } from "supertest";
import { QueryResult } from "pg";

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
      .then((response: Response) => {
        expect(response.body.plants).toHaveLength(10);
        response.body.plants.forEach((singlePlant: QueryResult) => {
          expect(singlePlant).toMatchObject({
            plant_id: expect.any(Number),
            name: expect.any(String),
            scientific_name: expect.any(String),
            type: expect.any(String),
            description: expect.any(String),
            light_requirements: expect.any(String),
            watering_frequency: expect.any(String),
            soil_type: expect.any(String),
            bloom_season: expect.any(String),
            mature_height: expect.any(String),
            growth_rate: expect.any(String),
            difficulty: expect.any(String),
            ideal_temperature: expect.any(String),
            toxicity: expect.any(String),
            img_url: expect.any(String),
          });
        });
      });
  });
});
