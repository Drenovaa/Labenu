/*
A)
const minhaString:string = 1
Type 'number' is not assignable to type 'string'.

Ou seja, se utilizarmos a tipagem errada o codigo não funcionará

B)
const meuNumero:number|string = "a"

Utilizando a simbologia do "ou" ( | )
*/

//C) && D)
enum CORES_DO_ARCOIRIS {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type pessoa = {
    nome:string
    idade:number
    corFavorita:CORES_DO_ARCOIRIS
}

const aluno: pessoa = {
    nome:"Dimitri",
    idade:23,
    corFavorita:CORES_DO_ARCOIRIS.VIOLETA,
}
const motorista: pessoa = {
    nome:"grzegorz",
    idade:33,
    corFavorita:CORES_DO_ARCOIRIS.AMARELO,
}
const ciclista: pessoa = {
    nome:"Castro",
    idade:78,
    corFavorita:CORES_DO_ARCOIRIS.LARANJA,
}
