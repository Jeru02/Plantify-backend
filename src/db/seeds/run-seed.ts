
import seed from "./seed";

import PlantData from "../data/development-data/plants.development";

import db from "../connection";


const runSeed = () : Promise<any> => {
  
  return seed(PlantData).then(() => db.end());
};

runSeed();
