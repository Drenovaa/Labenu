//Exercício 1

function inverteArray(array) {
   let numerosInvertidos = []
   const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];
   for (let i = numeros.length-1; 0<=i; i--){
      numerosInvertidos.push(numeros[i])
   }
   return numerosInvertidos
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   const numbers = [1, 2, 3, 4, 5, 6];
   let numerosParesElevados = []
   for(let i = 0; i < numbers.length; i++){
      if(numbers[i]%2 === 0){
         numerosParesElevados.push(numbers[i]**2)
      }
   }
   return numerosParesElevados
}

//Exercício 3

function retornaNumerosPares (array) {
   const numbers = [1, 2, 3, 4, 5, 6];
   let numerosPares = []
   for(let i = 0; i < numbers.length; i++){
      if(numbers[i]%2 === 0){
         numerosPares.push(numbers[i])
      }
   }
   return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   const numbers = [10, 18, 7, 56, 39]
   let maiorNumero = 0
   for(let i = 0; i<numbers.length; i++){
      if(numbers[i] >= maiorNumero){
         maiorNumero = numbers[i]
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   const numbers = [1, 2, 3, 4, 5, 6];
   let quantidadeDeElementos = numbers.length
   return quantidadeDeElementos
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3
   let resultado = []

   let logicaA = booleano1 && booleano2 && !booleano4
      resultado.push(logicaA)
   let logicaB = (booleano1 && booleano2) || !booleano3
      resultado.push(logicaB)
   let logicaC = (booleano2 || booleano3) && (booleano4 || booleano1)
      resultado.push(logicaC)
   let logicaD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
      resultado.push(logicaD)
   let logicaE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
      resultado.push(logicaE)

   return resultado
} 

//Exercício 7

function retornaNNumerosPares(n) {
   let nPares = []

   for(let i = 0; nPares.length < n ; i++){
      if(i%2 === 0){
         nPares.push(i)
      }
   }
   return nPares
}

// Exercício 8

function checaTriangulo(a, b, c) {

  if(a === b && b === c){
      return "Equilátero"
  }else if(a !== b && b !== c && c !==a){
      return "Escaleno"
  }else if((a === b && c !== a)|| (b == c && a !==b) || (c == a && b !== c)){
      return "Isósceles"
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maior
   let menor
   let diferencaEntreValores
   if(num1 > num2){
      maior = num1
      menor = num2
   }else{
      maior = num2
      menor = num1
   }

   if(maior%menor === 0){
      divisivel = true
   }

   diferencaEntreValores = maior - menor

   return {
      maiorNumero: maior,
      maiorDivisivelporMenor: divisivel,
      diferenca: diferencaEntreValores
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   const numbers = [-1, 2, 34, 26, 15, 50, 46, 102]
   let resultado = []
   numbers.sort(organiza)

   resultado.push(numbers[(numbers.length-2)])
   resultado.push(numbers[1])

   return resultado

   function organiza (a,b){
      return a-b;
   }
}

//Exercício 11

function ordenaArray(array) {
   const numbers = [20, 13, -1, 2, 5, 49, -40, 10, 70, 5]
   let tamanho = numbers.length

   for (let i = 0; i < tamanho; i++){
      for( let j = 0; j < tamanho-1; j++){
         if(numbers[j] > numbers[j+1]){
            let temp = numbers[j]
            numbers[j] = numbers[j+1]
            numbers[j+1]=temp
         }
      }
   }
   return numbers
}

// Exercício 12

function filmeFavorito() {
   let filmeFavorito = {
      nome: "O Diabo Veste Prada",
      ano: Number(2006),
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return filmeFavorito
}


// Exercício 13

function imprimeChamada() {
   let filmeFavorito = {
      nome: "O Diabo Veste Prada",
      ano: Number(2006),
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {

   let perimetroCalc = (2*(lado1+lado2))
   let areaCalc = (lado1*lado2)
   
   return{
      largura: lado1,
      altura: lado2,
      perimetro: perimetroCalc,
      area: areaCalc
   }
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   if(pessoa.nome !== "ANÔNIMO"){
      pessoa.nome = "ANÔNIMO"
   }
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]


// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   let maiores = arrayDePessoas.filter((arrayDePessoas) =>{
      if(arrayDePessoas.idade >=20){
         return arrayDePessoas
      }
   })
   return maiores
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   let menores = arrayDePessoas.filter((arrayDePessoas) =>{
      if(arrayDePessoas.idade < 20){
         return arrayDePessoas
      }
   })
   return menores
}


// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const numbers = [-1, 1, 2, 5, 25, 4]
   let arrayDobrada = []

   for(let i = 0; i<numbers.length; i++){
      arrayDobrada.push(numbers[i]*2)
   }

   return arrayDobrada
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const numbers = [-1, 1, 2, 5, 25, 4]
   let arrayDobrada = []

   for(let i = 0; i<numbers.length; i++){
      arrayDobrada.push(numbers[i]*2+"")
   }
   return arrayDobrada
}


// Exercício 17, letra C

function verificaParidade(array) {
   const numbers = [0, 1, 2, 5, 25, 4]
   let parOuImpar = []

   for(let i = 0; i<numbers.length; i++){
      if(numbers[i]%2 === 0){
         parOuImpar.push(numbers[i]+" é par")
      }else{
         parOuImpar.push(numbers[i]+" é ímpar")
      }
   }
   return parOuImpar
}


// Exercício 18pessoas

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let autorizados = pessoas.filter((pessoas) =>{
      if(pessoas.idade >= 14 && pessoas.altura >= 1.5 && pessoas.idade <= 60 ){
         return pessoas
      }
   })
   return autorizados
   }


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let naoAutorizados = pessoas.filter((pessoas) =>{
      if(pessoas.idade >= 14 && pessoas.altura >= 1.5 && pessoas.idade <= 60 ){
         return false
      }else{
         return pessoas
      }
   })
   return naoAutorizados
}


//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
    const ordemNosNomes = consultasNome.sort((a, b) => {
    b.valor - a.valor;
 })
   return ordemNosNomes
}
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {}
// ♪ when you try your best but you don't succeed ♪

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  contas.forEach((contas)=>{
      let valorTotal = 0
      contas.compras.forEach((valor)=>{
         valorTotal += valor
      })
      contas.saldoTotal -= valorTotal

  })
  return contas
}