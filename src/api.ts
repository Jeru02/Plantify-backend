const express = require("express");
const app = express();
import { getPlants, getPlantById } from "./app/controllers/plants.controller";

app.get("/api/plants", getPlants);

app.get("/api/plants/:plant_id", getPlantById);

export default app;
