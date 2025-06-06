"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlantByGenus = exports.getPlantById = exports.getPlants = void 0;
const plants_model_1 = require("../models/plants.model");
const getPlants = (req, res) => {
    (0, plants_model_1.selectPlants)().then((result) => {
        res.status(200).send({ plants: result.rows });
    });
};
exports.getPlants = getPlants;
const getPlantById = (req, res) => {
    const { plant_id } = req.params;
    (0, plants_model_1.selectPlantById)(plant_id).then((result) => {
        res.status(200).send({ plant: result.rows[0] });
    });
};
exports.getPlantById = getPlantById;
const getPlantByGenus = (req, res) => {
    (0, plants_model_1.selectPlantByGenus)(req.params.genus).then((result) => {
        res.status(200).send({ plant: result.rows[0] });
    });
};
exports.getPlantByGenus = getPlantByGenus;
