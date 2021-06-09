import React from "react";
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import { HomeBack, MainBodyPage, LayoutPage, BodyContainer, ButtonPage} from "../../components/Main/styled";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToLastPage } from "../../routes/coordinator";
import { DivSelect, InputAddTrip, OptionDisplay, SelectDisplay,PageName } from "./styled";


export default function CreateTrip() {
    useProtectedPage()
    const buttonName = "Usuário"
    const history = useHistory()

    return (
        <HomeBack>
            <LayoutPage>
                <Header
                    buttonName={buttonName}
                />
                <MainBodyPage>
                    <BodyContainer>
                        <PageName>
                            <h1>Criar viagem</h1>
                        </PageName>
                        <DivSelect>
                        <InputAddTrip placeholder="Nome da viagem"/>
                        <InputAddTrip type="date"/>
                        <InputAddTrip placeholder="Descrição da viagem"/>
                        <InputAddTrip type="number" placeholder="Duração em dias da viagem"/>
                            <SelectDisplay>
                                <OptionDisplay>aaa</OptionDisplay>
                                <OptionDisplay>aaa</OptionDisplay>
                                <OptionDisplay>aaa</OptionDisplay>
                            </SelectDisplay>
                        </DivSelect>
                        <ButtonPage onClick={()=> goToLastPage(history)}>Voltar</ButtonPage>
                    </BodyContainer>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}