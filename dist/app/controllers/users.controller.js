"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUserName = void 0;
const users_model_1 = require("../models/users.model");
const getUserByUserName = (req, res) => {
    (0, users_model_1.selectUserbyUserName)(req.params.user_name).then((result) => {
        res.status(200).send({ user: result.rows[0] });
    });
};
exports.getUserByUserName = getUserByUserName;
