import styled from "styled-components";
import img1 from './../../img/spacex-rocket-launch-base-space-center-launching-trail-arc-s.jpg'

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
`

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
    font-family: Ubuntu;
`
export const SelectPage = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

`

export const ButtonPage = styled.button`
    font-family: Ubuntu;
    font-size: 18px;
    color: white;
    width: 200px;
    height: 65px;
    background: rgba(33, 33, 33, 0.8);
    border: 1px solid rgba(221, 221, 221, 0.8);
    box-sizing: border-box;
    border-radius: 30px;
    :hover{
        background: rgb(0, 0, 0);
        cursor: pointer;
    }

`