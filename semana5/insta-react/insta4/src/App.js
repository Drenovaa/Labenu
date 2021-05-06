import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {

    post:[
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/59/51",
        fotoPost: "https://picsum.photos/175/180"
      },
      {
        nomeUsuario: "joaozinho",
        fotoUsuario: "https://picsum.photos/56/56",
        fotoPost: "https://picsum.photos/175/150"
      },
      {
        nomeUsuario: "clarinha",
        fotoUsuario: "https://picsum.photos/54/54",
        fotoPost: "https://picsum.photos/210/150"
      },
    ],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
    
  }
  adicionarPost =() =>{
    const novoPost ={
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }
    const incrementarFeed = [...this.state.post, novoPost];

    this.setState({post: incrementarFeed})
    console.log(incrementarFeed)

    this.setState({inputNomeUsuario: ""})
    this.setState({inputFotoUsuario: ""})
    this.setState({inputFotoPost: ""})
  }
  
  onChangeInputUser = (event) =>{
    this.setState({inputNomeUsuario: event.target.value});
    console.log(event.target.value)
  }

  onChangeInputPost = (event) =>{
    this.setState({inputFotoPost: event.target.value});
  }

  onChangeInputAvatar = (event) =>{
    this.setState({inputFotoUsuario: event.target.value});
  }

  render() {
    const listaPost = this.state.post.map((post, index) => {
      return (
        <Post key={index}
          nomeUsuario={ post.nomeUsuario }
          fotoUsuario={ post.fotoUsuario }
          fotoPost={ post.fotoPost }
        />
      )
    })

    return (
      <div>
        <MainContainer>{listaPost}</MainContainer>
        <MainContainer>
        <input 
          defaultValue={this.state.inputNomeUsuario}
          onChange={this.onChangeInputUser}
          placeholder={"Nome do Usuário"}
        />
          <input 
          defaultValue={this.state.inputFotoUsuario}
          onChange={this.onChangeInputAvatar}
          placeholder={"Foto de perfil"}
        />
          <input 
          defaultValue={this.state.inputFotoPost}
          onChange={this.onChangeInputPost}
          placeholder={"Foto do Post"}
        />
        <button onClick={this.adicionarPost}>Adicionar Post</button>
        </MainContainer>
      </div>

      // <MainContainer>
      //   <Post
      //     nomeUsuario={'paulinha'}
      //     fotoUsuario={'https://picsum.photos/51/50'}
      //     fotoPost={'https://picsum.photos/175/150'}
      //   />
      //     <Post
      //     nomeUsuario={'joaozinho'}
      //     fotoUsuario={'https://picsum.photos/56/56'}
      //     fotoPost={'https://picsum.photos/180/150'}
      //   />
      //     <Post
      //     nomeUsuario={'clarinha'}
      //     fotoUsuario={'https://picsum.photos/54/54'}
      //     fotoPost={'https://picsum.photos/210/150'}
      //   />
      //   <p>{img1}</p>
      // </MainContainer>
    );
  }
}

export default App;
