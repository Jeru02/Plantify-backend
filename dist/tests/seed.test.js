"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const seed_1 = __importDefault(require("../db/seeds/seed"));
const plant_1 = __importDefault(require("../db/data/test-data/plant"));
beforeAll(() => (0, seed_1.default)(plant_1.default));
afterAll(() => connection_1.default.end());
describe('plants table', () => {
    test('plants table exists', () => {
        return connection_1.default
            .query(`SELECT EXISTS (
            SELECT FROM
                information_schema.tables
            WHERE
                table_name = 'plants'
            );`)
            .then((result) => {
            console.log(result);
        });
    });
});
