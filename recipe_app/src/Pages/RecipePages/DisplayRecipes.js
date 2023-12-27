import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useGetRecipesQuery, useGetRecipesByIdQuery } from "../../Redux/apiSlice"
import { getImage } from "../../customHooks/GetImage";
import { Button, Container } from "reactstrap";
import '../../Assets/Styles/displayRecipes.scss'
import { useNavigate } from 'react-router-dom';
import routes from "../../Routes/RoutesList";
import Loader from "../../Components/Loader";

export default function DisplayRecipes() {
    const { data, error, isLoading } = useGetRecipesQuery();
    const { dataa, errorr, isLoadingg } = useGetRecipesByIdQuery(2);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (dataa) {
        console.log("dataa", dataa)
    }

    const showRecipeDetails = (id) => {
        navigate(routes.recipe_details,
            {
                state: { recipeId: id }
            });
    }

    return (
        <>
            <h1 className="heading-text-level1">DisplayRecipes</h1>
            <Container className="grid-container">
                {isLoading ? <Loader show={isLoading} /> :
                    (!data ? (<div>{error ? error.message : 'Under maintanace'}</div>) :
                        data.map((recipe, i) => (
                            <div className="recipeCard" key={i} onClick={() => showRecipeDetails(recipe.id)} >
                                <img alt={recipe.title} src={getImage(recipe.title)} className="recipeImage"></img>
                                <p>{recipe.category} | {recipe.subCategory}</p>
                                
                                <b className="heading-text-level1">{recipe.title}</b>
                                <p className="heading-text-level2">Ratings</p>
                            </div>
                        ))
                    )
                }
            </Container>
        </>
    )
}