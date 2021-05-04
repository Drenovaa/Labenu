import React from 'react';
// import './CardGrande.css'
import styled from "styled-components"


const CardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    &:hover{
        transform:scale(1.05)
    }
`
const CardImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const CardH4 = styled.h4`
    margin-bottom: 15px;
`  

const CardContainerExp = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <CardContainer>
            <CardImagem src={ props.imagem } />
            <CardContainerExp>
                <CardH4>{ props.nome }</CardH4>
                <p>{ props.descricao }</p>
            </CardContainerExp>
        </CardContainer>
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

export default CardGrande;