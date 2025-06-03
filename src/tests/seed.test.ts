import db from "../db/connection";
import seed from "../db/seeds/seed";
import PlantData from "../db/data/test-data/plant";
import { QueryResult } from "pg";

beforeAll(() => seed(PlantData));
afterAll(() => db.end());

describe("plants table", () => {
  test("plants table exists", () => {
    return db
      .query(
        `SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'plants'
            );`
      )
      .then((Result: QueryResult) => {
        expect(Result.rows[0].exists).toBe(true);
      });
  });
});
