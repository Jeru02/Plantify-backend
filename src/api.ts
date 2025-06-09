const express = require("express");
const app = express();
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() }); 

import { getPlants, getPlantById, getPlantByGenus } from "./app/controllers/plants.controller";
import { getQuestionById } from "./app/controllers/quiz.controller";
import { getLikedPlantsByUserId } from "./app/controllers/likedPlants.controller";
import {
  getCurrentWeather,
  getFakeData,
  getPlantByImageUrl,
  postImageToPlantNet,
} from "./external-api";
app.get("/api/plants", getPlants);
app.get("/api/plants/:plant_id", getPlantById);
app.get("/api/genus/:genus", getPlantByGenus)
app.get("/api/quiz/:question_id", getQuestionById);
app.get("/api/fakeData", getFakeData);
app.get("/api/currentWeather", getCurrentWeather);
app.post("/api/plant", upload.single("image"), postImageToPlantNet);
app.get("/api/plant_name", getPlantByImageUrl);
app.get("/api/ourPlantMatch");

//users endpoints 
//app.get("/api/users", getUsers);

// add a get post and delete for the user journal

//liked_plamnts
app.get("/api/liked_plants/:user_id", getLikedPlantsByUserId);
//app.post("/api/liked_plants", postLikedPlant);
//app.delete("/api/liked_plants/:liked_plant_id", deleteLikedPlantByLikedPlantsId);



export default app;
