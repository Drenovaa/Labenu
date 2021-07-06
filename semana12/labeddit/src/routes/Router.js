import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PostPage from '../pages/PostPage/PostPage'
import Error from '../pages/Error/Error'
import Home from '../pages/Home/Home'
import MainPage from '../pages/MainPage/MainPage'
import './../App.css'

const Router = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <MainPage/>
            </Route>
            <Route exact path='/users/login'>
                <Login/>
            </Route>
            <Route exact path='/users/signup'>
                <SignUp/>
            </Route>
            <Route exact path='/posts'>
                <Home/>
            </Route>
            <Route exact path='/posts/:id/comments'>
                <PostPage/>
            </Route>
            <Route>
                <Error/>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router
