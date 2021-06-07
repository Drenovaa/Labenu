import React from 'react'
import { ButtonPage, HomeBack, HomeMain, MessageBlock, WelcomeText } from './../Home/styled';
import { InputLogin } from './styled';

const LoginPage = () => {
    return (
        <HomeBack>
            <HomeMain>
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
