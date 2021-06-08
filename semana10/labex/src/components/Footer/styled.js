import styled from "styled-components";


export const FooterMain = styled.div`
    font-family: Ubuntu;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background-color: #212121;
    width: 100%;
    color: white;
`

export const LogoFooter = styled.img`
    width: 45px;
    height: 45px;
`

export const LogoDivFooter = styled.div`
    grid-row: 3;
`

export const NavFooter = styled.div`
    display: flex;
    justify-content: space-around;
    grid-column: 1/span 5;
    grid-row: 1/span 2;

`
export const MainOption = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;

`

export const FooterLinks = styled.p`
    margin: 1px;
    text-align: center;
    :hover{
        color: #b08a4b;
        cursor: pointer;
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

`
export const MediaContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const MediaLogos = styled.img`
    height: 40px;
    width: 40px;
    filter: invert(97%) sepia(8%) saturate(492%) hue-rotate(210deg) brightness(116%) contrast(73%);
    :hover{
        filter: invert(55%) sepia(34%) saturate(585%) hue-rotate(359deg) brightness(95%) contrast(90%);
        cursor: pointer;
    }
`
