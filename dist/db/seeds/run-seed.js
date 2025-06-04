"use strict";
const devData = require("../data/development-data/plants.development.ts");
const seed = require("./seed.ts");
const db = require("../connection.ts");
const runSeed = () => {
    return seed(devData).then(() => db.end());
};
runSeed();
