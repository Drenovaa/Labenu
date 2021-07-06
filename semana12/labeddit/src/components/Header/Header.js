import React from 'react'
import { useHistory } from 'react-router-dom';
import logo from '../../img/logo.png'
import { goHome, goToFeed, goToLogout } from '../../routes/coordinator';
import { ButtonA, ButtonB } from '../main/main';
import {ButtonsHeader, LogoContainer, LogoHeader, MainHeader, NameHeader } from './styled';
import logoT from '../../img/LabedditLogo.png'

const Header = () => {
    const history = useHistory()
    return (
        <MainHeader>
            <LogoContainer >
                <LogoHeader src={logo} onClick={()=> goHome(history)}/>
                <NameHeader src={logoT} onClick={()=> goHome(history)}/>
            </LogoContainer>
            <ButtonsHeader>
                <ButtonA onClick={()=> goToFeed(history)} >Feed</ButtonA>
                <ButtonB onClick={()=> goToLogout(history)}>Logout</ButtonB>
            </ButtonsHeader>
        </MainHeader>
    );
  };
  
  export default Header
