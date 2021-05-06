import React from 'react';
// import './CardGrande.css'
import styled from "styled-components"


const CardPequenoConteiner = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    &:hover{
        transform:scale(1.05)
    }
`
const CardPequenoImagem = styled.img `
    width: 40px;
    margin-right: 10px;
`
function CardPequeno(props) {
    return (
        <CardPequenoConteiner>
            <CardPequenoImagem src={ props.imagem } />
            <p>{ props.descricao }</p>
        </CardPequenoConteiner>
    )
}



// function CardGrande(props) {
//     return (
//         <div className="bigcard-container">
//             <img src={ props.imagem } />
//             <div>
//                 <h4>{ props.nome }</h4>
//                 <p>{ props.descricao }</p>
//             </div>
//         </div>
//     )
// }

export default CardPequeno;