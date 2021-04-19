/*
Exercicio 1 - Interpretação
a = 10
b = 10

console.log(b)

b = 5
console.log(a, b)

será impresso no console

10
10 5
*/

/*
Exercicio 2

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)

será impresso no console
10 10 10
*/


//Exercicio 1 - Escrita
// a
let nome
//b
let idade
//c
console.log(typeof nome)
console.log(typeof idade)
/*D-1
undefined, pois ambas as variaves não possuem valores atribuidos
*/

//D-2
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

//E
console.log(typeof nome)
console.log(typeof idade)
//ambas retornam como strings

//F
console.log("Olá "+nome+", você tem "+idade+" anos.")

//Exercicio 2
let resposta
alert("Escolhas suas preferências")
resposta = prompt("Xbox x PS4 x PC x Switch")
console.log()
console.log("1. Xbox x PS4 x PC x Switch ?"+"\n"+"Resposta: "+resposta)
resposta = prompt("Doritos x Fandangos x Cheetos x Lays")
console.log("2. Doritos x Fandangos x Cheetos x Lays?"+"\n"+"Resposta: "+resposta)
resposta = prompt("YouTube x Netflix x Amazon x Crunchyroll")
console.log("3. YouTube x Netflix x Amazon x Crunchyroll?"+"\n"+"Resposta: "+resposta)
resposta = prompt("Coca-Cola  x Pepsi x Guaraná x Fanta")
console.log("4. Coca-Cola  x Pepsi x Guaraná x Fanta?"+"\n"+"Resposta: "+resposta)
resposta = prompt("Chrome x Firefox x IE x Safari")
console.log("5. Chrome x Firefox x IE x Safari?"+"\n"+"Resposta: "+resposta)

//Exercicio 3
//a
const array = ["Lámen", "Pizza", "Katsudon", "Omelete"]
console.log (array)
//b
console.log("Essas são minhas comidas preferidas:")
console.log (array[0])
console.log (array[1])
console.log (array[2])
console.log (array[3])
//c
array [1] = prompt("Qual a sua comida preferida?")
console.log (array)

//Exercicio 4
const questionario = ["Você bebeu agua hoje?", "Você se exercitou hoje?", "Você possui uma alimentação saudável?"]

//a
let solucao = [false, false, false]
//b
console.log(questionario[0],solucao[0])
console.log(questionario[1],solucao[1])
console.log(questionario[2],solucao[2])