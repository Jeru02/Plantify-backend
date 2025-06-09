import { QueryResult } from "pg"; 
import { Request, Response } from "express";
import { deleteLikedPlant, insertLikedPlant, selectLikedPlantsByUserId } from "../models/likedPlants.model";


export const getLikedPlantsByUserId = (req: Request, res: Response): void => {
  const { user_id } = req.params;

  selectLikedPlantsByUserId(user_id)
    .then((result: QueryResult) => {
      res.status(200).send({liked_plants:result.rows})
  })
}

export const postLikedPlant = (req: Request, res: Response): void => {
  const { user_id, plant_id } = req.body;
  insertLikedPlant(user_id, plant_id)
    .then((result: QueryResult) => {
    res.status(201).send({liked_plant: result.rows[0] })
  })

}

export const removeLikedPlantByLikedPlantsId = (
  req: Request,
  res: Response
): void => {
  const { liked_plant_id } = req.params;
 
  deleteLikedPlant(liked_plant_id).then(() => {
    res.status(204).send();
  });
};