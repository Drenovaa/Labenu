import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToHomePage } from '../../routes/coordinator'
import { ButtonPage, HomeBack, MessageBlock,} from './../../components/Main/styled';
import { ErrorDiv, ErrorMain, ErrorText } from './styled';



const ErrorPage = () => {
    const history = useHistory()

    return(
        <HomeBack>
            <ErrorMain>
                <ErrorDiv>
                    <ErrorText>Pagina não encontrada</ErrorText>
                </ErrorDiv>
                <MessageBlock>
                        <ButtonPage onClick={ () => goToHomePage(history) }>Página inicial</ButtonPage>
                    </MessageBlock>
            </ErrorMain>
        </HomeBack>
    )
}

export default ErrorPage