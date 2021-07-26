import {selectAllUsers, selectbyType} from "../functions/functions"
import { Response, Request } from "express";
import { send } from "process";

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name as string || "%"
        const sort = req.query.sort === "name" ? "name" : "email"
        const order = req.query.order as string  === "DESC" ? "DESC" : "ASC"
        const page = Number(req.query.page) || 1
        const offset = Number((page - 1)*10)
        const users = await selectAllUsers(name, sort, order, offset)
 
        if(!users.length){
            res.statusCode = 404
            throw new Error("No recipes found")
        }
 
        res.status(200).send(users)
       
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
 }

export const getUserbyType = async(req: Request,res: Response): Promise<void> =>{
    try {

        const type = req.params.type as string
        const users = await selectbyType(type)
 
        if(!users.length){
            res.statusCode = 404
            throw new Error("No recipes found")
        }
 
        res.status(200).send(users)
       
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
 }