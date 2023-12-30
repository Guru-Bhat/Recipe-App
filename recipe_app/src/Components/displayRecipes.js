import { getRecipeImage } from "../customHooks/GetImage";
import { Button, Container } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import routes from "../Routes/RoutesList";

export default function DisplayRecipes(props){

    const navigate = useNavigate();
console.log("recipe",props.recipes)
    const showRecipeDetails = (id) => {
        navigate(routes.recipe_details,
            {
                state: { recipeId: id }
            });
    }

    return(
        <>
        <Container className="grid-container">
                        {props.recipes.map((recipe, i) => (
                            <div className="recipeCard" key={i} onClick={() => showRecipeDetails(recipe.id)} >
                                <img alt={recipe.title} src={getRecipeImage(recipe.title)} className="recipeImage"></img>
                                <p>{recipe.category} | {recipe.subCategory}</p>
                                
                                <b className="heading-text-level1">{recipe.title}</b>
                                <p className="heading-text-level2">Ratings</p>
                            </div>
                        ))
                    }
                    </Container>
        </>
    )
}
