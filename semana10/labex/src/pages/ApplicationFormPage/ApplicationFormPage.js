import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import { HomeBack, MainBodyPage, LayoutPage, BodyContainer, ButtonPageBlack, ButtonPageGold, HeaderPage} from "../../components/Main/styled";
import { useHistory, useParams } from "react-router-dom";
import { ApplicationContainer, SelectDisplayApply, OptionDisplayApply, InputApplyText ,InputApplyAge, ButtonsDiv, InputApply, ApplicationHeader,ApplyPageTitle, InfoDiv, ButtoApply } from "./styled";
import { renderCountry } from "../../components/countries/Countries";
import { goToLastPage } from "../../routes/coordinator";
import axios from "axios";
import { URL } from "../../parameters/URL";
import ListTrips from "../ListTrips/ListTrips";
import { useForm } from "../../hooks/useForm";
import { FormContainer } from "../CreateTrip/styled";


const initialForm = {
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    id: ""
    };

export default function ApplicationFormPage() {
    const buttonName = "Painel Admin"
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [form, handleValue, resetForm] = useForm(initialForm);

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

    const applyTrip = (e) =>{
        e.preventDefault();
        resetForm();

        const body ={
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
            };
        
        axios
            .post(URL+"/trips/"+form.id+"/apply", body)
            .then((res) =>{
                alert("Aplicação enviada")
                history.push("/trips/list")
            })
            .catch((err) =>{
                alert("Opa, deu ruim em algum lugar")
            })
    }

    const litTrips = trips.map((tripSelect) =>{
        return(<option value={tripSelect.id}>{tripSelect.name} || {tripSelect.planet}</option>)
    })

    return (
        <HomeBack>
            <LayoutPage>
                <Header buttonName={buttonName}/>
                <MainBodyPage>
                    <BodyContainer>
                        <HeaderPage>
                            <ButtonsDiv>
                                <ButtonPageBlack onClick={()=> goToLastPage(history)}>Voltar</ButtonPageBlack>
                            </ButtonsDiv>
                            <ApplicationHeader> <h1>Aplicar para viagem</h1>  </ApplicationHeader>
                        </HeaderPage>
                            <ApplicationContainer>
                                <FormContainer onSubmit={applyTrip}>
                                    <InfoDiv>
                                        <InputApply
                                            placeholder="Nome"
                                            name="name"
                                            onChange={handleValue}
                                            value={form.name}
                                        />
                                        <InputApplyAge 
                                            type="number" 
                                            name="age"
                                            min="18"
                                            placeholder="idade"
                                            value={form.age}
                                            onChange={handleValue}
                                        />
                                        </InfoDiv>
                                        <InputApplyText 
                                            type="text"
                                            placeholder="Motivo da aplicação"
                                            name="applicationText"
                                            value={form.applicationText}
                                            onChange={handleValue}
                                        />
                                        <InputApply 
                                            placeholder="Profissão"
                                            name="profession"
                                            onChange={handleValue}
                                            value={form.profession}
                                        />
                                    <InfoDiv>
                                        <SelectDisplayApply name="country" value={form.country} onChange={handleValue}>
                                            <OptionDisplayApply>Selecione o seu país de origem</OptionDisplayApply>
                                                {renderCountry}
                                        </SelectDisplayApply>
                                        <SelectDisplayApply name="id" value={form.id} onChange={handleValue}>
                                            <OptionDisplayApply>Selecione a viagem</OptionDisplayApply>
                                            {litTrips}
                                        </SelectDisplayApply>
                                    </InfoDiv>
                                    <ButtoApply>
                                        <ButtonPageGold>Aplicar</ButtonPageGold>
                                    </ButtoApply>
                                </FormContainer>
                            </ApplicationContainer>
                    </BodyContainer>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}
