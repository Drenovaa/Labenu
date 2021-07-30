import {addTeachertoClass, createTeacher, isTeacherReal, removeTeacher, verifyTeacher} from "../functions/teacher"
import { Response, Request } from "express";
import { validSpecialties } from "../types/types";
import { formateDate } from "../functions/functions";
import { verifyClassId, verifyClassTeacher } from "../functions/class";

export const addTeacher= async(req: Request,res: Response): Promise<void> =>{
    let errorCode: number = 400
    try{
        const teacher = {
            name : req.body.name,
            email : req.body.email,
            birthdate : formateDate(req.body.birthdate),
            specialties : (req.body.specialties)
        }       

        if(!validSpecialties.includes(teacher.specialties.toUpperCase())){
            res.statusCode = 400;
            throw new Error
            (`É preciso descrever ua especialidade valida como por exemplo: 
            \n React \nRedux \nCSS \nTestes \nTypescript \nProgramação Orientada a Objetos \nBackend`)
        }

        if(!teacher.name){
            res.statusCode = 400;
            throw new Error("É preciso de um nome para criar um novo professor")
        }

        if(!teacher.email){
            res.statusCode = 400;
            throw new Error("É preciso de um email para criar um novo professor")
        }

        if(teacher.birthdate === "erro"){
            res.statusCode = 400;
            throw new Error("É preciso de uma data de nascimento para criar um novo professor")
        }

        if(teacher.name && teacher.email && teacher.birthdate !== "erro" && teacher.specialties){
            const newTeacher = await createTeacher(teacher)
            res.status(200).send("Novo professor criado")
        }

    }
    catch (error){
        if(error.sqlMessage){
            res.send(error.sqlMessage)
        }else{

            res.status(errorCode).send(error.message)
        }
    }
}

export const teacherToClass = async(req: Request, res: Response): Promise<void> =>{
    try{
        const teacherId = Number(req.body.teacherId)
        const classId = Number(req.body.classId)
        const checkTeacher = await verifyTeacher(teacherId)
        const checkClass = await verifyClassId(classId)
        const checkFreeClass = await verifyClassTeacher(classId)
        const checkIfIsReal = await isTeacherReal(teacherId)

        if(checkTeacher.length){
            res.statusCode = 400;
            throw new Error("Este professor já está cadastrado em uma turma")
        }

        if(!checkIfIsReal.length){
            res.statusCode = 400;
            throw new Error("Não existe professor com esse id")
        }

        if(!checkClass.length){
            res.statusCode = 400;
            throw new Error("Não exite nenhuma turma com esse id")
        }

        if(checkFreeClass.length){
            res.statusCode = 400;
            throw new Error("Essa turma já possui um professor")
        }

        if(!checkTeacher.length && checkClass.length && checkIfIsReal.length){
            await addTeachertoClass(teacherId, classId)
            res.status(200).send(`Professor ${teacherId} adicionado na classe ${classId}`)
        }
            
    }
    catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export const removeTeacherFromClass = async (req: Request, res: Response): Promise<void> =>{
    try{
       const teacherId = Number(req.params.teacherId)
       const checkTeacher = await verifyTeacher(teacherId)
       const checkIfIsReal = await isTeacherReal(teacherId)
      
       if(!checkTeacher.length && !checkIfIsReal.length){
           res.statusCode = 404
           throw new Error("Não existe nenhum professor com esse id")
       }
       
       if(!checkTeacher.length && checkIfIsReal.length){
           res.statusCode = 404
           throw new Error("O professor não está registrado em nenhuma classe")
       }
       
       if(teacherId !== NaN && checkTeacher.length && checkIfIsReal.length){
           res.status(200).send({Message: "Professor removido da turma"})
           await removeTeacher(teacherId)
       }
   }catch (error) {
       res.send(error.message || error.sqlMessage)
   }
}