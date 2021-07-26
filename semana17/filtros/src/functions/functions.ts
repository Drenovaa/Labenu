import connection from "../connection"

export const selectAllUsers = async (name: string, sort: string|number, order:any, offset:number): Promise<any> => {
    const result = await connection("aula48_exercicio")
      .select("*")
      .where("name", "LIKE", `%${name}%`)
      .orderBy(sort, order)
      .limit(5)
      .offset(offset)
    return result;
  };

export const selectbyType = async (type: string): Promise<any> => {
    const result = await connection("aula48_exercicio")
      .select("*")
      .where("type", "LIKE", `%${type}%`);
    return result;
  };