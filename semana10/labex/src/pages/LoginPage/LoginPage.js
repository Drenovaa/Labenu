import React, { useEffect } from 'react'
import useInput from './../../hooks/useInput'
import { InputDisplay, ButtonPage, HomeBack, HomeMain, LogoDiv, LogoImg, LogoName, LogoText, MessageBlock, WelcomeText, SelectPage } from './../../components/Main/styled';
import logo1 from './../../img/Capturar_select-area_20210608091410-removebg-preview.png'
import { useHistory } from 'react-router';
import axios from 'axios';
import { URL } from '../../parameters/URL';
import { goToHomePage } from '../../routes/coordinator';

const LoginPage = () => {

    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")
    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem('token')) {
            history.push('/admin/trips/list')
        }
    })


    const Login = () =>{
        const body = {email, password}

        axios
            .post(URL+"/login", body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                history.push("/admin/trips/list")
            })
            .catch((error) => alert(error.response.data.message))
    }

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
                    <InputDisplay type="text" placeholder="email" value={email} onChange={handleEmail}/>
                    <InputDisplay type="password" placeholder="senha" value={password} onChange={handlePassword}/>
                    <SelectPage>
                        <ButtonPage onClick={()=> goToHomePage(history)}>Voltar</ButtonPage>
                        <ButtonPage onClick={Login}>Entrar</ButtonPage>
                    </SelectPage>
                </MessageBlock>
            </HomeMain>
        </HomeBack>
    );
  };
  
  export default LoginPage
