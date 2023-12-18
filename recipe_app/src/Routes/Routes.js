import React from 'react'
import { Switch, Route, BrowserRouter, Routes } from 'react-router-dom'
import routers from './RoutesList'
import SignUp from '../Pages/OnboardingPages/signUp'
import Layout from '../Layout/Layout'
import DisplayRecipes from '../Pages/RecipePages/DisplayRecipes'


export default function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>

                <Route index path='/recipe' Component={routers.signUp} />
                <Route exact path={routers.sign_up} element={<routers.signUp />} />
                <Route exact path={routers.sign_in} element={<routers.signIn />} />

                <Route exact path={routers.display_recipes} element={<routers.displayRecipes />} />
                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}