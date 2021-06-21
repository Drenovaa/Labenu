import React from 'react'
import backgroundVideo from './../../img/LoginBack.mp4'
import { BackVideo, FormUser, LabedditText, LoginBody, LoginContainer, LoginDisplay, LoginWelcome, LogoContainer, LogoLogin } from './styled';
import logoB from '../../img/logoB.jpg'
import { InputA } from '../../components/main/main';


export function Login (){
    return (
        <LoginBody>
            <BackVideo autoPlay loop muted>
                <source src={backgroundVideo} />
            </BackVideo>
            <LoginWelcome>
                <LogoContainer>
                    <LogoLogin src={logoB}/>
                    <LabedditText>LABEDDIT</LabedditText>
                </LogoContainer>
            </LoginWelcome>
            <LoginDisplay>
                <h1>Login</h1>
                <FormUser>
                    <label>Usuário</label>
                    <InputA placeholder="nome@email.com"/>
                    <label>Senha</label>
                    <InputA/>
                </FormUser>
            </LoginDisplay>
        </LoginBody>
    );
  };
  
  export default Login
