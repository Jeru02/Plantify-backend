import db from "../../db/connection"
import { QueryResult } from "pg";


export const selectUserbyUserName = (user_name: string) :Promise<QueryResult>=>{

    return db.query(`SELECT * FROM users WHERE user_name = $1`,[user_name])



}

