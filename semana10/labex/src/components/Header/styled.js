import styled from "styled-components";

export const HeaderMain = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 70% 30%;
    background-color: #212121;
    width: 100%;
    color: white;
`

export const LogoHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
`

export const NavHeader = styled.div`
    display: flex;
    background-color: #393939;
    grid-column: 1/span 3;
    flex-direction: row;
    justify-content: space-around;
`

export const NavOption = styled.div`
    font-family: Ubuntu;
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgba(221, 221, 221, 0.8);
    border-right: 1px solid rgba(221, 221, 221, 0.8);
    :hover{
        background-color: #212121;
        cursor: pointer;
        color: #b08a4b;
        border-left: 1px solid rgba(176, 138, 75, 0.8);
        border-right: 1px solid rgba(176, 138, 75, 0.8);
    }

`
export const ButtonHeader =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonLogin = styled.button`
    font-family: Ubuntu;
    font-size: 18px;
    color: white;
    width: 150px;
    height: 65px;
    background: rgba(33, 33, 33, 0.8);
    border: 1px solid rgba(221, 221, 221, 0.8);
    box-sizing: border-box;
    border-radius: 30px;
    :hover{
        background: rgb(0, 0, 0);
        cursor: pointer;
        color: #b08a4b;
        border: 1px solid rgba(176, 138, 75, 0.8);
    }

`
export const LogoImg = styled.img`
    width: 80px;
    height: 80px;
    :hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`