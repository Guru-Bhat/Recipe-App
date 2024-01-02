import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useGetRecipesQuery, useGetRecipesByIdQuery, useGetRecipesByEmailQuery } from "../../Redux/apiSlice"
import { getRecipeImage } from "../../customHooks/GetImage";
import "../../Assets/Styles/userAccountPage.scss"
import UserAccTable from "../../Components/UserAccTable"

export default function UserAccountPage() {
    const { data, error, isLoading } = useGetRecipesQuery();
    
    const [myRecipes, setMyRecipes] = useState('');
    const email= useSelector(state=>state.session.email);
    console.log("email",email)

    const { data:recipesData, error: recipeDataError, isLoading: isrecipeDataLoading} = useGetRecipesQuery(email);
    
    useEffect(() => {
        if (recipesData) {
            // setMyRecipes(getMyRecipes(userName));
            // getMyRecipes("admin");
        //    let myRecipes= data.filter((recipe)=>recipe.author === email)   
        console.log("recipesData",recipesData)
           setMyRecipes(recipesData); 
        }
    }, [data])


    return (
        <>
            <h1>My account</h1>
            <div>
                <b>My Uploads</b>
                <UserAccTable data={myRecipes} />
                {/* {data && myRecipes && myRecipes.map((recipe)=>(
                    <div className="wide-card">
                        <img src={getRecipeImage(recipe)} alt="" className="small-image"/>
                        <b>{recipe.title}</b>
                    </div>
                ))
} */}

<button>Add New Recipe</button>
            </div>
        </>
    )
}