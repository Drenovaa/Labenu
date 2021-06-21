import styled from "styled-components";

export const LoginBody = styled.div`
    display: flex;
    flex-direction: column;
`

export const BackVideo = styled.video`
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: 0;
`
export const LoginContainer = styled.div`
    display: flex;
    width: 100%;
`
export const LoginWelcome = styled.div`
`

export const LabedditText = styled.h1`
    font-size: 56px;
    z-index: 1;
    color: #f98751;
`

export const LogoLogin = styled.img`
    width: 70%;
`
export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30% ;
    margin-left: 0%;
`
export const LoginDisplay = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
`
export const FormUser = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    width: 100%;
    text-align: center;
`