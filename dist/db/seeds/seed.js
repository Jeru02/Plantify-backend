"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const pg_format_1 = __importDefault(require("pg-format"));
const seed = (plantArray, quizArray) => {
    return connection_1.default
        .query(`
    DROP TABLE IF EXISTS plants;
    DROP TABLE IF EXISTS quiz;
    `)
        .then(() => {
        return connection_1.default.query(`
   CREATE TABLE plants(
    plant_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    scientific_name VARCHAR(100),
    type VARCHAR(50),
    description TEXT,
    light_requirements TEXT,
    watering_frequency TEXT,
    soil_type TEXT,
    bloom_season TEXT,
    mature_height TEXT,
    growth_rate VARCHAR(50),
    difficulty VARCHAR(50),
    ideal_temperature TEXT,
    toxicity TEXT,
    img_url VARCHAR(1000)
   );   
   
   CREATE TABLE quiz(
   question_id SERIAL PRIMARY KEY,
   question TEXT,
   answer TEXT
   );
    `);
    })
        .then(() => {
        const formattedPlantsData = plantArray.map((plant) => {
            return [
                plant.name,
                plant.scientific_name,
                plant.type,
                plant.description,
                plant.light_requirements,
                plant.watering_frequency,
                plant.soil_type,
                plant.bloom_season,
                plant.mature_height,
                plant.growth_rate,
                plant.difficulty,
                plant.ideal_temperature,
                plant.toxicity,
                plant.img_url,
            ];
        });
        const insertPlantQuery = (0, pg_format_1.default)(`INSERT INTO plants(name,
            scientific_name,
            type,
            description,
            light_requirements,
            watering_frequency,
            soil_type,
            bloom_season,
            mature_height,
            growth_rate,
            difficulty,
            ideal_temperature,
            toxicity,
            img_url)
      VALUES %L RETURNING *;`, formattedPlantsData);
        return connection_1.default.query(insertPlantQuery).then((Result) => { });
    })
        .then(() => {
        const formattedQuizData = quizArray.map((quiz) => {
            return [quiz.question, quiz.answer];
        });
        const insertQuizQuery = (0, pg_format_1.default)(`INSERT INTO quiz(
            question,
            answer
            )
      VALUES %L RETURNING *;`, formattedQuizData);
        return connection_1.default.query(insertQuizQuery).then((Result) => { });
    });
};
exports.default = seed;
