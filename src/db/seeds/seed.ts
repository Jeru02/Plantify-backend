
import db from "../connection";
import { Plant } from "../data/test-data/plant";
const format = require("pg-format");

const seed = (plantArray: Object[]): Promise<any> => {

    return db
        .query(`
    DROP TABLE IF EXISTS plants;   
    `)
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
            // const formattedPlantsData= plantArray.map(
            //     (plant: Plant)=> {
            //     return [plant.plant_id, plant.name, plant.scientific_name];
            //   }
            // );
    })



}



export default seed
