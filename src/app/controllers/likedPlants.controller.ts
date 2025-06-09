import { QueryResult } from "pg"; 
import { Request, Response } from "express";
import { selectLikedPlantsByUserId } from "../models/likedPlants.model";

export const getLikedPlantsByUserId = (req: Request, res: Response): void => {
  const { user_id } = req.params;

  selectLikedPlantsByUserId(user_id)
    .then((result: QueryResult) => {
      res.status(200).send({liked_plants:result.rows})
  })

}