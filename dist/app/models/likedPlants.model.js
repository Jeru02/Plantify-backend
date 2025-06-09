"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectLikedPlantsByUserId = void 0;
const connection_1 = __importDefault(require("../../db/connection"));
const selectLikedPlantsByUserId = (user_id) => {
    return connection_1.default.query(`SELECT * FROM liked_plants WHERE user_id = $1`, [user_id]);
};
exports.selectLikedPlantsByUserId = selectLikedPlantsByUserId;
