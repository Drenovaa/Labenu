import React from 'react'
import logoB from '../../img/logoB.jpg'
import { useHistory } from 'react-router-dom';
import BackgroundVideo from '../../components/BackGroundVideo/BackgroundVideo';
import { LoginButton, LoginWelcome, LogoContainer, LogoLogin, LogoName, MainBody } from '../../components/main/main';
import { MainDisplay, SelectPage } from './styled';
import { goToLogin, goToSignUp } from '../../routes/coordinator';
import logoT from '../../img/LabedditLogo.png'


export function MainPage (){
    const history = useHistory()  
    return (
        <MainBody>
            <BackgroundVideo/>
            <LoginWelcome>
                <LogoContainer>
                    <LogoLogin src={logoB}/>
                    <LogoName src={logoT}/>
                </LogoContainer>
            </LoginWelcome>
            <MainDisplay>
                <SelectPage>
                    <LoginButton onClick={()=> goToLogin(history)}>Sou usuario</LoginButton>
                    <LoginButton onClick={()=> goToSignUp(history)}>Cadastrar</LoginButton>
                </SelectPage>
            </MainDisplay>
        </MainBody>
    );
  };
  
  export default MainPage
