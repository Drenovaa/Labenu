import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Post from '../pages/Post/Post'
import Error from '../pages/Error/Error'
import Home from '../pages/Home/Home'

const Router = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route exact path='/signup'>
                <SignUp/>
            </Route>
            <Route exact path='/feed'>
                <Home/>
            </Route>
            <Route exact path='/feed/detail/:id'>
                <Post/>
            </Route>
            <Route>
                <Error/>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router