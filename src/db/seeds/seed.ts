import db from "../connection";
import { Plant } from "../data/test-data/plant";
const format = require("pg-format");

const seed = (plantArray: Plant[]): Promise<any> => {
  return db
    .query(
      `
    DROP TABLE IF EXISTS plants;   
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
    bloom_season TEXT,
    mature_height TEXT,
    growth_rate VARCHAR(50),
    difficulty VARCHAR(50),
    ideal_temperature TEXT,
    toxicity TEXT,
    img_url VARCHAR(1000)
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
    });
};

export default seed;
