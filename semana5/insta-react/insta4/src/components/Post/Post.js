import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import marcado from '../../img/turned_in_black_24dp.svg'
import desmarcado from '../../img/turned_in_not_black_24dp.svg'
import iconeCompartilhar from '../../img/share_black_24dp.svg'
import {SecaoCompartilhar} from '../../components/SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    comentario: "",
    marcado: false,
    compartilhado: false,
  }

  onClickCurtida = () => {
    if(this.state.curtido === false) {
    this.setState({
      curtido: true,
      numeroCurtidas: (this.state.numeroCurtidas + 1)
    })
    }else if(this.state.curtido === true){
    this.setState({
      curtido: false,
      numeroCurtidas: (this.state.numeroCurtidas - 1)
    })
  }
}
  onClickMarcado = () => {
    if(this.state.marcado === false) {
    this.setState({
      marcado: true,
    })
    }else if(this.state.marcado === true){
    this.setState({
      marcado: false,
    })
  }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  
  comentarioConsole = (event)=>{
    console.log(this.state.comentario)
  }


  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentario: this.state.comentario
    })
  }

  onClickCompartilhar = ()=>{
    this.setState({
      compartilhado: !this.state.compartilhado
    })
  }


  render() {
    let iconeCurtida
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcado
    if(this.state.marcado) {
      iconeMarcado = marcado
    } else {
      iconeMarcado = desmarcado
    }

    let componenteCompartilhado
    if(this.state.compartilhado) {
      componenteCompartilhado = <SecaoCompartilhar aoEnviar={this.onClickCompartilhar}/>
    }
    let componenteComentario
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
          <IconeComContador
          icone={iconeMarcado}
          onClickIcone={this.onClickMarcado}
        />
          <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhado}
    </PostContainer>
  }
}

export default Post