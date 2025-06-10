const express = require("express");
const app = express();
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

const cors = require("cors");
app.use(cors());
app.use(express.json());

import {
  getPlants,
  getPlantById,
  getPlantByGenus,
} from "./app/controllers/plants.controller";
import { getQuestionById } from "./app/controllers/quiz.controller";
import {
  getLikedPlantsByUserId,
  postLikedPlant,
  removeLikedPlantByLikedPlantsId,
} from "./app/controllers/likedPlants.controller";
import {
  getCurrentWeather,
  getFakeData,
  getPlantByImageUrl,
  postImageToPlantNet,
} from "./external-api";
import { getUserByUserName } from "./app/controllers/users.controller";

app.get("/api/plants", getPlants);
app.get("/api/plants/:plant_id", getPlantById);
app.get("/api/genus/:genus", getPlantByGenus);
app.get("/api/quiz/:question_id", getQuestionById);
app.get("/api/fakeData", getFakeData);
app.get("/api/currentWeather", getCurrentWeather);
app.post("/api/plant", upload.single("image"), postImageToPlantNet);
app.get("/api/plant_name", getPlantByImageUrl);
app.get("/api/ourPlantMatch");

//users endpoints
app.get("/api/users/:user_name", getUserByUserName);

// app.get("api/journals/:user_id", getJournalEntriesByUserId);
// app.post("/api/journals", postJournalEntry);
// app.delete(
//   "/api/journals/:journal_entry_id",
//   removeJournalEntryByJournalEntryId
// );

// add a get post and delete for the user journal

//liked_plants
app.get("/api/liked_plants/:user_id", getLikedPlantsByUserId);
app.post("/api/liked_plants", postLikedPlant);
app.delete(
  "/api/liked_plants/:liked_plant_id",
  removeLikedPlantByLikedPlantsId
);

export default app;
