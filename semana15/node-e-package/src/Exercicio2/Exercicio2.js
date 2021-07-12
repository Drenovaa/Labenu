const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])
const operacao = process.argv[2]

const showResult = (result) =>{
    return console.log('\x1b[36m%s\x1b[0m', result)
}

if(process.argv[3] && process.argv[4]){
    switch(operacao){
        case "add":
            showResult(valor1+valor2)
            break;
        case "subt":
            showResult(valor1-valor2)
            break;
        case "mult":
            showResult(valor1*valor2)
            break;
        case "div":
            showResult(valor1/valor2)
            break;
        default:
            console.log("\x1b[31m","Aí quebrou as pernas")
    
    }
}else{
    console.log("\x1b[31m","Tá faltando coisa aí, é preciso adicionar a operação e dois valores - EX: add 1 1")
}