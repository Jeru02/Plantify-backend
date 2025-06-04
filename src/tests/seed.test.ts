import db from "../db/connection";
import seed from "../db/seeds/seed";
import PlantData from "../db/data/test-data/plant.test";
import { QueryResult } from "pg";
import { Plant } from "../db/data/test-data/plant.test";

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

  test("plant table has the column of plant_id which is a serial number", () => {
    return db
      .query(
        `SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'plants'
            AND column_name = 'plant_id';`
      )
      .then((Result: QueryResult) => {
        expect(Result.rows[0].column_name).toBe("plant_id");
        expect(Result.rows[0].data_type).toBe("integer");
      });
  });

  test("plant data has been filled", () => {
    return db.query(`SELECT * FROM plants;`).then((Result: QueryResult) => {
      expect(Result.rowCount).toBe(10);
    });
  });
});
