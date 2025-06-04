const { Pool } = require("pg");
const ENV = process.env.NODE_ENV || "development";
const pathToCorrectEnvFile = `${__dirname}/../../.env.${ENV}`;

require("dotenv").config({
  path: pathToCorrectEnvFile,
});

const config: any = {};

if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
}

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("PGDATABASE or DATABASE_URL not set");
}

const db = new Pool(config);

export default db;
