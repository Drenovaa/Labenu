//-------------->DESAFIO 1<---------------

console.log("HORA DO JOGO")
const resposta = Number(prompt("Digite o valor que você está pensando de 0-10"))
let chute = 0
for (let tentativa = 0;tentativa<4; tentativa++){
    chute = prompt("Digite o valor que você acha que é a resposta")
        if(chute == resposta){
            console.log("Acertou, a resposta é",resposta+", você acertou na",tentativa+1+"° tentativas")
            break
        }if(chute > resposta){
            console.log("O valor é menor que",chute)
        }if(chute < resposta){
            console.log("O valor é maior que ",chute)
        }if(tentativa == 3 && chute !== resposta){
            console.log("Que pena, a resposta era", resposta)
        }
        console.log("O numero de tentativas foram:",tentativa+1,"tentativa")
}


//-------------->EXERCICIO 2<---------------
alert("Tente descobrir qual o valor (0-10)")
console.log("HORA DO JOGO")
const resposta = Math.round(Math.random()*10 + 0)
let chute = 0
for (let tentativa = 0;tentativa<4; tentativa++){
    chute = prompt("Digite o valor que você acha que é a resposta")
        if(chute == resposta){
            console.log("Acertou, a resposta é",resposta+", você acertou na",tentativa+1+"° tentativas")
            break
        }if(chute > resposta){
            console.log("O valor é menor que",chute)
        }if(chute < resposta){
            console.log("O valor é maior que ",chute)
        }if(tentativa == 3 && chute !== resposta){
            console.log("Que pena, a resposta era", resposta)
        }
        console.log("O numero de tentativas foram:",tentativa+1,"tentativa")
}