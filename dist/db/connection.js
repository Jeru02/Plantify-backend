"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool } = require("pg");
const ENV = process.env.NODE_ENV || "development";
const pathToCorrectEnvFile = `${__dirname}/../../.env.${ENV}`;
require("dotenv").config({
    path: pathToCorrectEnvFile,
});
if (!process.env.PGDATABASE) {
    throw new Error("No PGDATABASE configured");
}
const db = new Pool();
exports.default = db;
