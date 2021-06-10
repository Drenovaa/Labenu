import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToHomePage, goToLastPage } from '../../routes/coordinator'
import { ButtonPageBlack, HomeBack,} from './../../components/Main/styled';
import { ErrorDiv, ErrorMain, ErrorText, ErrorButtons } from './styled';



const ErrorPage = () => {
    const history = useHistory()

    return(
        <HomeBack>
            <ErrorMain>
                <ErrorDiv>
                    <ErrorText>Pagina não encontrada</ErrorText>
                </ErrorDiv>
                <ErrorButtons>
                    <ButtonPageBlack onClick={()=> goToLastPage(history)}>Voltar</ButtonPageBlack>
                    <ButtonPageBlack onClick={ () => goToHomePage(history) }>Página inicial</ButtonPageBlack>
                </ErrorButtons>
            </ErrorMain>
        </HomeBack>
    )
}

export default ErrorPage