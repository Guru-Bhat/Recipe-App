import React from 'react'
import { Switch, Route, BrowserRouter, Routes } from 'react-router-dom'
import routers from './RoutesList'
import SignUp from '../Pages/OnboardingPages/signUp'
import Layout from '../Layout/Layout'
// import DisplayRecipes from '../Pages/RecipePages/DisplayRecipes'
import { Provider } from 'react-redux'
import { store } from '../Redux/store'


export default function Router() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>

                <Route index path='/recipe' Component={routers.signUp} />
                <Route exact path={routers.sign_up} element={<routers.signUp />} />
                <Route exact path={routers.sign_in} element={<routers.signIn />} />

                <Route exact path={routers.home_page} element={<routers.homePage />} />
                <Route exact path={routers.recipe_details} element={<routers.recipeDetails />} />

                <Route exact path={routers.user_account_page} element={<routers.userAccountPage />} />
                <Route exact path={routers.add_recipe} element={<routers.addRecipe />} />
                <Route exact path={routers.edit_recipe} element={<routers.editRecipe />} />
                <Route exact path={routers.delete_recipe} element={<routers.deleteRecipe />} />
                
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    )
}