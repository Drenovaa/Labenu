import styled from "styled-components";
import img1 from './../../img/spacex-rocket-launch-base-space-center-launching-trail-arc-s.jpg'

// Base Background page//
export const HomeMain = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url(${img1});
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.3;

    }
`
export const HomeBack = styled.div`
    background: #181818;
    height: 100vh;
    width: 100vw;
    font-family: Ubuntu;
`
//--------------------------------------//

//Welcome page msg and login//
export const MessageBlock = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30vw;
    height: 40vh;
    left: 60%;
    top: 50%;
`

export const WelcomeText = styled.h2`
    color: white;
`
export const SelectPage = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

`
export const LogoImg = styled.img`
    height: 150px;
    width: 150px;
`
export const LogoDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 40vh;
    left: 0;
    top: 0;
    color: #b08a4b;
`
export const LogoName = styled.h2`
    margin-bottom: 0;
`

export const LogoText = styled.p`
    margin: 0;
`

//--------------------------------------//


//User and admin page setup//
export const MainBodyPage = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    color: white;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url(${img1});
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.3;

    }
`
export const LayoutPage = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 13% 72% 15%;
`
export const BodyContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #393939;
    }
    ::-webkit-scrollbar{
        width: 15px;
        background-color: #393939;
    }
    ::-webkit-scrollbar-thumb{
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #212121;
        :hover{
            background-color: #000;;
        }
    }

`
//--------------------------------------//

//Buttonstyled//
export const ButtonPageBlack = styled.button`
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

export const ButtonPageGold = styled.button`
    font-family: Ubuntu;
    font-size: 18px;
    color: white;
    width: 150px;
    height: 65px;
    background: rgba(176, 138, 75, 0.8);
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
//--------------------------------------//

//Inputstyled//
export const InputDisplay = styled.input`
    font-family: Ubuntu;
    margin-top: 10px;
    outline: none;
    font-size: 18px;
    text-align: center;
    color: white;
    width: 100%;
    height: 65px;
    background: rgba(33, 33, 33, 0.8);
    border: 1px solid rgba(221, 221, 221, 0.8);
    box-sizing: border-box;
    border-radius: 30px;
`
//--------------------------------------//

//SelectOptions//
export const SelectDisplay = styled.select`
    margin-top: 20px;
    font-family: Ubuntu;
    outline: none;
    font-size: 18px;
    color: white;
    width: 100%;
    height: 65px;
    background: rgba(33, 33, 33, 0.8);
    border: 1px solid rgba(221, 221, 221, 0.8);
    box-sizing: border-box;
    border-radius: 10px;
    text-align-last:center;

`

export const OptionDisplay = styled.option`
    background-color: rgba(33, 33, 33, 0.8);
    text-align: center;
    :active, :hover{
        background-color: #b08a4b;
    }
`
//--------------------------------------//

//HeaderPageAdm//
export const HeaderPage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    
`
//--------------------------------------//