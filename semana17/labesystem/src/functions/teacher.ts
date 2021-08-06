import { connection } from "../data/connection";
import { teacher } from "../types/types";
import { capitalize } from "./functions";

export const isTeacherReal = async(teacherId:number): Promise<any> =>{
    const result = await connection.raw(`
      SELECT id FROM TEACHER
      WHERE id = '${teacherId}'
    `)
    return result[0]
}
  
  export const verifyTeacher = async(teacherId:number): Promise<any> =>{
    const result = await connection.raw(`
      SELECT TEACHER_id FROM TEACHER_CLASS
      WHERE TEACHER_id = '${teacherId}'
    `)
    return result[0]
}

export const createTeacher = async ({name, email, birthdate, specialties}:teacher): Promise<teacher> => {
    const result = await connection.raw (`
      INSERT INTO TEACHER (name, email, birthdate, specialties)
      VALUES
      ('${name}', '${email}', '${birthdate}', '${capitalize(specialties.toLowerCase())}')
    `)
    return result[0];
};

export const addTeachertoClass = async(teachertId:number, classID:number): Promise<any> =>{
    const result = await connection.raw(`
      INSERT INTO TEACHER_CLASS (TEACHER_id, CLASS_id)
      VALUES
      ('${teachertId}', '${classID}')
    `)
    return result[0];
};

export const removeTeacher = async(teachertId: number): Promise <any> =>{
    const result = await connection.raw(`
      DELETE FROM TEACHER_CLASS
      WHERE TEACHER_id = '${teachertId}'
    `)
};