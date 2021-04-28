const formulario = []

function criarPost(){
    const titulo_input = document.getElementById("titulo-post")
    const titulo_post = titulo_input.value
    const autor_input  = document.getElementById("autor-post")
    const autor_post = autor_input.value
    const conteudo_input  = document.getElementById("conteudo-post")
    const conteudo_post = conteudo_input.value
    const imagem_input  = document.getElementById("imagem-post")
    const imagem_post = "<img src="+imagem_input.value+" alt='imagem'>"
    
    if(imagem_input.value !== ""){
        let post = {
            titulo: titulo_post,
            autor: autor_post,
            postagem: conteudo_post,
            imagem: imagem_post
        }

        formulario.push(post)
    }else{
        let post = {
            titulo: titulo_post,
            autor: autor_post,
            postagem: conteudo_post,
            imagem: ""
        }
        formulario.push(post)
    }


    titulo_input.value=""
    autor_input.value=""
    conteudo_input.value=""
    imagem_input.value=""
}
    

function exibePost(){
    const lista = document.getElementById("posts")
    formulario.forEach(({titulo, autor, postagem, imagem})=> lista.innerHTML +=  "<div>"+imagem+"<h2>"+titulo+"</h2>"+"<h3>"+autor+"</h3>"+"<p>"+postagem+"</p>"+"</div>")
}

// localStorage.setItem("formulario", formulario)


// function pagePost(){
//     let localPost = localStorage.getItem("formulario")
//     let transferencia = localPost
//     const lista = document.getElementById("container-de-posts")
//     transferencia.forEach(({titulo, autor, postagem, imagem})=> lista.innerHTML +=  "<div>"+imagem+"<h2>"+titulo+"</h2>"+"<h3>"+autor+"</h3>"+"<p>"+postagem+"</p>"+"</div>")

// }
