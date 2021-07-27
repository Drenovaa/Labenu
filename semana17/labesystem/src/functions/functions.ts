import { connection } from "../data/connection";


export const selectAllStudents = async (): Promise<any> => {
    const result = await connection("STUDENT")
      .select("*")
    return result;
  };

// export const selectbyType = async (type: string): Promise<any> => {
//     const result = await connection("aula48_exercicio")
//       .select("*")
//       .where("type", "LIKE", `%${type}%`);
//     return result;
//   };