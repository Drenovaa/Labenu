import styled from "styled-components";
import syn from './../../img/Labedditbody.png'

export const BodyHome = styled.div`
    display: flex;
    flex-direction: column;
`

export const HomeDisplay =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-bottom: 30px;
    .myBtn {
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        height: 5vh;
        width: 5vw;
        font-size: 16px;
        color: #000;
        background: #cf0299;
        border: 1px solid rgba(20, 20, 20, 0.8);
        box-sizing: border-box;
        border-radius: 10px;
        :hover {
            cursor: pointer;
            background-color: #cf0299;
            color: #000;
            border: 1px solid #000;
            box-shadow: 0 0 0.2rem #fff, 0 0 1rem #cf0299;
            transition: box-shadow 100ms;
        }
    }
    @media screen and (max-device-width: 700px){
        .myBtn {
            right: 10px;
            width: 10vw;
        }
    }
`
export const BackgroundDisplay = styled.div`
    position: relative;
    &::before{
        min-height: 100%;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url(${syn});
        background-repeat: repeat;
        background-size: contain;
        opacity: 0.1;
    }
`

