"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLikedPlantsByUserId = void 0;
const likedPlants_model_1 = require("../models/likedPlants.model");
const getLikedPlantsByUserId = (req, res) => {
    const { user_id } = req.params;
    (0, likedPlants_model_1.selectLikedPlantsByUserId)(user_id)
        .then((result) => {
        res.status(200).send({ liked_plants: result.rows });
    });
};
exports.getLikedPlantsByUserId = getLikedPlantsByUserId;
