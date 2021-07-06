import React, { useEffect } from 'react'
import logoB from '../../img/logoB.jpg'
import { InputA, LoginButton, LoginWelcome, LogoContainer, LogoLogin, LogoName, MainBody } from '../../components/main/main';
import { useHistory } from 'react-router-dom';
import { goHome } from '../../routes/coordinator';
import BackgroundVideo from '../../components/BackGroundVideo/BackgroundVideo';
import {SelectPage} from './styled'
import { SingUpDisplay } from './styled';
import { FormRegister } from './styled';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { URL } from '../../parameters/URL';
import logoT from '../../img/LabedditLogo.png'

const initialForm = {email: "", password:"", username:""}

export function SingUp (){
    const history = useHistory()
    const [form, handleValue, resetForm] = useForm(initialForm)

    useEffect(() =>{
        if(localStorage.getItem('token')){
            history.push('/posts')
            alert("Você já está cadastrado, efetue o Logout para poder criar um novo cadastro")
        }
    })

    const signup = (event) =>{
        event.preventDefault()
            const body = {
                username: form.username,
                email: form.email,
                password: form.password
            }
        axios
            .post(URL+"/users/signup", body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                history.push('/posts')
                resetForm()
            })
            .catch((err) =>{
                if(err.response.data.errors){
                    const error = err.response.data.errors.map((warning)=>{
                        return warning
                    })
                    alert(`${err.response.data.message} ${Object.keys(error[0])} ${Object.values(error[0])}`)
                }else{
                    alert(err.response.data)
                }
            })
    }

    return (
        <MainBody>
            <BackgroundVideo/>
            <LoginWelcome>
                <LogoContainer onClick={()=> goHome(history)}>
                    <LogoLogin src={logoB}/>
                    <LogoName src={logoT}/>
                </LogoContainer>
            </LoginWelcome>
            <SingUpDisplay>
                <FormRegister onSubmit={signup}>
                    <label>Usuário</label>
                    <InputA
                        name="username"
                        type="text"
                        onChange={handleValue}
                        value={form.username}
                        placeholder="Nome de usuário"
                    />
                    <label>Email</label>
                    <InputA
                        name="email"
                        onChange={handleValue}
                        value={form.email}
                        type="email"
                        placeholder="exemplo@email.com"
                    />
                    <label>Senha</label>
                    <InputA
                        name="password"
                        onChange={handleValue}
                        value={form.password}
                        type="password"
                        placeholder="Senha de 8 caracteres"
                    />
                    <SelectPage>
                        <LoginButton onClick={()=> goHome(history)}>Voltar</LoginButton>
                        <LoginButton>Cadastrar</LoginButton>
                    </SelectPage>
                </FormRegister>
            </SingUpDisplay>
        </MainBody>
    );
  };

  export default SingUp
