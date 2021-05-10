import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`


export class SecaoComentario extends Component {

	state = {
		comentarios: [""],
		comentarioInput: ""
	}

	adicionaComentario = () =>{
		const novoComentario = this.state.comentarioInput;
		this.setState({
			comentarios: [novoComentario, ...this.state.comentarios]});
	}

	onChangeComentario=(event)=> {
		this.setState({comentarioInput: event.target.value});
		
	}

	render() {
		const listaDeComentarios = this.state.comentarios.map((comments,index)=>{
			return (<p>{comments}</p>)
		});
		return (
		<div>
			<CommentContainer>
				<InputComentario
					key={this.state.comentario}
					placeholder={'Comentário'}
					value={this.state.comentario}
					onChange={this.onChangeComentario}
				/>	
				<button onClick={this.adicionaComentario}>Enviar</button>
			</CommentContainer>
			{listaDeComentarios}
		</div>
		)
	}
}
