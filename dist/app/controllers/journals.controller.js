"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postJournalEntry = exports.getJournalEntriesByUserId = void 0;
const journals_model_1 = require("../models/journals.model");
const getJournalEntriesByUserId = (req, res) => {
    const { user_id } = req.params;
    (0, journals_model_1.selectJournalEntriesByUserId)(user_id).then((result) => {
        res.status(200).send({ journalEntries: result.rows });
    });
};
exports.getJournalEntriesByUserId = getJournalEntriesByUserId;
const postJournalEntry = (req, res) => {
    (0, journals_model_1.insertJournalEntry)(req.body.body, req.body.user_id).then((result) => {
        res.status(201).send({ journalEntry: result.rows[0] });
    });
};
exports.postJournalEntry = postJournalEntry;
