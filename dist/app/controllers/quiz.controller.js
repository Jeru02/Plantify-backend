"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionById = void 0;
const quiz_model_1 = require("../models/quiz.model");
const getQuestionById = (req, res) => {
    const { question_id } = req.params;
    (0, quiz_model_1.selectQuestionById)(question_id).then((result) => {
        res.status(200).send({ question: result.rows[0] });
    });
};
exports.getQuestionById = getQuestionById;
