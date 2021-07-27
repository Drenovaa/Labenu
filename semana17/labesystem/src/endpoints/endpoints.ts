import {selectAllStudents} from "../functions/functions"
import { Response, Request } from "express";
import { send } from "process";

export const getAllStudents = async(req: Request,res: Response): Promise<void> =>{
    try {
        const users = await selectAllStudents()
 
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

// export const getUserbyType = async(req: Request,res: Response): Promise<void> =>{
//     try {

//         const type = req.params.type as string
//         const users = await selectbyType(type)
 
//         if(!users.length){
//             res.statusCode = 404
//             throw new Error("No recipes found")
//         }
 
//         res.status(200).send(users)
       
//     } catch (error) {
//         console.log(error)
//         res.send(error.message || error.sqlMessage)
//     }
//  }