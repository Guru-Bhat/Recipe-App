import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useGetRecipesQuery, useGetRecipesByIdQuery } from "../../Redux/apiSlice"
import { getRecipeImage } from "../../customHooks/GetImage";
import { Button, Container } from "reactstrap";
import '../../Assets/Styles/displayRecipes.scss'
import { useNavigate } from 'react-router-dom';
import routes from "../../Routes/RoutesList";
import Loader from "../../Components/Loader";
import SearchBar from "../../Components/searchBar";

export default function DisplayRecipes() {
    const { data, error, isLoading } = useGetRecipesQuery();
    const [filteredData, setFilteredData]= useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchHandle=(searchValue)=>{
        console.log("searchValue",searchValue);
        if(data){
            let filteredData=data.filter((recipe)=> recipe.title.toLowerCase().includes(searchValue.toLowerCase()) || 
            recipe.category.toLowerCase().includes(searchValue.toLowerCase()) || 
            recipe.subCategory.toLowerCase().includes(searchValue.toLowerCase()))
            console.log("filtered",filteredData);
            setFilteredData(filteredData)
        }
    }

    const showRecipeDetails = (id) => {
        navigate(routes.recipe_details,
            {
                state: { recipeId: id }
            });
    }

    return (
        <>
        <SearchBar onSearch={searchHandle}/>
       
            <div>
            <h1 className="heading-text-level1">DisplayRecipes</h1>
            <Container className="grid-container">
                {isLoading ? <Loader show={isLoading} /> :
                    (!data ? (<div>{error ? error.message : 'Under maintanace'}</div>) :
                    (filteredData.length>0 ? 
                        filteredData.map((recipe, i) => (
                            <div className="recipeCard" key={i} onClick={() => showRecipeDetails(recipe.id)} >
                                <img alt={recipe.title} src={getRecipeImage(recipe.title)} className="recipeImage"></img>
                                <p>{recipe.category} | {recipe.subCategory}</p>
                                
                                <b className="heading-text-level1">{recipe.title}</b>
                                <p className="heading-text-level2">Ratings</p>
                            </div>
                        ))
                        :
                        data.map((recipe, i) => (
                            <div className="recipeCard" key={i} onClick={() => showRecipeDetails(recipe.id)} >
                                <img alt={recipe.title} src={getRecipeImage(recipe.title)} className="recipeImage"></img>
                                <p>{recipe.category} | {recipe.subCategory}</p>
                                
                                <b className="heading-text-level1">{recipe.title}</b>
                                <p className="heading-text-level2">Ratings</p>
                            </div>
                        ))
                    )
                    )
                }
            </Container>
            </div>
        

        </>
    )
}