import React from 'react'
import logo from '../../img/logo.png'
import { ButtonA, ButtonB } from '../main/main';
import {ButtonsHeader, LogoContainer, LogoHeader, MainHeader } from './styled';

const Header = () => {
    return (
        <MainHeader>
            <LogoContainer>
                <LogoHeader src={logo}/>
                <h1>labeddit</h1>
            </LogoContainer>
            <ButtonsHeader>
                <ButtonA>Home</ButtonA>
                <ButtonB>Logout</ButtonB>
            </ButtonsHeader>
        </MainHeader>
    );
  };
  
  export default Header
