"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const seed_1 = __importDefault(require("../db/seeds/seed"));
const plant_test_data_1 = __importDefault(require("../db/data/test-data/plant.test-data"));
const quiz_test_data_1 = __importDefault(require("../db/data/test-data/quiz.test-data"));
const users_test_data_1 = __importDefault(require("../db/data/test-data/users.test-data"));
const liked_plants_test_data_1 = __importDefault(require("../db/data/test-data/liked_plants.test-data"));
beforeAll(() => (0, seed_1.default)(plant_test_data_1.default, quiz_test_data_1.default, users_test_data_1.default, liked_plants_test_data_1.default));
afterAll(() => connection_1.default.end());
describe("plants table", () => {
    test("plants table exists", () => {
        return connection_1.default
            .query(`SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'plants'
            );`)
            .then((Result) => {
            expect(Result.rows[0].exists).toBe(true);
        });
    });
    test("plant table has the column of plant_id which is a serial number", () => {
        return connection_1.default
            .query(`SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'plants'
            AND column_name = 'plant_id';`)
            .then((Result) => {
            expect(Result.rows[0].column_name).toBe("plant_id");
            expect(Result.rows[0].data_type).toBe("integer");
        });
    });
    test("plant data has been filled", () => {
        return connection_1.default.query(`SELECT * FROM plants;`).then((Result) => {
            expect(Result.rowCount).toBe(10);
        });
    });
});
describe("quiz form", () => {
    test("quiz table exists", () => {
        return connection_1.default
            .query(`SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'quiz'
            );`)
            .then((Result) => {
            expect(Result.rows[0].exists).toBe(true);
        });
    });
    test("quiz table has the column of question_id which is a serial number", () => {
        return connection_1.default
            .query(`SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'quiz'
            AND column_name = 'question_id';`)
            .then((Result) => {
            expect(Result.rows[0].column_name).toBe("question_id");
            expect(Result.rows[0].data_type).toBe("integer");
        });
    });
    test("quiz data has been filled", () => {
        return connection_1.default.query(`SELECT * FROM quiz;`).then((Result) => {
            expect(Result.rowCount).toBe(10);
        });
    });
});
describe("users table", () => {
    test("users table exists", () => {
        return connection_1.default
            .query(`SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'users'
            );`)
            .then((Result) => {
            expect(Result.rows[0].exists).toBe(true);
        });
    });
    test("users table has the column of user_id which is a serial number", () => {
        return connection_1.default
            .query(`SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'users'
            AND column_name = 'user_id';`)
            .then((Result) => {
            expect(Result.rows[0].column_name).toBe("user_id");
            expect(Result.rows[0].data_type).toBe("integer");
        });
    });
    test("user data has been filled", () => {
        return connection_1.default.query(`SELECT * FROM users;`).then((Result) => {
            expect(Result.rowCount).toBe(10);
        });
    });
});
describe("liked_plants table", () => {
    test("liked_plants table exists", () => {
        return connection_1.default
            .query(`SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'liked_plants'
            );`)
            .then((Result) => {
            expect(Result.rows[0].exists).toBe(true);
        });
    });
    test("liked_plants table has the column of liked_plants_id which is a serial", () => {
        return connection_1.default
            .query(`SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'liked_plants'
            AND column_name = 'liked_plants_id';`)
            .then((Result) => {
            expect(Result.rows[0].column_name).toBe("liked_plants_id");
            expect(Result.rows[0].data_type).toBe("integer");
        });
    });
    test("liked_plants data has been filled", () => {
        return connection_1.default.query(`SELECT * FROM liked_plants;`).then((Result) => {
            expect(Result.rowCount).toBe(3);
        });
    });
});
