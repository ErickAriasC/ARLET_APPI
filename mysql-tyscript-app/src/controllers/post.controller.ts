import { Request,Response} from "express";
import { connect } from "../database";

export async function getPosts(req:Request , res:Response):Promise <Response>{
   const conn=await connect();
   const posts=await conn.query('select * from posts')
   return res.json(posts);
};