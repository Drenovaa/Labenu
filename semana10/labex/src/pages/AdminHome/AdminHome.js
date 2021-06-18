import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import { HomeBack, MainBodyPage, LayoutPage, BodyContainer, ButtonPageBlack} from "../../components/Main/styled";
import {URL} from '../../parameters/URL'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {token} from '../../parameters/auth'
import { CardTrip, CreateTripDiv, DetailsClick, TripDisplay } from "./styled";
import { goToCreateTripPage, goToTripDetailsPage } from "../../routes/coordinator";




const AdminHome = () => {
    useProtectedPage()
    const buttonName = "Usuário"
    const [trips, setTrips] = useState([])
    const history = useHistory()

    useEffect(() =>{
        getTrips()
    },[])

    const getTrips = () =>{
        const token = window.localStorage.getItem("token")
        axios
            .get(URL+"/trips", {
                headers: {
                    auth: token
                }

            })
            .then((res) =>{
                setTrips(res.data.trips)
            })
            .catch((error) =>{
                alert("Algo deu errado", error)
            })
    }

    const deleteTrip =(id) =>{
        if(window.confirm ("Quer pagar esta viagem?")){
            axios
                .delete(URL+"/trips/"+id, {
                    headers: {
                        auth: token
                    }
    
                })
                .then(() => getTrips())
                .catch((error) => alert("Algo deu errado", error))
        }
    }

    const trip = trips.map((trip) =>{
        return(
        <TripDisplay>
            <DetailsClick key={trip.id} onClick={()=> goToTripDetailsPage(history, trip.id)}><h3>{trip.name}</h3></DetailsClick>
            <ButtonPageBlack onClick={()=> deleteTrip(trip.id)}>Remover</ButtonPageBlack>
        </TripDisplay>
        )
    })

    return (
        <HomeBack>
            <LayoutPage>
                <Header buttonName={buttonName}/>
                <MainBodyPage>
                    <BodyContainer>
                        <CreateTripDiv>
                            <ButtonPageBlack onClick={()=> goToCreateTripPage(history)}>Criar viagem</ButtonPageBlack>
                        </CreateTripDiv>
                        <CardTrip>{trip}</CardTrip>
                    </BodyContainer>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}

export default AdminHome