"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const api_1 = __importDefault(require("../api"));
const connection_1 = __importDefault(require("../db/connection"));
const seed_1 = __importDefault(require("../db/seeds/seed"));
const plant_1 = __importDefault(require("../db/data/test-data/plant"));
beforeEach(() => {
    return (0, seed_1.default)(plant_1.default);
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
            console.log(response);
        });
    });
});
