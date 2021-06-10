import React, { useEffect } from 'react'
import {useForm} from './../../hooks/useForm'
import { InputDisplay, HomeBack, HomeMain, LogoDiv, LogoImg, LogoName, LogoText, MessageBlock, WelcomeText, SelectPage, ButtonPageBlack, ButtonPageGold } from './../../components/Main/styled';
import logo1 from './../../img/Capturar_select-area_20210608091410-removebg-preview.png'
import { useHistory } from 'react-router';
import axios from 'axios';
import { URL } from '../../parameters/URL';
import { goToHomePage } from '../../routes/coordinator';
import { SelectLoginPage } from './styled';


const initialForm = {email: "", password: "",};

const LoginPage = () => {

    const [form, handleValue, resetForm] = useForm(initialForm);
    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem('token')) {
            history.push('/admin/trips/list')
        }
    })

    const Login = (e) =>{
        e.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }

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
                    <form onSubmit={Login}>
                        <InputDisplay
                        name="email"
                        type="email" 
                        placeholder="email" 
                        value={form.email} 
                        onChange={handleValue}
                        />
                        <InputDisplay 
                        name="password"
                        type="password" 
                        placeholder="senha" 
                        value={form.password} 
                        onChange={handleValue}
                        />
                        <SelectLoginPage>
                            <ButtonPageGold>Entrar</ButtonPageGold>
                        </SelectLoginPage>
                    </form>
                    <SelectLoginPage>
                        <ButtonPageBlack onClick={()=> goToHomePage(history)}>Voltar</ButtonPageBlack>
                    </SelectLoginPage>
                </MessageBlock>
            </HomeMain>
        </HomeBack>
    );
  };
  
  export default LoginPage
