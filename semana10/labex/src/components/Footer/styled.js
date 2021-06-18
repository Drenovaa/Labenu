import styled from "styled-components";


export const FooterMain = styled.div`
    font-family: Ubuntu;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background-color: #212121;
    width: 100%;
    color: white;
    @media screen and (max-device-width: 1057px){
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr
    }
`

export const LogoFooter = styled.img`
    width: 45px;
    height: 45px;
    @media screen and (max-device-width: 1057px){
        display: none;
    }
`

export const LogoDivFooter = styled.div`
    grid-row: 3;
    @media screen and (max-device-width: 1057px){
        display: none;
    }
`

export const NavFooter = styled.div`
    display: flex;
    justify-content: space-around;
    grid-column: 1/span 5;
    grid-row: 1/span 2;
    @media screen and (max-device-width: 1057px){
        display: grid;
        width: 100%;
    }

`
export const MainOption = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    @media screen and (max-device-width: 1057px){
        display: grid;
        grid-column: 1;
        grid-row: 1;
        width: 100%;
        height: 100%;
        align-items: center;
    }

`

export const FooterLinks = styled.p`
    margin: 1px;
    text-align: center;
    :hover{
        color: #b08a4b;
        cursor: pointer;
    }
    @media screen and (max-device-width: 1057px){
        display: none;
    }
    
`

export const OptionLink = styled.h4`
    margin-top: 10px;
    margin-bottom: 2px;
    border-bottom: 1px solid rgba(221, 221, 221, 0.8);
    :hover{
        border-bottom: 1px solid rgba(176, 138, 75, 0.8);
        cursor: default;
    }
    @media screen and (max-device-width: 1057px){
        display: none;
    }

`
export const MediaContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media screen and (max-device-width: 1057px){
        display: flex;
        width: 100%;
    }
`

export const MediaLogos = styled.img`
    height: 40px;
    width: 40px;
    filter: invert(97%) sepia(8%) saturate(492%) hue-rotate(210deg) brightness(116%) contrast(73%);
    :hover{
        filter: invert(55%) sepia(34%) saturate(585%) hue-rotate(359deg) brightness(95%) contrast(90%);
        cursor: pointer;
    }
    @media screen and (max-device-width: 1057px){
        margin: 10px;
    }

`
export const LinkA = styled.a`
    text-decoration: none;
    :visited{
        color:white;
    }
    :link{
        color:white;
    }
    @media screen and (max-device-width: 1057px){
        display: none;
    }

`