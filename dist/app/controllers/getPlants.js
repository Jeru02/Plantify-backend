"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selectPlants_1 = __importDefault(require("../models/selectPlants"));
const getPlants = (req, res) => {
    (0, selectPlants_1.default)().then((result) => {
        res.status(200).send({ plants: result.rows });
    });
};
exports.default = getPlants;
