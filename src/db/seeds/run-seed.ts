import seed from "./seed";

import PlantData from "../data/development-data/plants.development-data";

import QuizData from "../data/development-data/quiz.development-data";

import db from "../connection";

const runSeed = (): Promise<any> => {
  return seed(PlantData, QuizData).then(() => db.end());
};

runSeed();
