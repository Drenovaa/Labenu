/*
-------------->EXERCICIO 1<---------------
a. False
b. False
c. False
e. boolean

-------------->EXERCICIO 2<---------------
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

//-------------->EXERCICIO 1<---------------
voce = prompt("Digite a sua idade")
amigo = prompt("Digite a idade do seu(sua) melhor amigo(a)")

let suaIdade = Number(voce)
let amigoIdade = Number(amigo)
let diferencaDeIdade = voce-amigo
// let diferencaDeIdade = Math.abs(voce-amigo)// para não deixar o valor negativo utilizar a forma matematica absoluta

console.log("Sua idade é maior do que a do seu melhor amigo?\n",suaIdade>amigoIdade)
console.log("A diferença de idade é de:", diferencaDeIdade)

//-------------->EXERCICIO 2<---------------

numPar = prompt("Digite um numero par")

let numero = Number(numPar)
console.log(numero%2)

/*
c. Todos os valores pares sempre terão resto 0
d. Todos os valore impares sempre terão resto 1
*/

//-------------->EXERCICIO 3<---------------
array = [];
let listaDeTarefas = array
listaDeTarefas[0] = prompt("Adicione uma tarefa na lista")
listaDeTarefas[1] = prompt("Adicione uma tarefa na lista")
listaDeTarefas[2] = prompt("Adicione uma tarefa na lista")
console.log(listaDeTarefas)
done = prompt("Qual terefa foi realizada ? 0, 1 ou 2")
remove = Number(done)
array.splice(remove, 1)
console.log(array)

//-------------->EXERCICIO 4<---------------
nome = prompt("Insira o nome do seu usuario")
email = prompt("Insira o seu email")
console.log("O email", email, "foi cadastrado com sucesso. Seja bem-vinda(o)",nome+"!")


