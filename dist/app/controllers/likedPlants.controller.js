"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLikedPlantByLikedPlantsId = exports.postLikedPlant = exports.getLikedPlantsByUserId = void 0;
const likedPlants_model_1 = require("../models/likedPlants.model");
const getLikedPlantsByUserId = (req, res) => {
    const { user_id } = req.params;
    (0, likedPlants_model_1.selectLikedPlantsByUserId)(user_id)
        .then((result) => {
        res.status(200).send({ liked_plants: result.rows });
    });
};
exports.getLikedPlantsByUserId = getLikedPlantsByUserId;
const postLikedPlant = (req, res) => {
    const { user_id, plant_id } = req.body;
    (0, likedPlants_model_1.insertLikedPlant)(user_id, plant_id)
        .then((result) => {
        res.status(201).send({ liked_plant: result.rows[0] });
    });
};
exports.postLikedPlant = postLikedPlant;
const removeLikedPlantByLikedPlantsId = (req, res) => {
    const { liked_plant_id } = req.params;
    (0, likedPlants_model_1.deleteLikedPlant)(liked_plant_id).then(() => {
        res.status(204).send();
    });
};
exports.removeLikedPlantByLikedPlantsId = removeLikedPlantByLikedPlantsId;
