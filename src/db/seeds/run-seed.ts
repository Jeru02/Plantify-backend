import seed from "./seed";

import PlantData from "../data/development-data/plants.development-data";

import QuizData from "../data/development-data/quiz.development-data";

import db from "../connection";

import UserData from "../data/development-data/users.development-data";

import Liked_plantData from "../data/development-data/liked_plants.development-data";

import JournalEntryData from "../data/development-data/journal.development-data";

const runSeed = (): Promise<any> => {
  return seed(
    PlantData,
    QuizData,
    UserData,
    Liked_plantData,
    JournalEntryData
  ).then(() => db.end());
};

runSeed();
