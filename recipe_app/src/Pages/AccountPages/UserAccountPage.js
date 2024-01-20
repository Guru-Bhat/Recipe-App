import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useGetRecipesQuery, useGetRecipesByIdQuery, useGetRecipesByEmailQuery } from "../../Redux/apiSlice"
import { getRecipeImage } from "../../customHooks/GetImage";
import "../../Assets/Styles/userAccountPage.scss"
import UsersRecipeTable from "../../Components/UsersRecipeTable"
import { useNavigate } from "react-router-dom";
import routes from "../../Routes/RoutesList";
import Button from '@mui/material/Button';

export default function UserAccountPage() {


    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const isLoggedIn = userData.isLoggedIn
    const userName = userData.userName
    const role = userData.role
    const email = userData.email
    console.log("userData",userData)
    const { data: myRecipes, error: recipeDataError, isLoading: isrecipeDataLoading } = useGetRecipesByEmailQuery(email);
    console.log("myRecipes",myRecipes,recipeDataError,isrecipeDataLoading)
    
    const navigate = useNavigate();

    const navigateToAddRecipePage=()=>{
        navigate(routes.add_recipe)
    }


    return (
        <div  className="">
            <b className="heading-text-level1 center-item">My account</b>
            {/* <div className="myUploads"> */}
            
            <div className="center-item">
                <UsersRecipeTable data={myRecipes} />
               
               
                {/* {data && myRecipes && myRecipes.map((recipe)=>(
                    <div className="wide-card">
                        <img src={getRecipeImage(recipe)} alt="" className="small-image"/>
                        <b>{recipe.title}</b>
                    </div>
                ))
} */}
 </div>
            {/* </div> */}
            <br/>
            <div  className="center-item">
            <Button variant="contained" color="success" className="center-item large-button"onClick={navigateToAddRecipePage}>Add New Recipe</Button>
            </div>
           
        </div>
    )
}