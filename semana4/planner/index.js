function adicionarTarefa(){
    const tarefaInput = document.getElementById("tarefa")
    const hora = document.getElementById("horario")
    const tarefa = tarefaInput.value
    const horario = hora.value
    console.log(horario)

    if(tarefa !=="" && horario !==""){
        const diaDaSemana = document.querySelector("select")
        const dia = document.getElementById(diaDaSemana.value)
        dia.innerHTML += '<li onclick="tarefaFinalizada(this)">'+horario+"h "+tarefa+'</li>'
        tarefaInput.value = ""
        hora.value = ""

    }else if (tarefa =="" && horario ==""){
        alert("Preencha os campo de horario e tarefa")
    }else if(horario == ""){
        alert("Preencha o campo de horario da tarefa")
    }else if (tarefa ==""){
        alert("Preencha o campos de tarefa")
    }
}

function tarefaFinalizada(risca) {
    const diaDaSemana = document.querySelector("select")
    document.getElementById(diaDaSemana.value)
    risca.style.textDecoration="line-through"
}

function limparTarefas(){
    const limparLista = document.querySelector("section")
    limparLista.innerHTML = '<div class="semana"><div id="domingo"><h3>Domingo</h3></div></div>'
    limparLista.innerHTML += '<div class="semana"><div id="segunda"><h3>Segunda-feira</h3></div></div>'
    limparLista.innerHTML += '<div class="semana"><div id="terca"><h3>Terça-feira</h3></div></div>'
    limparLista.innerHTML += '<div class="semana"><div id="quarta"><h3>Quarta-feira</h3></div></div>'
    limparLista.innerHTML += '<div class="semana"><div id="quinta"><h3>Quinta-feira</h3></div></div>'
    limparLista.innerHTML += '<div class="semana"><div id="sexta"><h3>Sexta-feira</h3></div></div>'
    limparLista.innerHTML += '<div class="semana"><div id="sabado"><h3>Sábado</h3></div></div>'
}


