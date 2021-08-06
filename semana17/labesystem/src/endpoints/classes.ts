import { Response, Request } from "express";
import { changeModule, classDetails, createClass, studentsFromClass, teacherFromClass, verifyClass, verifyClassId } from "../functions/class";
import { formateDate } from "../functions/functions";
import { validModule } from "../types/types";

export const addClass = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        const newClass = {
            name: req.body.name as string,
            start_date: formateDate(req.body.start_date),
            end_date: formateDate(req.body.end_date),
            module: req.body.module
        }
        const checkName = await verifyClass(newClass.name)

        if (checkName) {
            res.statusCode = 400;
            throw new Error("Já existe uma classe com o mesmo nome")
        }

        if (!validModule.includes(newClass.module)) {
            res.statusCode = 400;
            throw new Error("Modulo inválido, insira um valor ente 0 - 7")
        }

        if (!newClass.name) {
            res.statusCode = 400;
            throw new Error("É preciso de um nome para criar uma nova classe")
        }

        if (newClass.start_date === "erro") {
            res.statusCode = 400;
            throw new Error("É preciso de uma data de inicio para criar uma nova classe")
        }

        if (newClass.end_date === "erro") {
            res.statusCode = 400;
            throw new Error("É preciso de uma data de termino para criar uma nova classe")
        }

        if (newClass.name && newClass.end_date !== "erro" && newClass.start_date !== "erro" && newClass.module) {
            await createClass(newClass)
            res.status(200).send("Nova classe criada")
        }

    }
    catch (error) {
        if (error.sqlMessage) {
            res.send(error.sqlMessage)
        } else {

            res.status(errorCode).send(error.message)
        }
    }
}

export const getStudentsbyClass = async (req: Request, res: Response): Promise<void> => {
    try {

        const classId = Number(req.params.classId)
        const students = await studentsFromClass(classId)
        const classDetail = await classDetails(classId)

        if (!classDetail.length) {
            res.statusCode = 404
            throw new Error("Não existe nenhuma turma com esse id")
        }

        if (!students.length) {
            res.send({ classDetail, Alunos: "Não existe nenhum aluno registrado na turma" })
        }

        res.status(200).send({ classDetail, students })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export const getTeachersbyClass = async (req: Request, res: Response): Promise<void> => {
    try {

        const classId = Number(req.params.classId)
        const teacher = await teacherFromClass(classId)
        const classDetail = await classDetails(classId)

        if (!classDetail.length) {
            res.statusCode = 404
            throw new Error("Não existe nenhuma turma com esse id")
        }

        if (!teacher.length) {
            res.status(200).send({ classDetail, Alunos: "Não existe nenhum professor registrado na turma" })
        }

        res.status(200).send({ classDetail, teacher })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export const updateModule = async (req: Request, res: Response): Promise<void> => {
    try {
        const classId = Number(req.params.classId)
        const module = req.body.module as string

        if (module == "" || Number(module) > 7 || Number(module) < 0) {
            res.statusCode = 404
            throw new Error("É necessário informar um valor valido para o modulo. Os modulos vão de 0 a 7")
        }

        const checkClass = await verifyClassId(classId)
        const updateClass = await changeModule(classId, module)

        if (!checkClass.length) {
            res.statusCode = 404
            throw new Error("Não existe nenhuma classe com o Id solicitado")
        }

        if (module !== "" && checkClass.length) {
            res.status(200).send({ Message: "Classe atualizada com sucesso" })
        }

    }
    catch (error) {
        res.send(error.message || error.sqlMessage)
    }

}