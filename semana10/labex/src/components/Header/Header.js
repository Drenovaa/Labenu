import React from "react";
import { ButtonHeader, ButtonLogin, HeaderMain, LogoHeader, NavHeader, NavOption } from "./styled";

export default function Header() {
    return (
        <HeaderMain>
            <LogoHeader>LOGO</LogoHeader>
            <ButtonHeader>
                <ButtonLogin>Painel Admin</ButtonLogin>
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