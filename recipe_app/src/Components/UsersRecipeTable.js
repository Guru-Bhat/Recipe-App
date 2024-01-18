import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { getRecipeImage } from "../customHooks/GetImage";
import { useEditRecipeMutation, useDeleteRecipeMutation } from '../Redux/apiSlice';
import "../Assets/Styles/userAccountPage.scss"
import "../Assets/Styles/common.scss"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../Routes/RoutesList';
import DeleteRecipe from '../Pages/RecipePages/DeleteRecipe'
import { useGetRecipesByEmailQuery } from "../Redux/apiSlice"
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter
// } from 'reactstrap';
import ModalComoonent from './ModalComoonent';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Notification from '../Components/Notification'


export default function UsersRecipeTable(props) {
  // const [myRecipes, setMyRecipes] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const [recipeToBeDeleted, setRecipeToBeDeleted] = useState()
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [deleteRecipe] = useDeleteRecipeMutation();
  const [count, setCount] = useState()
  const [edit, setEdit] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState(JSON.parse(sessionStorage.getItem("recipeDetails")))

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
      <div className="table-container">
        <table >
          <tbody>
            {/* Populate the table body with rows and cells */}
            {myRecipes && myRecipes.map((myRecipe) => (
              <div className='table-row' key={myRecipe.id}>
                <tr>
                  <img src={getRecipeImage(myRecipe)} alt="" className="small-image" />
                  <td>{myRecipe.title}</td>
                  <td>{myRecipe.rating}</td>
                  <td><Button variant="contained" onClick={() => editRecipeHandler(myRecipe)}>Edit</Button></td>
                  <td><Button variant="contained" color="error" onClick={() => modalHandler(myRecipe)}>Delete</Button></td>
                  <td><Button variant="contained" color="success" onClick={() => viewRecipeDetails(myRecipe.id)}>View</Button></td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
      {showModal &&

      <ModalComoonent showModal={showModal} details={recipeToBeDeleted} onClose={()=>setShowModal(false)} onDelete={deleteRecipeHandler}/>
        // <Modal
        //   isOpen={showModal}
        //   toggle={toggle}
        // >
        //   <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        //   <ModalBody>
        //     {recipeToBeDeleted.title}
        //   </ModalBody>
        //   <ModalFooter>
        //     <Button color="warning" onClick={deleteRecipeHandler}>
        //       Ok
        //     </Button>{' '}
        //     <Button color="secondary" onClick={toggle}>
        //       Cancel
        //     </Button>
        //   </ModalFooter>
        // </Modal>
      }
{notificationOpen &&
      <Notification message="Recipe deleted" />
}

    </div>

  );
}