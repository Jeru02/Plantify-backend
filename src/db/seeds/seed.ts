import db from "../connection";
import { Plant } from "../data/test-data/plant.test-data";
import { Quiz } from "../data/test-data/quiz.test-data";
import { User } from "../data/test-data/users.test-data";
import { Liked_plant } from "../data/test-data/liked_plants.test-data";
import format from "pg-format";
import { Result } from "pg";
import { JournalEntry } from "../data/test-data/journal.test-data";

const seed = (
  plantArray: Plant[],
  quizArray: Quiz[],
  userArray: User[],
  liked_plantArray: Liked_plant[],
  journalArray: JournalEntry[]
): Promise<any> => {
  return db
    .query(
      `
      DROP TABLE IF EXISTS journal;
       DROP TABLE IF EXISTS liked_plants;
       DROP TABLE IF EXISTS users;
       DROP TABLE IF EXISTS plants;
       DROP TABLE IF EXISTS quiz;
       
       
    `
    )
    .then(() => {
      return db.query(`
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
      const formattedPlantsData: Array<(number | string)[]> = plantArray.map(
        (plant: Plant) => {
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
        }
      );

      const insertPlantQuery: string = format(
        `INSERT INTO plants(name,
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
      VALUES %L RETURNING *;`,
        formattedPlantsData
      );
      return db.query(insertPlantQuery).then((Result: any) => {});
    })
    .then(() => {
      const formattedQuizData: Array<(number | string)[]> = quizArray.map(
        (quiz: Quiz) => {
          return [quiz.question, quiz.answer];
        }
      );
      const insertQuizQuery: string = format(
        `INSERT INTO quiz(
            question,
            answer
            )
      VALUES %L RETURNING *;`,
        formattedQuizData
      );
      return db.query(insertQuizQuery).then((Result: any) => {});
    })
    .then(() => {
      const formattedUserData: Array<(number | string)[]> = userArray.map(
        (user: User) => {
          return [
            user.user_name,
            user.email,
            user.password_hash,
            user.created_at,
          ];
        }
      );
      const insertUserQuery: string = format(
        `INSERT INTO users(
        user_name,
        email,
        password_hash,
        created_at
        )
        VALUES %L RETURNING *;`,
        formattedUserData
      );
      return db.query(insertUserQuery).then((Result: any) => {});
    })
    .then(() => {
      const formattedLiked_plantData: Array<number[]> = liked_plantArray.map(
        (liked_plant: Liked_plant) => {
          return [liked_plant.user_id, liked_plant.plant_id];
        }
      );
      const insertLiked_plantQuery: string = format(
        `INSERT INTO liked_plants(
        user_id,
        plant_id
        )
        VALUES %L RETURNING *;
        `,
        formattedLiked_plantData
      );
      return db.query(insertLiked_plantQuery).then((Result: any) => {});
    })
    .then(() => {
      const formattedJournalData: Array<(number | string)[]> = journalArray.map(
        (journal: JournalEntry) => {
          return [journal.user_id, journal.body, journal.created_at];
        }
      );
      const insertJournalQuery: string = format(
        `INSERT INTO journal(
        user_id,
        body,
        created_at
        )
        VALUES %L RETURNING *;
        `,
        formattedJournalData
      );
      return db.query(insertJournalQuery).then((Result: any) => {});
    });
};

export default seed;
