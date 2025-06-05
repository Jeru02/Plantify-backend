const express = require("express");
const app = express();
import { getPlants, getPlantById } from "./app/controllers/plants.controller";
import { getQuestionById } from "./app/controllers/quiz.controller";

app.get("/api/plants", getPlants);

app.get("/api/plants/:plant_id", getPlantById);

app.get("/api/quiz/:question_id", getQuestionById);

export default app;
