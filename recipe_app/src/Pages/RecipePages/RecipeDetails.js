import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetRecipesQuery, useGetRecipesByIdQuery } from "../../Redux/apiSlice"
import '../../Assets/Styles/common.scss'
import '../../Assets/Styles/recipeDetails.scss'
import { getRecipeImage } from "../../customHooks/GetImage";
import { useNavigate } from 'react-router-dom';
import routes from "../../Routes/RoutesList";


export default function RecipeDetails() {

    const location = useLocation();
    let id = location.state?.recipeId
    const { data, error, isLoading } = useGetRecipesQuery();
    const { data: recipe, error: error2, isLoading: loading } = useGetRecipesByIdQuery(id);
    const [latestRecipes, setLatestRecipes] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        if (data) {
            setLatestRecipes(data.slice(-4));
            console.log("allRecipes", data)
        }
    }, [data])

    const showRecipeDetails = (id) => {
        navigate(routes.recipe_details,
            {
                state: { recipeId: id }
            });
    }

    return (
        <div className="recipe-details-page center-item">

            <div className="details-page-container">

                {recipe &&
                    <div className="recipe-details">
                        <p className="heading-text-level1"> <b >{recipe.title} ({recipe.rating})</b> |  {recipe.category} | {recipe.subCategory} </p>
                        <div className="">
                            <img alt={recipe.title} src={getRecipeImage(recipe.title)} className="recipe-image"></img>
                        </div>
                        {/* <hr /> */}
                        <br />
                        <b className="heading-text-level1">Recipe Details</b>
                        <div className="heading-text-level2">
                            <b >Ingredients</b> <p className="normal-texts">{recipe.ingredients}</p>
                            <b>Directions </b> <p className="normal-texts">{recipe.directions}</p>
                            <b>Ratings </b> <p className="normal-texts">{recipe.rating}</p>
                        </div>
                    </div>
                }

                <div className='sideColumnItems'>
                    <b className="heading-text-level1 center-item" >Latest</b>
                    {latestRecipes &&
                        latestRecipes.map((recipe) => (
                            <div className="side-column-card" onClick={() => showRecipeDetails(recipe.id)}>
                                {/* <div className="center-item"> */}
                                <img alt={recipe.title} src={getRecipeImage(recipe.title)} className="latest-recipe-image"></img>
                                {/* </div> */}
                                <b className="heading-text-level2">{recipe.title}</b>
                            </div>
                        ))

                    }
                </div>

            </div>
        </div>
    )
}