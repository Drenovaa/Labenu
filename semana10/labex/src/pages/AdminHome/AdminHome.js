import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import { HomeBack, MainBodyPage, LayoutPage, BodyContainer} from "../../components/Main/styled";
import {URL} from '../../parameters/URL'



const AdminHome = () => {
    const buttonName = "Usuário"
    const [trips, setTrips] = useState([])
    const history = useHistory()

    useEffect(() =>{
        getTrips()
    },[])

    const getTrips = () =>{
        axios
            .get(URL+"/trips")
    }

    return (
        <HomeBack>
            <LayoutPage>
                <Header
                    buttonName={buttonName}
                />
                <MainBodyPage>
                    <BodyContainer>
                    </BodyContainer>
                </MainBodyPage>
                <Footer/>
            </LayoutPage>
        </HomeBack>
    )
}

export default AdminHome