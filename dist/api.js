"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const plants_controller_1 = require("./app/controllers/plants.controller");
app.get("/api/plants", plants_controller_1.getPlants);
app.get("/api/plants/:plant_id", plants_controller_1.getPlantById);
exports.default = app;
