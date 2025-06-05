import { QueryResult } from "pg";
import { Request, Response } from "express";
import { selectQuestionById } from "../models/quiz.model";

export const getQuestionById = (req: Request, res: Response): void => {
  const { question_id } = req.params;
  selectQuestionById(question_id).then((result: QueryResult) => {
      
      res.status(200).send({ question: result.rows[0] });
    });
}