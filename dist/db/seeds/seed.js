"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const add = () => {
    return 1;
};
const seed = () => {
    return connection_1.default.query(`

    DROP TABLE IF EXISTS plants;
        
   CREATE TABLE plants(
    plant_id SERIAL PRIMARY KEY,
    description VARCHAR(250),
    img_url VARCHAR(1000)
   );    
    `);
};
exports.default = seed;
