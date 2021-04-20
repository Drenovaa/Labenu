//-------------->EXERCICIO 1<---------------
//a
let kelvin
let fahrenheit
let celsius

FtoK = ((fahrenheit-32)*(5/9)+273.15)
CtoF = ((celsius)*9/5+32)


//a
fahrenheit = 77
FtoK = ((fahrenheit-32)*(5/9)+273.15)
console.log("77°F é equivalente a",FtoK, "°K")

//b
celsius = 80
CtoF = ((celsius)*9/5+32)
console.log("80°C é equivalente a",CtoF, "°F")

//c
celsius = 30
CtoF = ((celsius)*9/5+32)
console.log("30°C é equivalente a",CtoF, "°F")
FtoK = ((CtoF-32)*(5/9)+273.15)
console.log(CtoF+"°F é equivalente a",FtoK,"°K")

//d
temperatura = prompt("Insira uma temperatura em celsius")
celsius = Number(temperatura)
CtoF = ((celsius)*9/5+32)
console.log("30°C é equivalente a",CtoF, "°F")
FtoK = ((CtoF-32)*(5/9)+273.15)
console.log(CtoF+"°F é equivalente a",FtoK,"°K")

//-------------->EXERCICIO 2<---------------

const consumo = 0.05
let conta = 0

//a
conta = consumo*280
console.log("O valor a ser pago é de R$"+conta)

//b
desconto = 0.85
conta = consumo*280
console.log("O valor a ser pago com desconto é de R$"+conta*desconto)

//-------------->EXERCICIO 3<---------------
//a
let libra = 20
LtoKg = (libra/2.205)
console.log("20lb equivalem a", (LtoKg), "Kg")

//b
let onca = 10.5
OtoKg = (onca/35.274)
console.log("10oz equivalem a", (OtoKg), "Kg")

//c
let mi = 100
MitoM = (mi*1609.344)
console.log("100mi equivalem a", (MitoM), "m")

//d
let feet = 50
FttoM = (feet/3.281)
console.log("50ft equivalem a", (FttoM), "m")

//e
let gal = 103.56
GaltoL = (gal*3.785411784)
console.log("103,56gal equivalem a", (GaltoL), "l")

//f
let xic = 450
XictoL = (xic/4.227)
console.log("450xic equivalem a", (XictoL), "l")

//g
milhas = prompt("Insira um valor de milhar para ser convertido em metros")
mi = Number(milhas)
MitoM = (mi*1609.344)
console.log(mi+"mi equivalem a", (MitoM), "m")