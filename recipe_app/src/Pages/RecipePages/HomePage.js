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
    const isAdmin= useSelector(state=>state.session.isAdmin);
    const email= useSelector(state=>state.session.email);
console.log("isLoggedIn",isLoggedIn, userName,email, isAdmin);


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
        <SearchBar onSearch={searchHandle}/>
       
            <div>
            <h1 className="heading-text-level1">Recipes</h1>
            {!data ? (<div>{error ? error.message : 'Under maintanace'}</div>) :
            <DisplayRecipes recipes={filteredData.length>0 ? filteredData: data} />
    } 
            </div>
        </>
    )
}