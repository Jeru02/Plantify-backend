"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plant_test_data_1 = __importDefault(require("../db/data/test-data/plant.test-data"));
const utils_1 = __importDefault(require("../utils"));
describe("tests for findPlantName util function", () => {
    xtest("if Helianthus the function will return  'Helianthus annuus' object", () => {
        const inputString = 'Helianthus annuus';
        const expectedOutput = [{
                name: "Sunflower",
                scientific_name: "Helianthus annuus",
                type: "Flower",
                description: "Sunflowers are large, bright, and cheerful annual plants known for their tall stems and striking yellow petals surrounding a seed-filled center.",
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
            }];
        const output = (0, utils_1.default)(inputString, plant_test_data_1.default);
        expect(output).toEqual(expectedOutput);
    });
});
