const tasks = ["Lavar a Louça"]


if(process.argv[2]){
    tasks.push(process.argv[2])
    console.log(`Tarefa adicionada com sucesso \n  Tarefas:[${tasks}]`)
}else{
    console.log(`Tarefas atuais: ${tasks}.`)
}
