import styled from "styled-components";

export const MainHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgb(80,80,80);
    box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #7900bf,
              0 0 0.8rem #7900bf,
              0 0 2.8rem #7900bf,
              0 0 1.3rem #7900bf;
    background-color: #202020;
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
`
export const ButtonsHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1;

`


/*
#f98751 - borda
#7900bf - capa1
#cf0299 - capa2
#000 - noice



*/