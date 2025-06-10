import db from "../../db/connection";
import { QueryResult } from "pg";

export const selectJournalEntriesByUserId = (
  user_id: string
): Promise<QueryResult> => {
  return db.query(`SELECT * FROM journal WHERE user_id = $1`, [user_id]);
};

export const insertJournalEntry = (
  body: string,
  user_id: string
): Promise<QueryResult> => {
  return db.query(
    `INSERT INTO journal(user_id, body) VALUES ($1, $2) RETURNING * `,
    [user_id, body]
  );
};
