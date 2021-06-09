import React from "react";
import { ButtonHeader, ButtonLogin, HeaderMain, LogoHeader, LogoImg, NavHeader, NavOption } from "./styled";
import logo1 from './../../img/Capturar_select-area_20210608091410-removebg-preview.png'
import { useHistory } from "react-router-dom";
import { goToAdmPage, goToHomePage, goToUserPage } from "../../routes/coordinator";

export default function Header(props) {
    const history = useHistory()

    const pageSelect = (pageName) =>{
        if(pageName === "Painel Admin"){
            goToAdmPage(history) 
        }else if(pageName === "Usuário"){
            goToUserPage(history)
        }
    }

    const authorization = (action) =>{
        if(action === "Login"){
            history.push("/login")
        }else if(action === "LogOut"){
            localStorage.removeItem('token')
            history.push("/login")
        }
    }

    let nameLogin
    const token = window.localStorage.getItem("token");
    if(token === null){
      nameLogin = "Login"
    }else{
        nameLogin = "LogOut"
    }

    return (
        <HeaderMain>
            <ButtonHeader>
                <ButtonLogin onClick={()=>authorization(nameLogin)}>{nameLogin}</ButtonLogin>
            </ButtonHeader>
            <LogoHeader>
                <LogoImg src={logo1} onClick={()=> goToHomePage(history)}/>
            </LogoHeader>
            <ButtonHeader>
                <ButtonLogin onClick={()=>pageSelect(props.buttonName)}>{props.buttonName}</ButtonLogin>
            </ButtonHeader>
            <NavHeader>
                <NavOption>HOME</NavOption>
                <NavOption>INFOS</NavOption>
                <NavOption>PACOTES</NavOption>
                <NavOption>CONTATO</NavOption>
                <NavOption>SOBRE NÓS</NavOption>
            </NavHeader>
        </HeaderMain>
    )
}