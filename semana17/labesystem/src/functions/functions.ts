import { connection } from "../data/connection";

export const capitalize = (string:string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function formateDate(date: string): string {
  if(date === undefined){
      return "erro"
  }else{
      const split = date.split('/')
      const dateFormat = split[2] + "-" + split[1] + "-" + split[0]
      return dateFormat
  }
};

export const selectAllStudents = async (): Promise<any> => {
    const result = await connection("STUDENT")
      .select("*")
    return result;
};
