import db from "../../db/connection";
import { QueryResult } from "pg";

const selectPlants = (): Promise<QueryResult> => {
  return db.query("SELECT * FROM plants;");
};

export default selectPlants;
