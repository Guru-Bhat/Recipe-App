import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetRecipesQuery, useGetRecipesByIdQuery } from "../../Redux/apiSlice"
import '../../Assets/Styles/common.scss'
import '../../Assets/Styles/recipeDetails.scss'
import { getImage } from "../../customHooks/GetImage";

export default function RecipeDetails() {
    
    const location = useLocation();
    let id = location.state?.recipeId
        const { data, error, isLoading } = useGetRecipesByIdQuery(id);

        
    const { dataa, error2, isLoading2} = useGetRecipesQuery();

    if (dataa) {
        console.log("allRecipes", dataa)
    }

    return (
        <div className="recipe-details-page center-item">
            
            <div className="details-page-container">
                {data &&
                    <div className="recipe-details">
                        <p className="heading-text-level1"> <b >{data.title} ({data.rating})</b> |  {data.category} | {data.subCategory} </p>
                       <div className="">
                        <img alt={data.title} src={getImage(data.title)} className="recipe-image"></img>
                        </div>
                        {/* <hr /> */}
                        <br/>
                        <b className="heading-text-level1">Recipe Details</b>
                        <div className="heading-text-level2"> 
                        <b >Ingredients</b> <p className="normal-texts">{data.ingredients}</p>
                        <b>Directions </b> <p className="normal-texts">{data.directions}</p>
                        <b>Ratings </b> <p className="normal-texts">{data.rating}</p>
                        </div>
                    </div>
                }

                <div className='sideColumnItems'>
                <b className="heading-text-level1 center-item" >Latest</b>
                {dataa &&
                dataa.map((recipe)=>(
                    <div className="side-column-card" >
                    <div className="center-item">
                        <img alt={recipe.title} src={getImage(recipe.title)} className="side-column-image"></img>
                    </div>
                    <b className="heading-text-level2">{recipe.title}</b>
                </div>
                ))
                
}
                </div>

            </div>
        </div>
    )
}