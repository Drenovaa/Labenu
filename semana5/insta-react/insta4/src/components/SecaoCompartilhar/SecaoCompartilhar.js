import React, {Component} from 'react'
import styled from 'styled-components'
import iconeTwitter from '../../img/twitter.png'
import iconeFacebook from '../../img/face.png'
import iconeInstagram from '../../img/insta.png'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    padding: 5px;
`
const LogosRedes = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 5px;
`
const IconImage = styled.img`
	max-width: 50px;
	&:hover{
		opacity: 50%;
	}
`
const TextoSimples = styled.p`
	text-align:center;
`

const InputComentario = styled.input`
	display: flex;
	align-items: center;
	text-align: center;
    width: 90%;
	margin: auto;
`
let msgShare = ""

function tweet(event) {
	if(msgShare !== ""){
		console.log(`Foto compartilhada por Tweeter, com a mensagem: ${msgShare}`)
	}else{
		console.log(`Foto compartilhada por Tweeter sem mensagem`)
	}
	
}
function pageFace(event) {
	if(msgShare !== ""){
		console.log(`Foto compartilhada por Facebook, com a mensagem: ${msgShare}`)
	}else{
		console.log(`Foto compartilhada por Facebook sem mensagem`)
	}
}
function instaPost(event) {
	if(msgShare !== ""){
		console.log(`Foto compartilhada por Instagram, com a mensagem: ${msgShare}`)
	}else{
		console.log(`Foto compartilhada por Instagram sem mensagem`)
	}
}


export class SecaoCompartilhar extends Component {
	state = {
		valor:""
	}

	onChangeCompartilhamento=(event)=> {
		msgShare = event.target.value
	}


	render() {
		return <CommentContainer>
			<TextoSimples>Selecione a rede para compartilhar</TextoSimples>
			<LogosRedes>
				<IconImage alt={'Icone'} src={iconeTwitter} onClick={tweet}/>
				<IconImage alt={'Icone'} src={iconeFacebook} onClick={pageFace}/>
				<IconImage alt={'Icone'} src={iconeInstagram} onClick={instaPost}/>
			</LogosRedes>
				<InputComentario
					placeholder={'Digite a mensagem para ser compartilhada'}
					value={this.state.comentario}
					onChange={this.onChangeCompartilhamento}
				/>
		</CommentContainer>
	}
}
