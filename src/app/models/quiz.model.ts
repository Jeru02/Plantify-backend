import db from "../../db/connection";
import { QueryResult } from "pg";

export const selectQuestionById = (question_id: string): Promise<QueryResult> => {
  return db.query(`SELECT * FROM quiz WHERE question_id=$1`, [question_id]);
};