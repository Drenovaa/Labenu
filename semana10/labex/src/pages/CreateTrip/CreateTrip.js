import React, { useEffect, useState } from "react";
import {useForm} from './../../hooks/useForm'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import { HomeBack, MainBodyPage, LayoutPage, BodyContainer, HeaderPage, ButtonPageBlack, ButtonPageGold, OptionDisplay, SelectDisplay} from "../../components/Main/styled";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToLastPage } from "../../routes/coordinator";
import { DivSelect, InputAddTrip, PageName, ButtonsDiv, FormContainer} from "./styled";
import axios from "axios";
import { URL } from "../../parameters/URL";
import { token } from "../../parameters/auth";
import { renderPlanet } from "../../components/planets/planets";

const initialForm = {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
};

export default function CreateTrip() {
    useProtectedPage()
    const buttonName = "Usuário"
    const [form, handleValue, resetForm] = useForm(initialForm);
    const history = useHistory()

    const addTrip = (e) =>{
        e.preventDefault()
        resetForm()

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }
        axios
            .post(URL+"/trips", body,{
                headers:{
                    auth:token
                }
            })
            .then((res) =>{
                history.push("/admin/trips/list")
                alert("Viagem criada com sucesso")
            })
            .catch((err) =>{
                alert("Algo deu errado", err)
            })
    }


    return (
        <HomeBack>
            <LayoutPage>
                <Header
                    buttonName={buttonName}
                />
                <MainBodyPage>
                    <BodyContainer>
                        <HeaderPage>
                            <ButtonsDiv>
                                <ButtonPageBlack onClick={()=> goToLastPage(history)}>Voltar</ButtonPageBlack>
                            </ButtonsDiv>
                            <PageName><h1>Criar viagem</h1></PageName>
                        </HeaderPage>
                        <DivSelect>
                            <FormContainer onSubmit={addTrip} >
                                <InputAddTrip
                                name="name"
                                placeholder="Nome da viagem"
                                value={form.name} 
                                onChange={handleValue}
                                />
                                <InputAddTrip
                                name="date"
                                type="date"
                                value={form.date}
                                onChange={handleValue}
                                />
                                <InputAddTrip
                                name="description"
                                placeholder="Descrição da viagem"
                                value={form.description}
                                onChange={handleValue}
                                />
                                <InputAddTrip
                                name="durationInDays"
                                type="number"
                                placeholder="Duração em dias da viagem (Apenas números)"
                                value={form.durationInDays}
                                onChange={handleValue}
                                />
                                <SelectDisplay
                                name="planet"
                                value={form.planet}
                                onChange={handleValue}
                                >
                                    <OptionDisplay>Selecione o destino da viagem</OptionDisplay>
                                    {renderPlanet}
                                </SelectDisplay>
                                <ButtonsDiv>
                                    <ButtonPageGold>Criar</ButtonPageGold>
                                </ButtonsDiv>
                            </FormContainer>
                        </DivSelect>
                    </BodyContainer>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}