"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectQuestionById = void 0;
const connection_1 = __importDefault(require("../../db/connection"));
const selectQuestionById = (question_id) => {
    return connection_1.default.query(`SELECT * FROM quiz WHERE question_id=$1`, [question_id]);
};
exports.selectQuestionById = selectQuestionById;
