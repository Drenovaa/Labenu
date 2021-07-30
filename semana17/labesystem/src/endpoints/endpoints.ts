import { Response, Request } from "express";
import { selectAllStudents } from "../functions/functions";

export const getAllStudents = async(req: Request,res: Response): Promise<void> =>{
    try {
        const students = await selectAllStudents()

        if(!students.length){
            res.statusCode = 404
            throw new Error("Não forma encontrados estudantes")
        }
 
        res.status(200).send(students)
       
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
