const express = require("express");
const app = express();
import getPlants from "./app/controllers/getPlants";

app.get("/api/plants", getPlants);

export default app;
