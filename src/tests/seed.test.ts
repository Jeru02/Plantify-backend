import db from "../db/connection";
import seed from "../db/seeds/seed";
import PlantData from "../db/data/test-data/plant.test-data";
import QuizData from "../db/data/test-data/quiz.test-data";
import { QueryResult } from "pg";
import { Plant } from "../db/data/test-data/plant.test-data";
import UserData from "../db/data/test-data/users.test-data";
import Liked_plantData from "../db/data/test-data/liked_plants.test-data";

beforeAll(() => seed(PlantData, QuizData, UserData, Liked_plantData));
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

describe("quiz form", () => {
  test("quiz table exists", () => {
    return db
      .query(
        `SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'quiz'
            );`
      )
      .then((Result: QueryResult) => {
        expect(Result.rows[0].exists).toBe(true);
      });
  });
  test("quiz table has the column of question_id which is a serial number", () => {
    return db
      .query(
        `SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'quiz'
            AND column_name = 'question_id';`
      )
      .then((Result: QueryResult) => {
        expect(Result.rows[0].column_name).toBe("question_id");
        expect(Result.rows[0].data_type).toBe("integer");
      });
  });
  test("quiz data has been filled", () => {
    return db.query(`SELECT * FROM quiz;`).then((Result: QueryResult) => {
      expect(Result.rowCount).toBe(10);
    });
  });
});

describe("users table", () => {
  test("users table exists", () => {
    return db
      .query(
        `SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'users'
            );`
      )
      .then((Result: QueryResult) => {
        expect(Result.rows[0].exists).toBe(true);
      });
  });

  test("users table has the column of user_id which is a serial number", () => {
    return db
      .query(
        `SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'users'
            AND column_name = 'user_id';`
      )
      .then((Result: QueryResult) => {
        expect(Result.rows[0].column_name).toBe("user_id");
        expect(Result.rows[0].data_type).toBe("integer");
      });
  });

  test("user data has been filled", () => {
    return db.query(`SELECT * FROM users;`).then((Result: QueryResult) => {
      expect(Result.rowCount).toBe(10);
    });
  });
});

describe("liked_plants table", () => {
  test("liked_plants table exists", () => {
    return db
      .query(
        `SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'liked_plants'
            );`
      )
      .then((Result: QueryResult) => {
        expect(Result.rows[0].exists).toBe(true);
      });
  });

  test("liked_plants table has the column of liked_plants_id which is a serial", () => {
    return db
      .query(
        `SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'liked_plants'
            AND column_name = 'liked_plants_id';`
      )
      .then((Result: QueryResult) => {
        expect(Result.rows[0].column_name).toBe("liked_plants_id");
        expect(Result.rows[0].data_type).toBe("integer");
      });
  });

  test("liked_plants data has been filled", () => {
    return db.query(`SELECT * FROM liked_plants;`).then((Result: QueryResult) => {
      expect(Result.rowCount).toBe(3);
    });
  });
});