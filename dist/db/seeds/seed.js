"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const pg_format_1 = __importDefault(require("pg-format"));
const seed = (plantArray, quizArray, userArray, liked_plantArray, journalArray) => {
    return connection_1.default
        .query(`
      DROP TABLE IF EXISTS journal;
       DROP TABLE IF EXISTS liked_plants;
       DROP TABLE IF EXISTS users;
       DROP TABLE IF EXISTS plants;
       DROP TABLE IF EXISTS quiz;
       
       
    `)
        .then(() => {
        return connection_1.default.query(`
   CREATE TABLE plants(
    plant_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    scientific_name VARCHAR(100),
    genus VARCHAR(100),
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

   CREATE TABLE users(
   user_id SERIAL PRIMARY KEY,
   user_name VARCHAR(100) NOT NULL,
   email VARCHAR(100) NOT NULL,
   password_hash TEXT NOT NULL,
   created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE liked_plants(
   liked_plant_id SERIAL PRIMARY KEY,
   user_id INTEGER,
   plant_id INTEGER,
   FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
   FOREIGN KEY (plant_id) REFERENCES plants(plant_id) ON DELETE CASCADE
   );

   CREATE TABLE journal(
     journal_entry_id SERIAL PRIMARY KEY,
     user_id INTEGER,
     body TEXT,
     created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `);
    })
        .then(() => {
        const formattedPlantsData = plantArray.map((plant) => {
            return [
                plant.name,
                plant.scientific_name,
                plant.genus,
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
            genus,
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
    })
        .then(() => {
        const formattedUserData = userArray.map((user) => {
            return [
                user.user_name,
                user.email,
                user.password_hash,
                user.created_at,
            ];
        });
        const insertUserQuery = (0, pg_format_1.default)(`INSERT INTO users(
        user_name,
        email,
        password_hash,
        created_at
        )
        VALUES %L RETURNING *;`, formattedUserData);
        return connection_1.default.query(insertUserQuery).then((Result) => { });
    })
        .then(() => {
        const formattedLiked_plantData = liked_plantArray.map((liked_plant) => {
            return [liked_plant.user_id, liked_plant.plant_id];
        });
        const insertLiked_plantQuery = (0, pg_format_1.default)(`INSERT INTO liked_plants(
        user_id,
        plant_id
        )
        VALUES %L RETURNING *;
        `, formattedLiked_plantData);
        return connection_1.default.query(insertLiked_plantQuery).then((Result) => { });
    })
        .then(() => {
        const formattedJournalData = journalArray.map((journal) => {
            return [journal.user_id, journal.body, journal.created_at];
        });
        const insertJournalQuery = (0, pg_format_1.default)(`INSERT INTO journal(
        user_id,
        body,
        created_at
        )
        VALUES %L RETURNING *;
        `, formattedJournalData);
        return connection_1.default.query(insertJournalQuery).then((Result) => { });
    });
};
exports.default = seed;
