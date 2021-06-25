import styled from "styled-components";

export const ButtonA = styled.button`
  min-height: 30%;
  height: 4vh;
  font-size: 18px;
  color: #cf0299;
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(207, 2, 153, 0.8);
  box-sizing: border-box;
  border-radius: 30px;
  :hover {
    cursor: pointer;
    color: #000;
    background-color: #cf0299;
    border: 1px solid #000;
    box-shadow: 0 0 0.2rem #fff,
                0 0 0.2rem #fff,
                0 0 1.7rem #cf0299,
                0 0 0.8rem #cf0299, 
                0 0 1.5rem #cf0299, 
                0 0 1rem #cf0299;
    transition: box-shadow 300ms;
  }
`
export const ButtonB = styled.button`
  min-height: 30%;
  height: 4vh;
  font-size: 18px;
  color: #000;
  background: #cf0299;
  border: 1px solid rgba(20, 20, 20, 0.8);
  box-sizing: border-box;
  border-radius: 30px;
  :hover {
    cursor: pointer;
    background-color: #cf0299;
    color: #000;
    border: 1px solid #000;
    box-shadow: 0 0 0.2rem #fff, 
                0 0 0.2rem #fff, 
                0 0 1.7rem #cf0299,
                0 0 0.8rem #cf0299, 
                0 0 1.5rem #cf0299, 
                0 0 1rem #cf0299;
    transition: box-shadow 300ms;
  }
`
export const ButtonC = styled.button`
  min-height: 30%;
  height: 4vh;
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
`

export const InputA = styled.input`
  width: 20%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  background-color: #000;
  color: #fff;
  outline: none;
  border: 1px solid #cf0299;
  :focus {
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 1.7rem #cf0299,
      0 0 0.8rem #cf0299, 0 0 1.5rem #7900bf, 0 0 1rem #7900bf;
  }
  @media screen and (max-device-width: 500px){
    width: 75%;
  }
`

export const LoginButton = styled.button`
  --clr-neon: #cf0299;
  --clr-bg: #cf0299;
  background-color: #000;
  font-size: 2rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-neon);
  border: var(--clr-neon) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);
  position: relative;

  ::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: var(--clr-neon);
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em var(--clr-neon);
    opacity: 0;
    background-color: var(--clr-neon);
    z-index: -1;
    transition: opacity 100ms linear;
  }

  :hover,
  :focus {
    color: var(--clr-bg);
    text-shadow: none;
  }

  :hover::before,
  :focus::before {
    opacity: 1;
  }
  :hover::after,
  :focus::after {
    opacity: 1;
  }
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

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  
`
export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  

`
export const LoginWelcome = styled.div`
  display: flex;
  width: 100%;
  max-height: 500px;
  @media screen and (max-device-width: 700px){
    justify-content: center;
}

`

export const LabedditText = styled.h1`
  position: relative;
  font-size: 56px;
  color: #f98751;
`

export const LogoLogin = styled.img`
  max-width: 300px;
  @media screen and (max-device-width: 500px){
    max-width: ${props => props.login ? `none`: `200px`};
    display: ${props => props.login ? `none`: `block`};
  }
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-device-width: 700px){
    justify-content: center;
}

`

export const LogoName = styled.img`
  max-width: 400px;
  margin-left: 10px;
  @media screen and (max-device-width: 700px){
    max-width: 300px;
}
`
