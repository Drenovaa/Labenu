import styled from "styled-components";
import logo from '../../img/logo.png'



export const HearderMain = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items:center;
    border-bottom: 1px solid darkgray;
    max-height: 75px;
`

export const LogoAstro = styled.img`
    max-width: 300px;
    max-height: 75px;
`
export const LogoMain = styled.div`
    grid-column: 1/span 2;
    display: flex;
    justify-content: center;
`

export const ButtonHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    :hover{
        cursor: pointer;
    }
    
`
export const HeaderSpace = styled.div`
    grid-column: 4/span 1;
`

export const MatchIcon = styled.img`
    max-height: 30px;
    margin-right: 10px;
    :hover{
        transform: scale(1.05);
    }
`