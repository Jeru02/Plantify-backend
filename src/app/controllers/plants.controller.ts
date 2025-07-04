import { QueryResult } from "pg";
import { selectPlants, selectPlantById, selectPlantByGenus } from "../models/plants.model";
import { Request, Response } from "express";

export const getPlants = (req: Request, res: Response): void => {



  selectPlants().then((result: QueryResult) => {
    res.status(200).send({ plants: result.rows });
  });
};

export const getPlantById = (req: Request, res: Response): void => {
  const { plant_id } = req.params;
  selectPlantById(plant_id).then((result: QueryResult) => {
    res.status(200).send({ plant: result.rows[0] });
  });
};


export const getPlantByGenus = (req: Request, res: Response): void => {
  
  selectPlantByGenus(req.params.genus).then((result: QueryResult) => {
    res.status(200).send({ plant: result.rows[0] });
  });
};
