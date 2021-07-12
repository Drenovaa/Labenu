const nome = process.argv[2]
const idade = process.argv[3]


if(process.argv[2] && process.argv[3]){
    console.log("\033[0;32m",`Olá, ${nome}!, Você tem ${idade} anos. Em sete anos você tera ${Number(idade)+7}.`)
}else{
    console.log('\x1b[31m', "São necessários dois valores, nome e idade.")
}