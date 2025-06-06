"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPlantByGenus = exports.selectPlantById = exports.selectPlants = void 0;
const connection_1 = __importDefault(require("../../db/connection"));
const selectPlants = () => {
    return connection_1.default.query("SELECT * FROM plants;");
};
exports.selectPlants = selectPlants;
const selectPlantById = (plant_id) => {
    return connection_1.default.query(`SELECT * FROM plants WHERE plant_id=$1`, [plant_id]);
};
exports.selectPlantById = selectPlantById;
const selectPlantByGenus = (genus) => {
    return connection_1.default.query(`SELECT * FROM plants WHERE genus=$1`, [genus]);
};
exports.selectPlantByGenus = selectPlantByGenus;
