import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import {URL} from '../../parameters/URL'
import { HomeBack, MainBodyPage, LayoutPage, BodyContainer, ButtonPageGold} from "../../components/Main/styled";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { CardTrip, HeaderUser, NameTrip, TripDisplay, TripText } from "./styled";
import { goToApplicationFormPage } from "../../routes/coordinator";


export default function ListTrips() {
    const buttonName = "Painel Admin"
    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() =>{
        getTrips()
    },[])

    const getTrips = () =>{
        axios
            .get(URL+"/trips")
            .then((res) =>{
                setTrips(res.data.trips)
            })
            .catch((error) =>{
                alert("Algo deu errado", error)
            })
    }

    const trip = trips.map((trip) =>{
        return(
        <CardTrip key={trip.id}>
            <NameTrip>{trip.name}</NameTrip>
            <TripText><strong>Destino: </strong>{trip.planet}</TripText>
            <TripText><strong>Descrição: </strong>{trip.description}</TripText>
            <TripText><strong>Duração: </strong> {trip.durationInDays} dias</TripText>
            <TripText><strong>Dia do lançamento: </strong> {trip.date}</TripText>
        </CardTrip>
        )
    })

    return (
        <HomeBack>
            <LayoutPage>
                <Header buttonName={buttonName}/>
                <MainBodyPage>
                    <BodyContainer>
                            <HeaderUser>
                                <h3>Pronto para dar adeus a sua vida? Quer dizer...Iniciar uma nova vida?</h3>
                                <ButtonPageGold onClick={()=> goToApplicationFormPage(history)}>Inscreva-se</ButtonPageGold>
                            </HeaderUser>
                        <TripDisplay>{trip}</TripDisplay>
                    </BodyContainer>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}