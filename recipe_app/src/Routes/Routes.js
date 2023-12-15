import React from 'react'
import {Switch, Route, BrowserRouter, Routes} from 'react-router-dom'
import routers from './RoutesList'    
import SignUp from '../Pages/OnboardingPages/signUp'
import Layout from '../Layout/Layout'


export default function Router(){
    return(
        
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>} />
            <Route index Component={routers.signUp} />
            <Route exact path='routes.sign_up' Component={routers.signUp} />
            <Route exact path='routes.sign_in' Component={routers.signIn} />
            </Routes>
        </BrowserRouter>
    )
}