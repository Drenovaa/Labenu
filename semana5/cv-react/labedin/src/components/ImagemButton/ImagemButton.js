import React from 'react';
// import './ImagemButton.css'
import styled from 'styled-components'

const ConteinerBotao = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    &:hover{
        transform:scale(1.05);
        background-color: rgba(170, 170, 170, 0.50);
    }
`
const ConteinerImagem = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ConteinerBotao>
            <ConteinerImagem src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ConteinerBotao>
    )
}



// function ImagemButton(props) {
//     return (
//         <div className="image-button-container">
//             <img src={ props.imagem }/>
//             <p>{ props.texto }</p>
//         </div>
//     )
// }


export default ImagemButton;