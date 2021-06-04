import React, {useEffect, useState} from "react";
import { ButtonHeader, HeaderSpace, HearderMain, LogoAstro, LogoMain, MatchIcon } from "./styled";
import logo from '../../img/logo.png'
import matches from '../../img/matches.png'


export default function Header (props){

    return (
        <HearderMain>
          <LogoMain>
            <LogoAstro src={logo}/>
          </LogoMain>
            <HeaderSpace>
              <ButtonHeader 
                onClick={props.changePage}
              >
                <MatchIcon src={matches}/>
              </ButtonHeader>
            </HeaderSpace>
        </HearderMain>
      );
}