"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUserbyUserName = void 0;
const connection_1 = __importDefault(require("../../db/connection"));
const selectUserbyUserName = (user_name) => {
    return connection_1.default.query(`SELECT * FROM users WHERE user_name = $1`, [user_name]);
};
exports.selectUserbyUserName = selectUserbyUserName;
