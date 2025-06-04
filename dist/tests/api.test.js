"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const api_1 = __importDefault(require("../api"));
const connection_1 = __importDefault(require("../db/connection"));
const seed_1 = __importDefault(require("../db/seeds/seed"));
const plant_test_1 = __importDefault(require("../db/data/test-data/plant.test"));
beforeEach(() => {
    return (0, seed_1.default)(plant_test_1.default);
});
afterAll(() => {
    return connection_1.default.end();
});
describe("GET /api/plants", () => {
    test("200 - responds with the requested array containing all of the plants", () => {
        return request(api_1.default)
            .get("/api/plants")
            .expect(200)
            .then((response) => {
            expect(response.body.plants).toHaveLength(10);
            response.body.plants.forEach((singlePlant) => {
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
