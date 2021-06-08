import React from "react";
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import { HomeBack, MainBodyPage, LayoutPage} from "../../components/Main/styled";
import { useHistory, useParams } from "react-router-dom";


export default function TripDetails() {
    const buttonName = "Usuário"
    return (
        <HomeBack>
            <LayoutPage>
                <Header
                    buttonName={buttonName}
                />
                <MainBodyPage>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}