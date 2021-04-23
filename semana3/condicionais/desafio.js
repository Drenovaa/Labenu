//---------------->Desafio 1<-------------
let filme
let preco
filme = prompt("Qual o gênero do filme").toLowerCase()
preco = Number(prompt("Qual o valor do ingresso?"))

if (preco < 15 && filme == "fantasia"){
    snack = prompt("Qual snack será comprado no cinema?")
    console.log("Bom filme! E cuidado com as calorias do", snack,)
}else{
    console.log("Escolha outro filme :(")
}

//---------------->Desafio 2<-------------
const dolar = 4.1
let nome
let tipoDeJogo
let etapaDoJogo
let categoria
let ingressos
let valotUnitario
let valorTotal


nome = prompt("Digite o seu nome completo")
tipoDeJogo = prompt("Qual tipo de jogo? IN ou DO").toUpperCase()
etapaDoJogo = prompt("Qual etapa do jogo? SF  -  DT  -  FI").toUpperCase()
categoria = Number(prompt("Qual a categoria? 1 - 2 - 3 - 4"))
ingressos = Number(prompt("Qual a quantidade de ingressos que deseja comprar?"))


if (etapaDoJogo == "SF") {
    switch (categoria) {
        case (1):
            valotUnitario = 1320
            break
        case (2):
            valotUnitario = 880
            break
        case (3):
            valotUnitario = 550
            break
        case (4):
            valotUnitario = 220
            break
    }
} else if (etapaDoJogo == "DT") {
    switch (categoria) {
        case (1):
            valotUnitario = 660
            break
        case (2):
            valotUnitario = 440
            break
        case (3):
            valotUnitario = 330
            break
        case (4):
            valotUnitario = 170
            break
    }
} else if (etapaDoJogo == "FI") {
    switch (categoria) {
        case (1):
            valotUnitario = 1980
            break
        case (2):
            valotUnitario = 1320
            break
        case (3):
            valotUnitario = 880
            break
        case (4):
            valotUnitario = 330
            break
    }
}

console.log("-----Dados da compra-----")
console.log("Nome do cliente:", nome)

if (tipoDeJogo == "IN"){
    console.log("Tipo de jogo: Internacional")
}else{
    console.log("Tipo de jogo: Nacional")
}

if (etapaDoJogo == "SF"){
    console.log("Etapa do jogo: Semifinais")
}else if (etapaDoJogo == "DT"){
    console.log("Etapa do jogo: Decisão 3° Lugar")
}else{
    console.log("Etapa do jogo: Final")
}

console.log("Categoria:", categoria)
console.log("Quantidade de ingressos:", ingressos, "ingressos")
console.log("-----Valores-----")
if (tipoDeJogo == "IN"){
    valotUnitario= valotUnitario/dolar
    console.log("Valor do ingresso: U$", valotUnitario)
    console.log("Valor total: U$", valotUnitario*ingressos)
}else{
    valotUnitario
    console.log("Valor do ingresso: R$", valotUnitario)
    console.log("Valor total: R$", valotUnitario*ingressos)
}