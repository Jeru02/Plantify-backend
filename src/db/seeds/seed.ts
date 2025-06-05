import db from "../connection";
import { Plant } from "../data/test-data/plant.test-data";
import { Quiz } from "../data/test-data/quiz.test-data";
import format from "pg-format";

const seed = (plantArray: Plant[], quizArray: Quiz[]): Promise<any> => {
  return db
    .query(
      `
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
      const formattedPlantsData: Array<(number | string)[]> = plantArray.map(
        (plant: Plant) => {
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
        }
      );

      const insertPlantQuery: string = format(
        `INSERT INTO plants(name,
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
    });
};

export default seed;
