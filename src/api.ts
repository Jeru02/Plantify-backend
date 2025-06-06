const express = require("express");
const app = express();

import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() }); 

import { getPlants, getPlantById } from "./app/controllers/plants.controller";
import { getQuestionById } from "./app/controllers/quiz.controller";
import {
  getCurrentWeather,
  getFakeData,
  getPlantByImageUrl,
  postImageToPlantNet,
} from "./external-api";

app.get("/api/plants", getPlants);
app.get("/api/plants/:plant_id", getPlantById);
app.get("/api/quiz/:question_id", getQuestionById);
app.get("/api/fakeData", getFakeData);
app.get("/api/currentWeather", getCurrentWeather);
app.post("/api/plant", upload.single("image"), postImageToPlantNet);
app.get("/api/plant_name", getPlantByImageUrl);
export default app;