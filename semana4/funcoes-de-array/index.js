let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    despesas.forEach(despesa => {
        divDespesas.innerHTML += `<div>valor: R$${despesa.valor} | tipo:${despesa.tipo} | descrição:${despesa.descricao}</div>`
 
    // AQUI VEM A IMPLEMENTAÇÃO//----------
})
}

// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0

    arrDespesas.forEach(({valor})=>{
        gastoTotal += valor
    })

    arrDespesas.forEach(({tipo, valor})=>{
        if(tipo === "alimentação"){
            gastoAlimentacao += valor
        }if(tipo === "utilidades"){
            gastoUtilidades += valor
        }if(tipo === "viagem"){
            gastoViagem += valor
        }
    })

    // AQUI VEM A IMPLEMENTAÇÃO//----

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}

function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}

function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    if(valorMax == "" || valorMin =="" || valorMin > valorMax){
        alert("O valor minimo precisa ser menor que o maximo para o filtro funcionar") 
    }else{
        let despesasFiltradas = arrDespesas.filter((despesa) => {
            if (tipoFiltro === "todos" && (despesa.valor >= valorMin && despesa.valor <= valorMax)) {
                return true
            } else if (despesa.tipo === tipoFiltro && (despesa.valor >= valorMin && despesa.valor <= valorMax)) {
                return true
            }
        })

        imprimirDespesas(despesasFiltradas)
    }
}
// AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO





// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}