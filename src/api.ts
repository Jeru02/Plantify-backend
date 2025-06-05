const express = require("express");
const app = express();
import { getPlants, getPlantById } from "./app/controllers/plants.controller";
import { getQuestionById } from "./app/controllers/quiz.controller";

import { getCurrentWeather, getFakeData } from "./external-api";

app.get("/api/plants", getPlants);

app.get("/api/plants/:plant_id", getPlantById);

app.get("/api/quiz/:question_id", getQuestionById);

app.get("/api/fakeData", getFakeData);

app.get("/api/currentWeather", getCurrentWeather)

export default app;
