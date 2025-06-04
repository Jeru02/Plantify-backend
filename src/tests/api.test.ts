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

describe("GET /api/plants/:plant_id", () => {
  test("200 - responds with the requested plant by plant_id", () => {
    return request(app)
      .get("/api/plants/1")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.plant).toEqual({
          plant_id: 1,
          name: "Sunflower",
          scientific_name: "Helianthus annuus",
          type: "Flower",
          description:
            "Sunflowers are large, bright, and cheerful annual plants known for their tall stems and striking yellow petals surrounding a seed-filled center.",
          light_requirements: "Full Sun (6–8 hours of direct sunlight per day)",
          watering_frequency: "2–3 times per week, depending on soil dryness",
          soil_type: "Well-draining, loamy soil rich in organic matter",
          bloom_season: "Summer to early fall",
          mature_height: "1.5 to 3.5 meters (5–12 feet)",
          growth_rate: "Fast",
          difficulty: "Easy",
          ideal_temperature: "21°C to 30°C (70°F to 86°F)",
          toxicity: "Non-toxic to humans and pets",
          img_url: "www.google.com",
        });
      });
  });
});
