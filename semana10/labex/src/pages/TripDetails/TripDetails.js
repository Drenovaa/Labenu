import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import { HomeBack, MainBodyPage, LayoutPage, BodyContainer,HeaderPage, ButtonPageBlack, ButtonPageGold} from "../../components/Main/styled";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { URL } from "../../parameters/URL";
import { token } from "../../parameters/auth";
import { Passengers,HeaderBox, TripContainer, TripName, Volunteers,TripInfo, TextInfo, ButtonBody, CandidatesDiv, ApproveDiv, InfoBox } from "./styled";
import { goToLastPage } from "../../routes/coordinator";


export default function TripDetails() {
    useProtectedPage()
    const buttonName = "Usuário"
    const history = useHistory()
    const details = useParams()
    const [trip, setTrip] = useState([])
    const [candidates, setCandidates] = useState([])

    useEffect(()=>{
        getDetails()
    },[])

    const getDetails = () =>{
        axios
            .get(URL+"/trip/"+details.id, {
                headers:{
                    auth: token
                }
            })
            .then((res) =>{
                setCandidates(res.data.trip.candidates)
                setTrip(res.data.trip)
            })
            .catch((error) =>{
                alert("Algo deu errado", details)
            })
    }

    const selectCandidate = (approval, id) =>{
        const body = {
            approve: approval
        }
        axios
            .put(URL+"/trips/"+details.id+"/candidates/"+id+"/decide", body, {
                headers:{
                    auth: token
                }
            })
            .then((res) =>{
                alert("Candidato aprovado")
                getDetails()

            })
            .catch((err) =>{
                alert("Eita, deu ruim!")
            })
    }

    const personalDetails = candidates.map((candidate) =>{
        return (                            
            <CandidatesDiv>
                <TextInfo>Candidato: {candidate.name}</TextInfo>
                <TextInfo>Idade: {candidate.age}</TextInfo>
                <TextInfo>Profissão: {candidate.profession}</TextInfo>
                <TextInfo>Pais de origem: {candidate.country} </TextInfo>
                <TextInfo>Aplicação: {candidate.applicationText} dias</TextInfo>
                <ApproveDiv>
                    <ButtonPageBlack onClick={()=> selectCandidate(false, candidate.id)}>Recusar</ButtonPageBlack>
                    <ButtonPageGold onClick={()=> selectCandidate(true, candidate.id)}>Aprovar</ButtonPageGold>
                </ApproveDiv>
            </CandidatesDiv>
        )
    })

    
    const approved = trip.approved && trip.approved.map((candidate) =>{
        return(
            <CandidatesDiv>
                <TextInfo>Candidato: {candidate.name}</TextInfo>
                <TextInfo>Idade: {candidate.age}</TextInfo>
                <TextInfo>Profissão: {candidate.profession}</TextInfo>
                <TextInfo>Pais de origem: {candidate.country} </TextInfo>
                <TextInfo>Aplicação: {candidate.applicationText} dias</TextInfo>
            </CandidatesDiv>
        )
    })

    return (
        <HomeBack>
            <LayoutPage>
                <Header buttonName={buttonName}/>
                <MainBodyPage>
                    <BodyContainer>
                        <HeaderPage>
                            <ButtonBody>
                                <ButtonPageBlack onClick={()=> goToLastPage(history)}>Voltar</ButtonPageBlack>
                            </ButtonBody>
                            <TripName><h1>{trip.name}</h1></TripName>
                        </HeaderPage>
                        <TripContainer>
                            <TripInfo>
                                <HeaderBox><h3>Descrição da viagem</h3></HeaderBox>
                                <InfoBox>
                                    <TextInfo>Descrição: {trip.description}</TextInfo>
                                    <TextInfo>Planeta: {trip.planet}</TextInfo>
                                    <TextInfo>Data: {trip.date}</TextInfo>
                                    <TextInfo>Duração: {trip.durationInDays} dias</TextInfo>
                                </InfoBox>
                            </TripInfo>
                            <Volunteers>
                                <HeaderBox><h3>Candidatos Pendentes</h3></HeaderBox>
                                <InfoBox>{candidates && candidates.length === 0 ? (<TextInfo>Não existe candidatos pendentes para esta viagem</TextInfo>) : personalDetails}</InfoBox>
                            </Volunteers>
                            <Passengers>
                                <HeaderBox><h3>Candidatos Aprovados</h3></HeaderBox>
                                <InfoBox>{trip.approved && approved.length === 0 ? (<TextInfo>Não existe candidatos aprovados nesta esta viagem</TextInfo>) : approved}</InfoBox>
                            </Passengers>
                        </TripContainer>
                    </BodyContainer>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}