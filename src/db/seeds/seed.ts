import db from "../connection";
import { Plant } from "../data/test-data/plant.test-data";
import { Quiz } from "../data/test-data/quiz.test-data";
import { User } from "../data/test-data/users.test-data";
import { Like_plant } from "../data/test-data/like_plants.test-data";
import format from "pg-format";

const seed = (
  plantArray: Plant[],
  quizArray: Quiz[],
  userArray: User[],
  like_plantArray: Like_plant[]
): Promise<any> => {
  return db
    .query(
      `
       DROP TABLE IF EXISTS like_plants;
       DROP TABLE IF EXISTS plants;
       DROP TABLE IF EXISTS quiz;
       DROP TABLE IF EXISTS users;
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

   CREATE TABLE like_plants(
   like_plants_id SERIAL PRIMARY KEY,
   user_id INTEGER,
   plant_id INTEGER,
   FOREIGN KEY (user_id) REFERENCES users(user_id),
   FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
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
      const formattedLike_plantData: Array<number[]> = like_plantArray.map((like_plant: Like_plant) => {
        return [
          like_plant.user_id,
          like_plant.plant_id
        ]
      });
      const insertLike_plantQuery: string = format(
        `INSERT INTO like_plants(
        user_id,
        plant_id
        )
        VALUES %L RETURNING *;
        `,
        formattedLike_plantData
      );
      return db.query(insertLike_plantQuery).then((Result: any) => { });
    })
};

export default seed;
