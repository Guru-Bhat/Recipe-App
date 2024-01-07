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
import DisplayRecipes from "../../Components/displayRecipes";

export default function HomePage() {
    const { data, error, isLoading } = useGetRecipesQuery();
    const [filteredData, setFilteredData]= useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn= useSelector(state=>state.session.login);
    const userName= useSelector(state=>state.session.userName);
    const role= useSelector(state=>state.session.role);
    const email= useSelector(state=>state.session.email);
console.log("isLoggedIn",isLoggedIn, userName,email, role);



// useEffect(()=>{
//     let userData=JSON.parse(sessionStorage.getItem("userData"))
// })

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

    return (
        <>
        <div className="center-searchbar">
        <SearchBar onSearch={searchHandle}/>
        </div>
            <div>
            <h1 className="heading-text-level1">Recipes</h1>
            {!data ? (<div>{error ? error.message : 'Under maintanace'}</div>) :
            <DisplayRecipes recipes={filteredData.length>0 ? filteredData: data} />
    } 
            </div>
        </>
    )
}