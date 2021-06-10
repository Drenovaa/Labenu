import React from "react";
import { ButtonHeader, ButtonLogin, HeaderMain, LogoHeader, LogoImg, NavHeader, NavOption } from "./styled";
import logo1 from './../../img/Capturar_select-area_20210608091410-removebg-preview.png'
import { useHistory } from "react-router-dom";
import { goToAdmPage, goToHomePage, goToUserPage } from "../../routes/coordinator";
import { ButtonPageBlack } from "../Main/styled";

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
                <ButtonPageBlack onClick={()=>authorization(nameLogin)}>{nameLogin}</ButtonPageBlack>
            </ButtonHeader>
            <LogoHeader>
                <LogoImg src={logo1} onClick={()=> goToHomePage(history)}/>
            </LogoHeader>
            <ButtonHeader>
                <ButtonPageBlack onClick={()=>pageSelect(props.buttonName)}>{props.buttonName}</ButtonPageBlack>
            </ButtonHeader>
            <NavHeader>
                <NavOption onClick={()=>history.push("/")}>HOME</NavOption>
                <NavOption onClick={()=>history.push("/404")}>INFOS</NavOption>
                <NavOption onClick={()=>history.push("/404")}>PACOTES</NavOption>
                <NavOption onClick={()=>history.push("/404")}>CONTATO</NavOption>
                <NavOption onClick={()=>history.push("/404")}>SOBRE NÓS</NavOption>
            </NavHeader>
        </HeaderMain>
    )
}