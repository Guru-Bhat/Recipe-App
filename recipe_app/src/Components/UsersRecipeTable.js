import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { getRecipeImage } from "../customHooks/GetImage";
import { useEditRecipeMutation, useDeleteRecipeMutation } from '../Redux/apiSlice';
import "../Assets/Styles/userAccountPage.scss"
import "../Assets/Styles/common.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../Routes/RoutesList';
import { useGetRecipesByEmailQuery } from "../Redux/apiSlice"
import ModalComoonent from './ModalComoonent';
import Notification from '../Components/Notification'


export default function UsersRecipeTable(props) {
  // const [myRecipes, setMyRecipes] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const [recipeToBeDeleted, setRecipeToBeDeleted] = useState()
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [deleteRecipe] = useDeleteRecipeMutation();
  const [count, setCount] = useState()
  const [edit, setEdit] = useState(false)

  // const [recipeDetails, setRecipeDetails] = useState(JSON.parse(sessionStorage.getItem("recipeDetails")))

  const navigate = useNavigate()
  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const email = userData.email

  let { data: myRecipes, error, loading } = useGetRecipesByEmailQuery(email);

  useEffect(() => {
    if (myRecipes) {
      setCount(myRecipes.length)
    }
  }, [count, myRecipes])



  const editRecipeHandler = (recipeDetails) => {
    sessionStorage.setItem("recipeDetails", JSON.stringify(recipeDetails))
    console.log("edit", recipeDetails)
    navigate(routes.edit_recipe, {
      state: { recipeDetails: recipeDetails }
    })
  }

  const modalHandler = (recipeToBeDeleted) => {
    console.log("reccipe to be deleted is", recipeToBeDeleted.title)
    setRecipeToBeDeleted(recipeToBeDeleted)
    setShowModal(true);
  }

  const deleteRecipeHandler = () => {
    console.log("reccipe deleted is", recipeToBeDeleted)

    setNotificationOpen(true);
    deleteRecipe({ id: recipeToBeDeleted.id })
    setRecipeToBeDeleted('')
    setShowModal(false);
    // navigate(routes.delete_recipe)
  }


  const viewRecipeDetails = (id) => {
    navigate(routes.recipe_details,
      {
        state: { recipeId: id }
      });
  }

  const toggle = () => setShowModal(!showModal);

  const handleNotificationClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotificationOpen(false);
  };

  return (
    <div>
      <b className="heading-text-level2 center-item">My Uploads</b>
      {!count>0?"No recipes uploaded yet.  Click below button to add new recipe" :
      <div className="table-container">
        <table >
          <tbody className='tableBody'>
            {/* Populate the table body with rows and cells */}
            {myRecipes && myRecipes.map((myRecipe) => (
              // <div className='table-row' key={myRecipe.id}>
                <tr className='table-row' key={myRecipe.id}>
                <td><img src={getRecipeImage(myRecipe)} alt="" className="small-image" /></td>
                  <td>{myRecipe.title}</td>
                  <td>{myRecipe.rating}</td>
                  <td><Button variant="contained" onClick={() => editRecipeHandler(myRecipe)}>Edit</Button></td>
                  <td><Button variant="contained" color="error" onClick={() => modalHandler(myRecipe)}>Delete</Button></td>
                  <td><Button variant="contained" color="success" onClick={() => viewRecipeDetails(myRecipe.id)}>View</Button></td>
                  <br/>
                </tr>
                
              // </div>
            ))}
          </tbody>
        </table>
      </div>
}
      
      {showModal &&
        <ModalComoonent showModal={showModal} details={recipeToBeDeleted} onClose={() => setShowModal(false)} onDelete={deleteRecipeHandler} />
      }

      {notificationOpen &&
        <Notification message="Recipe deleted" />
      }

    </div>

  );
}