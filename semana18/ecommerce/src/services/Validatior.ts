import { ProductRegistration } from "../model/product";
import { UserRegistration } from "../model/user";

export function checkUser({name, email, age}: UserRegistration) {

    if(!name){
        throw new Error("É preciso inserir um nome para criar um novo usuário")
    }

    if(!email){
        throw new Error("É preciso inserir um email para criar um novo usuário")
    }

    if(!age){
        throw new Error("É preciso inserir uma idade para criar um novo usuário")
    }

    if(age < 18){
        throw new Error("O usuário precisa ser maior de 18 anos para se registrar")
    }

    if(email.indexOf('@') === -1){
        throw new Error("Email inserido inválido")
    }

    if(name && age > 18 && email){
        return true
    }
}

export function checkProduct({name, description, price}: ProductRegistration) {

    if(!name){
        throw new Error("É preciso inserir um nome para criar um novo produto")
    }

    if(!description){
        throw new Error("É preciso inserir uma descrição para criar um novo produto")
    }

    if(!price){
        throw new Error("É preciso inserir um valor para criar um novo produto")
    }

    if(name && description && price){
        return true
    }
}