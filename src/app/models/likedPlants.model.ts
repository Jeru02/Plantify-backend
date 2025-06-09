import db from "../../db/connection";
import { QueryResult } from "pg";

export const selectLikedPlantsByUserId = (user_id: string): Promise<QueryResult> => {
  return db.query(`SELECT * FROM liked_plants WHERE user_id = $1`, [user_id]);
}