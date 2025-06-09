import seed from "./seed";

import PlantData from "../data/development-data/plants.development-data";

import QuizData from "../data/development-data/quiz.development-data";

import db from "../connection";

import UserData from "../data/test-data/users.test-data";

import Liked_plantData from "../data/test-data/liked_plants.test-data";

const runSeed = (): Promise<any> => {
  return seed(PlantData, QuizData, UserData, Liked_plantData).then(() => db.end());
};

runSeed();
