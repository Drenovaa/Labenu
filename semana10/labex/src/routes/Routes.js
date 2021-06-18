import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import LoginPage from '../pages/LoginPage/LoginPage';
import ListTrips from '../pages/ListTrips/ListTrips'
import TripDetails from '../pages/TripDetails/TripDetails';
import CreateTrip from '../pages/CreateTrip/CreateTrip';
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';
import AdminHome from '../pages/AdminHome/AdminHome';
import Error from "../pages/Error/Error";

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdminHome/>
                </Route>

                <Route exact path="/admin/trip/:id">
                    <TripDetails/>
                </Route>

                <Route exact path="/admin/trips/create">
                    <CreateTrip/>
                </Route>

                <Route exact path="/trips/list">
                    <ListTrips/>
                </Route>

                <Route exact path="/trips/application">
                    <ApplicationFormPage/>
                </Route>        
        
                <Route>
                    <Error/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router