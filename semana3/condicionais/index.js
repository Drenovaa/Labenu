/*-------------->EXERCICIO 1<---------------
O código pega o numero digitado pelo usuário e faz módulo de 2, caso o resultado for 0, ou seja, qualquer numero par (resto 0), será responsavel pelo if
Para realizar o else basta inserir qualquer valor impar


---------------->EXERCICIO 2<---------------
a-
O código serve para o usuário escolher um item dentre varias opções substituido if/ifelse por switch case

b-
O preço da fruta Maça é R$ 2.25

c-
O preço da fruta Pêra é R$ 5
Sem o break a função seguirá o fluxo e a variavel preco sera substituida pelo valor atribuido no default

---------------->EXERCICIO 3<---------------
a-
Criando uma variavel(constante) atribuida pelo usuario e tranformando-a em um numero

b-
(10)
Esse número passou no teste
E um erro, pois o let foi declarado dentro de um escopo local e o escopo global não possui a variavel atribuida a mensagem
(-10)
Apenas o erro, pois o numero atribuido é menor que 0

c-
A variavem (mensagem) foi declarada dentro de um escopo local(filho) e o escopo global(pai) não possui a variavel atribuida a mensagem
*/

//---------------->EXERCICIO 4<-------------
let idade
idade = Number(prompt("Digite a sua idade aqui, sem mentir, Deus está vendo"))

if (idade >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}

//---------------->EXERCICIO 5<-------------
let turno
turno = prompt("Qual o turno que você estuda? M - V - N").toUpperCase()

if (turno === "M"){
    console.log("Bom dia")
}else if(turno === "V"){
     console.log("Boa tarde")
 }else if (turno === "N"){
    console.log("Boa noite")
}else{
    console.log("Algo de errado não está certo.")
}

//---------------->EXERCICIO 6<-------------

let turnoS
turnoS = prompt("Qual o turno que você estuda? M - V - N").toUpperCase()

switch(turnoS){
    case ("M"):
        console.log("Bom dia")
        break
    case ("V"):
        console.log("Boa tarde")
        break
    case ("N"):
        console.log("Boa noite")
        break
    default:
        console.log("Algo de errado não está certo.")
        break
}

//---------------->EXERCICIO 7<-------------
let filme
let preco
filme = prompt("Qual o gênero do filme").toLowerCase()
preco = Number(prompt("Qual o valor do ingresso?"))

if (preco < 15 && filme == "fantasia"){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}