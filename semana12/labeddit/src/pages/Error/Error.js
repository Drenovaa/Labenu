import React from 'react'
import { useHistory } from 'react-router-dom'
import { LabedditText, LoginButton, LoginWelcome, LogoContainer, LogoLogin, MainBody } from '../../components/main/main'
import { goHome, goToLastPage } from '../../routes/coordinator'
import logoB from '../../img/logoB.jpg'
import VideoError, { ErrorDisplay, SelectAction } from './styled'

const ErrorPage = () => {
    const history = useHistory()

    return(
        <MainBody>
            <VideoError/>
            <LoginWelcome>
                <LogoContainer>
                    <LogoLogin src={logoB}/>
                    <LabedditText onClick={ () => goHome(history) }>LABEDDIT</LabedditText>
                </LogoContainer>
            </LoginWelcome>
            <ErrorDisplay>
                <SelectAction>
                    <LoginButton onClick={()=> goToLastPage(history)}>Voltar</LoginButton>
                    <LoginButton onClick={ () => goHome(history) }>Página inicial</LoginButton>
                </SelectAction>
            </ErrorDisplay>
        </MainBody>
    )
}

export default ErrorPage