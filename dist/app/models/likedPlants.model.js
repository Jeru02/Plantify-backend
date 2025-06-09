"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLikedPlant = exports.insertLikedPlant = exports.selectLikedPlantsByUserId = void 0;
const connection_1 = __importDefault(require("../../db/connection"));
const selectLikedPlantsByUserId = (user_id) => {
    return connection_1.default.query(`SELECT * FROM liked_plants WHERE user_id = $1`, [user_id]);
};
exports.selectLikedPlantsByUserId = selectLikedPlantsByUserId;
const insertLikedPlant = (user_id, plant_id) => {
    return connection_1.default.query(`INSERT INTO liked_plants (user_id, plant_id) VALUES ($1, $2) RETURNING *`, [user_id, plant_id]);
};
exports.insertLikedPlant = insertLikedPlant;
const deleteLikedPlant = (liked_plant_id) => {
    return connection_1.default.query(`DELETE FROM liked_plants WHERE liked_plant_id = $1`, [liked_plant_id]);
};
exports.deleteLikedPlant = deleteLikedPlant;
