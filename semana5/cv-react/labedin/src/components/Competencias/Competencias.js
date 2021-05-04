import React from 'react';
import styled from "styled-components"
// import './Competencias.css'

const CompetenciasConteiner = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 350px;
    padding: 15px 30px;
    margin: 10px auto;
    &:hover{
        transform:scale(1.05);
        color:red;
        background-color: rgba(170, 170, 170, 0.50);
    }
`;

const CompetenciasConteinerImg = styled.img`
    width: 30px;
    margin-right: 10px;
`


function Competencias(props) {
    return (
        <CompetenciasConteiner>
            <CompetenciasConteinerImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </CompetenciasConteiner>

    )
}

// function Competencias(props) {
//     return (
//         <div className="competencias-container">
//             <img src={ props.imagem }/>
//             <p>{ props.texto }</p>
//         </div>

//     )
// }

export default Competencias;