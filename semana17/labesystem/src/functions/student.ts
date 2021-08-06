import { connection } from "../data/connection";
import { student } from "../types/types";

export const verifyStudent = async(studentId:number): Promise<any> =>{
    const result = await connection.raw(`
      SELECT STUDENT_id FROM STUDENT_CLASS
      WHERE STUDENT_id = '${studentId}'
    `)
    return result[0]
}
  
  export const isStudentReal = async(studentId:number): Promise<any> =>{
    const result = await connection.raw(`
      SELECT id FROM STUDENT
      WHERE id = '${studentId}'
    `)
    return result[0]
}

export const createStudent = async ({name, email, birthdate, hobbies}:student): Promise<student> => {
    const result = await connection.raw (`
      INSERT INTO STUDENT (name, email, birthdate, hobbies)
      VALUES
      ('${name}', '${email}', '${birthdate}', '${hobbies}')
    `)
    return result[0];
};

export const findBirthdate = async(id:number): Promise<any> =>{
    const result = await connection.raw(`
      SELECT TIMESTAMPDIFF(YEAR, birthdate, current_date()) as age  FROM STUDENT
      WHERE ID = '${id}'
    `)
    return result[0];
};

export const addStudenttoClass = async(studentId:number, classID:number): Promise<any> =>{
    const result = await connection.raw(`
      INSERT INTO STUDENT_CLASS (STUDENT_id, CLASS_id)
      VALUES
      ('${studentId}', '${classID}')
    `)
    return result[0];
};

export const deleteFromClass = async(studentId: number): Promise <any> =>{
    const result = await connection.raw(`
      DELETE FROM STUDENT_CLASS
      WHERE STUDENT_id = '${studentId}'
    `)
}

export const removeStudent = async(studentId: number): Promise <any> =>{
    const result = await connection.raw(`
      DELETE FROM STUDENT
      WHERE id = '${studentId}'
    `)
}

export const findbyHobby = async(hobby:string): Promise <any> =>{
    const result = await connection.raw(`
      SELECT name, hobbies FROM STUDENT
      WHERE hobbies LIKE '%${hobby}%'
    `)
    return result[0]
}