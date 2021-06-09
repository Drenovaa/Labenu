import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import { HomeBack, MainBodyPage, LayoutPage, BodyContainer, ButtonPage} from "../../components/Main/styled";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { URL } from "../../parameters/URL";
import { token } from "../../parameters/auth";
import { Passengers, TripContainer, TripName, Volunteers,TripInfo, TextInfo, HeaderPage, ButtonBody } from "./styled";
import { goToLastPage } from "../../routes/coordinator";


export default function TripDetails() {
    useProtectedPage()
    const buttonName = "Usuário"
    const history = useHistory()
    const details = useParams()
    const [trip, setTrip] = useState({})

    useEffect(()=>{
        getDetails()
    })

    const getDetails = () =>{
        axios
            .get(URL+"/trip/"+details.id, {
                headers:{
                    auth: token
                }
            })
            .then((res) =>{
                setTrip(res.data.trip)
            })
            .catch((error) =>{
                alert("Algo deu errado", details)
            })
    }

    return (
        <HomeBack>
            <LayoutPage>
                <Header buttonName={buttonName}/>
                <MainBodyPage>
                    <BodyContainer>
                        <HeaderPage>
                            <ButtonBody>
                                <ButtonPage onClick={()=> goToLastPage(history)}>Voltar</ButtonPage>
                            </ButtonBody>
                            <TripName><h1>{trip.name}</h1></TripName>
                        </HeaderPage>
                        <TripContainer>
                            <TripInfo>
                                <TextInfo>Descrição: {trip.description}</TextInfo>
                                <TextInfo>Planeta: {trip.planet}</TextInfo>
                                <TextInfo>Data: {trip.date}</TextInfo>
                                <TextInfo>Duração: {trip.durationInDays} dias</TextInfo>
                            </TripInfo>
                            <Volunteers>

                            </Volunteers>
                            <Passengers>
                    
                            </Passengers>
                        </TripContainer>
                    </BodyContainer>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}