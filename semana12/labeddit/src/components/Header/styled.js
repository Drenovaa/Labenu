import styled from "styled-components";

export const MainHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgb(80,80,80);
    background: linear-gradient(to bottom, #000 37%, #27003d 180%);
    :hover{
        box-shadow: 0 0 .2rem #cf0299,
              0 0 .6rem #cf0299;
        transition: box-shadow 300ms;
    }
`
export const LogoContainer = styled.div`
    color: #f98751;
    display: flex;
    align-items: center;
    flex: 5;
    
`

export const LogoHeader = styled.img`
    width: 5%;
    min-width: 70px;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-device-width: 404px){
        display: none;
    }
`
export const ButtonsHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1;

`

export const NameHeader = styled.img`
    width: 200px;
    max-width: 200px;
`

