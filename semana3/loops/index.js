/*
-------------->EXERCICIO 1<---------------
O codigo irá somar o valor de i na variavel valor, porém como está utilizando o i para somar o valor cada ver que o o for ser executado i esse valor será adicionado na (valor += i)
10

-------------->EXERCICIO 2<---------------
a-
Todos os numeros da array maiores que 18, ou seja, 19 21 23 25 27 30

b-
Removendo a o if do codigo ele já seria o suficiente para imprimir todos os elementos da lista.



-------------->Desafio<---------------
0
00
000
0000

O codigo possui "um loop dentro do outro" toda vez que o ciclo se iniciar a linha será definida como "" fazendo com que o (for) tenha que fazer um ciclo toda vez que uma linha for impressa

*/

// //-------------->EXERCICIO 3<---------------
let arrayoriginal= [11,22,33,44,55,66,77,88,99,111,222]
let array = 0
let arrayPares= []

//a
for (let i = 0; i < arrayoriginal.length; i++){
    if (arrayoriginal[i]>array){
        array = arrayoriginal[i]
        console.log(array)
    }
}

// //b
array=0
for (i = 0; i < arrayoriginal.length; i++){
    if (arrayoriginal[i]>array){
        array = (arrayoriginal[i]/10)
        console.log(array)
    }
}
//c
array=0
let pares
for (let numeros of arrayoriginal){
    pares = numeros%2
    if(pares === 0){
        arrayPares.push(numeros)
    }
}
console.log(arrayPares)

//d
array = 0
let index = 0
for (let i = 0; i < arrayoriginal.length; i++){
    console.log("O elemento do index",index.toString(), "é", arrayoriginal[i].toString())
    index++
}

//e
let maior = 0
let menor = Infinity
for (i = 0; i < arrayoriginal.length; i++){
    while(arrayoriginal[i]>maior){
        maior = arrayoriginal[i]
    }while(arrayoriginal[i]<menor){
        menor = arrayoriginal[i]
    }
}
console.log("O maior elemento é",maior.toString(),"e o menor é",menor.toString())