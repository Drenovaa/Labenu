import React from 'react'
import { InputLogin } from './styled';
import { ButtonPage, HomeBack, HomeMain, LogoDiv, LogoImg, LogoName, LogoText, MessageBlock, WelcomeText } from './../../components/Main/styled';
import logo1 from './../../img/Capturar_select-area_20210608091410-removebg-preview.png'

const LoginPage = () => {
    return (
        <HomeBack>
            <HomeMain>
                <LogoDiv>
                    <LogoImg src={logo1}/>
                    <LogoName>LabeX</LogoName>
                    <LogoText>As melhores viagens espaciais</LogoText>
                </LogoDiv>
                <MessageBlock>
                    <WelcomeText>LogIn</WelcomeText>
                    <InputLogin placeholder="email"/>
                    <InputLogin placeholder="senha"/>
                    <ButtonPage>Entrar</ButtonPage>
                </MessageBlock>
            </HomeMain>
        </HomeBack>
    );
  };
  
  export default LoginPage
