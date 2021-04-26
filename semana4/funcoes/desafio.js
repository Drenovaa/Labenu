//------------>EXERCICIO 1<---------------
//1
const parametro = (valor1) => {
    valorRecebido = valor1
    console.log(valorRecebido)
    return valorRecebido
}

parametro(Number(prompt("Digite um valor")))

// //2
const parametro2 = (semRetorno1, semRetorno2) =>
    (semRetorno1=Number(prompt("Digite um valor para ser somado")))+(semRetorno2=Number(prompt("Digite o segundo valor para ser somado")));



parametro(parametro2())

//------------>EXERCICIO 2<---------------
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
console.log(numeros)
//A)
function paresDobrados(arraypares){
    arraypares = []
    for(let i = 0; i<numeros.length; i++){
        if ((numeros[i]%2) === 0){
            arraypares.push(numeros[i]*2)
        }
    }
    console.log(arraypares)
    return arraypares
}
paresDobrados()

//B)

function maiorDoArray (){
    let maior = 0
    for(let i = 0; i<numeros.length; i++){
        while(numeros[i]>maior){
            maior = numeros[i]
        }
    }
    console.log(`O maior valor do array é: ${maior}`)
    return maior
}
maiorDoArray()

//C)
function indexDoMaior (){
    let maior = 0
     for(let i = 0; i<numeros.length; i++){
        while(numeros[i]>maior){
            maior = numeros[i]
            index = i
         }
    }
    console.log(`O maior valor do array está no index: ${index}`)
    return
}
indexDoMaior()

//D)
function inverteArray(){
    let array = []
    for (let i = numeros.length-1; 0<=i; i--){
       array.push(numeros[i])
    }
    console.log(array)
}
inverteArray()