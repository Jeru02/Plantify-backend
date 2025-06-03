"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const getPlants_1 = __importDefault(require("./app/controllers/getPlants"));
app.get("/api/plants", getPlants_1.default);
exports.default = app;
