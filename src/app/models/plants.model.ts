import db from "../../db/connection";
import { QueryResult } from "pg";

export const selectPlants = (): Promise<QueryResult> => {
  return db.query("SELECT * FROM plants;");
};

export const selectPlantById = (plant_id: string): Promise<QueryResult> => {
  return db.query(`SELECT * FROM plants WHERE plant_id=$1`, [plant_id]);
};

export const selectPlantByGenus = (genus: string): Promise<QueryResult> => {
  return db.query(`SELECT * FROM plants WHERE genus=$1`, [genus]);
};
