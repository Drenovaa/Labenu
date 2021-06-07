import React from 'react'
import { ButtonPage, HomeBack, HomeMain, MessageBlock, SelectPage, WelcomeText } from './styled';

const Home = () => {
    return (
        <HomeBack>
            <HomeMain>
                <MessageBlock>
                    <WelcomeText>Bem-vindo</WelcomeText>
                    <SelectPage>
                        <ButtonPage>Administrador</ButtonPage>
                        <ButtonPage>Ver viagens</ButtonPage>
                    </SelectPage>
                </MessageBlock>
            </HomeMain>
        </HomeBack>
    );
  };
  
  export default Home
