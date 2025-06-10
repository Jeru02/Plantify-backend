import { QueryResult } from "pg";
import { Request, Response } from "express";
import { selectUserbyUserName } from "../models/users.model";



export const getUserByUserName = (req: Request, res:Response) :void=>{


selectUserbyUserName(req.params.user_name).then((result: QueryResult)=>{

res.status(200).send({user: result.rows[0]})

})



}


