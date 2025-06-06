"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findPlantName = (plantNetGenusNmae, plantData) => {
    const result = plantData.filter((singlePlantObj) => {
        const words = singlePlantObj.scientific_name.split(" ");
        console.log(words);
        console.log(words[0]);
    });
    return [];
};
exports.default = findPlantName;
