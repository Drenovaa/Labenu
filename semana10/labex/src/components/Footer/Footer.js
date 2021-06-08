import React from "react";
import { FooterMain, LogoDivFooter, LogoFooter, NavFooter, MainOption, FooterLinks, OptionLink, MediaContainer, MediaLogos } from "./styled";
import logo1 from './../../img/Capturar_select-area_20210608091410-removebg-preview.png'
import { useHistory } from "react-router-dom";
import { goToAdmPage, goToHomePage, goToUserPage } from "../../routes/coordinator";
import gitLogo from './../../img/git.png'
import instaLogo from './../../img/instagram.png'
import linkLogo from './../../img/linkedin.png'
import twitterLogo from './../../img/twitter.png'



export default function Footer() {
        const history = useHistory()
    return (
        <FooterMain>
            <LogoDivFooter>
                <LogoFooter src={logo1}/>
            </LogoDivFooter>
            <NavFooter>
                <MainOption>
                    <OptionLink>Paginas</OptionLink>
                    <FooterLinks onClick={()=> goToHomePage(history)}>Home</FooterLinks>
                    <FooterLinks onClick={()=> goToUserPage(history)}>Usuário</FooterLinks>
                    <FooterLinks onClick={()=> goToAdmPage(history)}>Administrador</FooterLinks>
                </MainOption>
                <MainOption>
                    <OptionLink>Informações</OptionLink>
                </MainOption>
                <MainOption>
                    <OptionLink>Institucional</OptionLink>
                </MainOption>
                <MainOption>
                    <OptionLink>Contato</OptionLink>
                </MainOption>
                <MainOption>
                    <OptionLink>Social</OptionLink>
                    <MediaContainer>
                        <MediaLogos src={gitLogo}/>
                        <MediaLogos src={instaLogo}/>
                        <MediaLogos src={linkLogo}/>
                        <MediaLogos src={twitterLogo}/>
                    </MediaContainer>
                </MainOption>
            </NavFooter>
        </FooterMain>
    )
}

