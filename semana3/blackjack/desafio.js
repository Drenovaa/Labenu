const jogar = (confirm("Clique em confirmar para iniciar o jogo"))
if (jogar) {
    let carta1Usuario = comprarCarta()
    let carta2Usuario = comprarCarta()
    let carta1Pc = comprarCarta()
    let carta2Pc = comprarCarta()
    const limite = 21
    let regraDosAses = 11

    let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

    console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)

    while(carta1Pc.valor == regraDosAses && carta2Pc.valor == regraDosAses || carta1Usuario.valor == regraDosAses && carta2Usuario.valor == regraDosAses){
        console.log ("O jogo deverá ser reiniciado")
        
    }if(confirm("Dejesja comprar uma carta?")) {
            let carta3Usuario = comprarCarta()
            pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor + carta3Usuario.valor
            console.log("O Usuario está comprando mais uma cara")
            console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} ${carta3Usuario.texto}- ${pontuacaoUsuario}`)
        }if (pontuacaoPc <= pontuacaoUsuario && pontuacaoPc < limite && pontuacaoUsuario <= limite) {
            let carta3Pc = comprarCarta()
            console.log("O Computador está comprando mais uma cara")
            pontuacaoPc = carta1Pc.valor + carta2Pc.valor + carta3Pc.valor
            console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} ${carta3Pc.texto}- ${pontuacaoPc}`)
        }   

    if (pontuacaoUsuario > pontuacaoPc && pontuacaoUsuario <= limite || pontuacaoPc > limite && pontuacaoUsuario <= limite) {
        console.log("O usuário ganhou!")
    } else if (pontuacaoPc > pontuacaoUsuario && pontuacaoPc <= limite || pontuacaoUsuario > limite && pontuacaoPc <= limite) {
        console.log("O computador ganhou!")
    } else if (pontuacaoUsuario === pontuacaoPc || pontuacaoUsuario > limite &&  pontuacaoPc > limite) {
        console.log("Empate!")
    }
} else {
    console.log("O jogo acabou")
}
