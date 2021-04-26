/*
-------------->EXERCICIO 1<---------------
A)
10
50

B)
50
Esse valor será referente ao ultimo comando (minhaFuncao(10)), porém esse valor não está sendo impresso no console e sim sendo interpretado como uma consulta de valor

-------------->EXERCICIO 2<---------------

A)
Darvas
Caio

B)
Amanda
Caio
Pois como o valor da função foi alterado será impresso apenas a nova array atribuida à função

-------------->EXERCICIO 3<---------------

O codigo recebe uma array, se o valor for par ele multiplica pelo mesmo, um nome melhor poderia parAoQuadrado

*/

//------------>EXERCICIO 4<---------------
//A)

function sobreMim1(){
    console.log("Eu sou Guilherme, tenho 24 anos, moro em São Paulo e sou estudante")
}
sobreMim1()

// //B)
let nome = prompt("Qual o seu nome")
let idade = Number(prompt("Qual a sua idade"))
let cidade = prompt("Qual a sua cidade")
let estudante = prompt("É estudantes? S ou N?").toUpperCase()

function sobreMim2(nome, idade, cidade, estudante){
    if(estudante ==="S"){
    estudante = "sou"
    }else{
        estudante = "não sou"
    }
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante`)
}
sobreMim2(nome, idade, cidade, estudante)

//------------>EXERCICIO 5<---------------
//A)

function soma(valor1,  valor2){
    valor1 = Number(prompt("Insira um numero"))
    valor2 = Number(prompt("Insira outro numero"))
    resultado = valor1+valor2
    return resultado
}
soma()
console.log(resultado)

// B)

function maiorIgual(valor1, valor2){
    valor1 = Number(prompt("Insira um numero"))
    valor2 = Number(prompt("Insira outro numero"))
    if(valor1 > valor2){
        console.log(`O primeiro valor: ${valor1} é maior que o segundo valor: ${valor2}`)
        return true;
        
    }else if (valor1 === valor2){
        console.log(`O primeiro valor: ${valor1} é igual ao segundo valor: ${valor2}`)
        return false
    }
}
maiorIgual()

// C)
function mensagem(){
    texto = prompt("Digite o texto a ser impresso")
    for(let i = 0; i < 10; i++){
        console.log(texto)
    }
    return texto
}
mensagem()

//------------>EXERCICIO 6<---------------
//A)
const array =[10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function tamanhoArray(array){
    console.log(array.length)
}
tamanhoArray(array)

//B)
const array =[10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function parOuNao(numInserido){
    numInserido = Number(prompt("Digite um numero para saber se ele é par ou não"))
    if ((numInserido%2) === 0){
        console.log(`O valor inserido: ${numInserido} é Par`)
    }else{
        console.log(`O valor inserido: ${numInserido} é Impar`)
    }
    return numInserido
}
parOuNao()

//C)
const array =[10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function parNoArray(arraypares){
    arraypares = []
    for(let i = 0; i<array.length; i++){
        if ((array[i]%2) === 0){
            arraypares.push(array[i])
        }
    }
    console.log(arraypares)
    console.log("A array par contem ",arraypares.length,"itens")
    return arraypares
}
parNoArray()

//D)
const array =[10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function parOuNao(array){
    for(let i =0; i<array.length; i++){
        if ((array[i]%2) === 0){
            console.log(`O valor do array na posição ${i}: ${array[i]} é Par`)
        }else{
            console.log(`O valor do array na posição ${i}: ${array[i]} é Impar`)
        }
    }
    return array
}
parOuNao(array)