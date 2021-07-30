export const validModule = ["0", "1", "2", "3", "4", "5", "6", "7"]

export type classType = {
    name: string,
    start_date: string,
    end_date: string, 
    module: string
}

export type student = {
    name: string,
    email: string,
    birthdate: string,
    hobbies: string
};

enum SPECIALTIES {
    React = "REACT",
    Redux = "REDUX",
    CSS = "CSS", 
    Testes = "TESTES", 
    Typescript = "TYPESCRIPT", 
    POO = "PROGRAMAÇÃO ORIENTADA A OBJETOS",
    Backend = "BACKEND"
}

export const validSpecialties = ["REACT", "REDUX", "CSS", "TESTES", "TYPESCRIPT", "PROGRAMAÇÃO ORIENTADA A OBJETOS", "BACKEND"]

export type teacher = {
    name: string,
    email: string,
    birthdate: string,
    specialties: SPECIALTIES
};