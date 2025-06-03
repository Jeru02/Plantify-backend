import { QueryResult } from "pg";
import selectPlants from "../models/selectPlants";
import { Request, Response } from "express";

const getPlants = (req: Request, res: Response): void => {
  selectPlants().then((result: QueryResult) => {
    res.status(200).send({ plants: result.rows });
  });
};

export default getPlants;
