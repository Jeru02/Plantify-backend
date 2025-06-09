import db from "../../db/connection";
import { QueryResult } from "pg";

export const selectLikedPlantsByUserId = (user_id: string): Promise<QueryResult> => {
  return db.query(`SELECT * FROM liked_plants WHERE user_id = $1`, [user_id]);
}

export const insertLikedPlant = (user_id: string, plant_id: string) => {
  return db.query(
    `INSERT INTO liked_plants (user_id, plant_id) VALUES ($1, $2) RETURNING *`,
    [user_id, plant_id]
  );
};

export const deleteLikedPlant = (liked_plant_id: string) => {
  return db.query(
    `DELETE FROM liked_plants WHERE liked_plant_id = $1`,
    [liked_plant_id]
  );
};
