import styled from "styled-components"
import img1 from './../../img/error.jpg'

export const ErrorMain = styled.div`
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
export const ErrorDiv = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
margin-top: 50px;

`
export const ErrorText = styled.h2`
color: #b08a4b;
font-family: Ubuntu;
`