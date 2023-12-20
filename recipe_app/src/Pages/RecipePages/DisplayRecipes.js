import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useGetRecipesQuery } from "../../Redux/apiSlice"
import { getImage } from "../../customHooks/GetImage";
import { Button, Container } from "reactstrap";
import '../../Assets/Styles/displayRecipes.scss'
import { useNavigate } from 'react-router-dom';
import routes from "../../Routes/RoutesList";

export default function DisplayRecipes() {
    const { data, error, isLoading } = useGetRecipesQuery();
    const dispatch = useDispatch();
    const navigate= useNavigate();

    if (data) {
        console.log("data", data)
    }

    const showRecipeDetails=(id)=>{
        navigate(routes.recipe_details,
            {
                state: {recipeId:id}
            });
    }

    return (
        <>
            <h1>DisplayRecipes</h1>
            <Container className="grid-container">
            {!data ? (<div>{error ? error.message : 'loading'}</div>) :
                data.map((recipe,i) => (
                    <div className="recipeCard" key={i} onClick={()=>showRecipeDetails(recipe.id)} >
                        <div className="imageContainer">
                        <img alt={recipe.title} src={getImage(recipe.title)} className="recipeImage"></img>
                        </div>
                        {recipe.title}
                        <p>Ratings</p>
                    </div>
                ))
            }
              </Container>
        </>
    )
}