import { connection } from "../data/connection";
import { classType} from "../types/types";

export const verifyClassTeacher = async(classId:number): Promise<any> =>{
    const result = await connection.raw(`
      SELECT CLASS_id FROM TEACHER_CLASS
      WHERE CLASS_id = '${classId}'
    `)
    return result[0]
};
  
export const verifyClassId = async(classId:number): Promise<any> =>{
    const result = await connection.raw(`
      SELECT id FROM CLASS
      WHERE id = '${classId}'
    `)
    return result[0]
};
  
export const verifyClass = async(className:string): Promise<any> => {
    const result = await connection("CLASS")
      .select("name")
      .where(`name`, `LIKE`, `%${className}%`)
    return result[0]
};

export const createClass = async ({name, start_date, end_date, module}:classType): Promise<classType> => {
    const result = await connection.raw (`
      INSERT INTO CLASS (name, start_date, end_date, module)
      VALUES
      ('${name}', '${start_date}', '${end_date}', '${module}')
    `)
    return result[0];
};

export const studentsFromClass = async(classId: number): Promise <any> =>{
    const result = await connection.raw(`
    SELECT student.id as id, student.name as name, student.email as email, student.birthdate as birthdate
    FROM STUDENT as student
    JOIN STUDENT_CLASS as class_student ON class_student.STUDENT_id = student.id
    JOIN CLASS as class ON class.id = class_student.CLASS_id
    WHERE class.id = '${classId}';
    `)
    return result[0]
};
  
export const teacherFromClass = async(classId: number): Promise <any> =>{
    const result = await connection.raw(`
      SELECT teacher.id as id, teacher.name as name, teacher.email as email, teacher.birthdate as birthdate
      FROM TEACHER as teacher
      JOIN TEACHER_CLASS as class_teacher ON class_teacher.TEACHER_id = teacher.id
      JOIN CLASS as class ON class.id = class_teacher.CLASS_id
      WHERE class.id = '${classId}';
    `)
    return result[0]
};
  
export const classDetails = async(classId: number): Promise <any> =>{
    const result = await connection.raw(`
      SELECT name as class_name,
      DATE_FORMAT(start_date,'%d/%m/%Y') AS start_date,
      DATE_FORMAT(end_date,'%d/%m/%Y') AS end_date,
      module
      FROM CLASS
      WHERE id = '${classId}';
    `)
    return result[0]
};

export const changeModule = async(classId: number, module:string): Promise <any> =>{
    const result = await connection.raw(`
      UPDATE CLASS SET module = '${module}'
      WHERE id = '${classId}'
    `)
    return result
};