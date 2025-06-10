"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertJournalEntry = exports.selectJournalEntriesByUserId = void 0;
const connection_1 = __importDefault(require("../../db/connection"));
const selectJournalEntriesByUserId = (user_id) => {
    return connection_1.default.query(`SELECT * FROM journal WHERE user_id = $1`, [user_id]);
};
exports.selectJournalEntriesByUserId = selectJournalEntriesByUserId;
const insertJournalEntry = (body, user_id) => {
    return connection_1.default.query(`INSERT INTO journal(user_id, body) VALUES ($1, $2) RETURNING * `, [user_id, body]);
};
exports.insertJournalEntry = insertJournalEntry;
