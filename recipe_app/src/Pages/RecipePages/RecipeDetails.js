import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetRecipesByIdQuery } from "../../Redux/apiSlice"

export default function RecipeDetails(){
    const location=useLocation();

let id= location.state?.recipeId

    const { data, error, isLoading } = useGetRecipesByIdQuery(id);

    return(
        <>
        <div className="recipe-details">
            <h1>Recipe Details</h1>
            {data &&
            <div className="">
                <p>{data.title}</p>
                </div>
            }
            
        </div>
        </>
    )
}