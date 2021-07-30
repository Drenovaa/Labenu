import {addStudenttoClass, createStudent, deleteFromClass, findBirthdate, findbyHobby, isStudentReal, removeStudent, verifyStudent} from "../functions/student"
import { Response, Request } from "express";
import { verifyClassId } from "../functions/class";
import { formateDate } from "../functions/functions";


export const studentbyHobby = async(req: Request, res: Response): Promise<void> =>{
    try{
        let hobby = req.query.hobby as string
        const showStudents = await findbyHobby(hobby)

        if(!showStudents.length){
            res.statusCode = 404
            throw new Error("Não existe nenhuma aluno com o hobbie descrito")
        }

        res.status(200).send({Message:`Procurando por hobbies que contenham '${hobby}` ,showStudents})

    }
    catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export const deleteStudent = async (req: Request, res: Response): Promise<void> =>{
    try{
       const studentId = Number(req.params.studentId)
       const checkStudent = await verifyStudent(studentId)
       const checkIfIsReal = await isStudentReal(studentId)

       if(!checkIfIsReal.length && !checkStudent.length){
           res.statusCode = 404
           throw new Error("Não existe nenhum estudante com esse id")
       }
       
       if(checkStudent.length && checkIfIsReal.length){
           res.statusCode = 404
           throw new Error("Não é possivel apagar estudante registrados em uma classe")
       }
       
       if(studentId !== NaN && !checkStudent.length && checkIfIsReal.length){
           res.status(200).send({Message: "O estudante foi apagado"})
           await removeStudent(studentId)
       }
   }catch (error) {
       res.send(error.message || error.sqlMessage)
   }
}

export const removeStudentFromClass = async (req: Request, res: Response): Promise<void> =>{
    try{
       const studentId = Number(req.params.studentId)
       
       const checkStudent = await verifyStudent(studentId)
       const checkIfIsReal = await isStudentReal(studentId)
      
       if(!checkStudent.length && !checkIfIsReal.length){
           res.statusCode = 404
           throw new Error("Não existe nenhum estudante com esse id")
       }
       
       if(!checkStudent.length && checkIfIsReal.length){
           res.statusCode = 404
           throw new Error("O estudante não está registrado em nenhuma classe")
       }
       
       if(studentId !== NaN && checkStudent.length && checkIfIsReal.length){
           res.status(200).send({Message: "Estudante removido da turma"})
           await deleteFromClass(studentId)
       }
   }catch (error) {
       res.send(error.message || error.sqlMessage)
   }
}

export const studentToClass = async(req: Request, res: Response): Promise<void> =>{
    try{
        const studentId = Number(req.body.studentId)
        const classID = Number(req.body.classID)
        const checkStudent = await verifyStudent(studentId)
        const checkClass = await verifyClassId(classID)
        const checkIfIsReal = await isStudentReal(studentId)

        if(checkStudent.length){
            res.statusCode = 400;
            throw new Error("Este aluno já está cadastrado em uma turma")
        }

        if(!checkIfIsReal.length){
            res.statusCode = 400;
            throw new Error("Não existe nenhum estudante com esse id")
        }

        if(!checkClass.length){
            res.statusCode = 400;
            throw new Error("Não exite nenhuma turma com esse id")
        }

        if(!checkStudent.length && checkClass.length && checkIfIsReal.length){
            await addStudenttoClass(studentId, classID)
            res.status(200).send(`Estudante ${studentId} adicionado na classe ${classID}`)
        }
            
    }
    catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export const getStudentAge = async (req: Request, res: Response): Promise<void> =>{
    let errorCode: number = 400
    try{

        const id = Number(req.query.id)

        const studentBirthdate = await findBirthdate(id)

        if(!studentBirthdate.length){
            res.statusCode = 404
            throw new Error("Não foi encontrado um estudante com esse id")
        }
 
        res.status(200).send(studentBirthdate)
       
    } 
    catch (error){
        if(error.sqlMessage){
            res.send(error.sqlMessage)
        }else{

            res.status(errorCode).send(error.message)
        }
    }
}

export const addStudent = async(req: Request,res: Response): Promise<void> =>{
    let errorCode: number = 400
    try{
        const student = {
            name : req.body.name,
            email : req.body.email,
            birthdate : formateDate(req.body.birthdate),
            hobbies : req.body.hobbies
        }

        if(!student.name){
            res.statusCode = 400;
            throw new Error("É preciso de um nome para criar um novo estudante")
        }

        if(!student.email){
            res.statusCode = 400;
            throw new Error("É preciso de um email para criar um novo estudante")
        }

        if(student.birthdate === "erro"){
            res.statusCode = 400;
            throw new Error("É preciso de uma data de nascimento para criar um novo estudante")
        }

        if(!student.hobbies){
            res.statusCode = 400;
            throw new Error("É preciso descrever um hobbie")
        }

        if(student.name && student.email && student.birthdate !== "erro" && student.hobbies){
            await createStudent(student)
            res.status(200).send("Novo estudante criado")
        }

    }
    catch (error){
        res.status(errorCode).send(error.message)
    }
}

