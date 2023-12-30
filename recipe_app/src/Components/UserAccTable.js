import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getRecipeImage } from "../customHooks/GetImage";
import { useEditRecipeMutation,useDeleteRecipeMutation } from '../Redux/apiSlice';
import "../Assets/Styles/userAccountPage.scss"
import "../Assets/Styles/common.scss"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function DenseTable(props) {
const [showModal,setShowModal]=React.useState(false)
    const [editRecipe]= useEditRecipeMutation();
    const [deleteRecipe]= useDeleteRecipeMutation();

    const editRecipeHandler=(recipe)=>{
        setShowModal(true);
        console.log("edit",recipe)
    }

    const deleteRecipeHandler=(id)=>{
        setShowModal(true);
        deleteRecipe({id:id})
    }

    
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    

  return (
   
    // <TableContainer component={Paper} className='tableContainer'>
    //   <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell align="right">Calories</TableCell>
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {props.data&& props.data.map((myRecipe) => (
    //         <TableRow
    //           key={myRecipe.title}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row" align="center">
    //           <img src={getRecipeImage(myRecipe)} alt="" className="small-image" />
    //           </TableCell>
    //           <TableCell align="center">{myRecipe.title}</TableCell>
    //           <TableCell align="center">{myRecipe.rating}</TableCell>
    //           <TableCell align="center"><button>Edit</button></TableCell>
    //           <TableCell align="center"><button>Delete</button></TableCell>
              
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  
    <div>
<div className="table-container">
<table>
  <tbody>
    {/* Populate the table body with rows and cells */}
    {props.data&& props.data.map((myRecipe) => (
        <div  className='table-row'>
    <tr>
    <img src={getRecipeImage(myRecipe)} alt="" className="small-image" />
      <td>{myRecipe.title}</td>
      <td>{myRecipe.rating}</td>
      <td><button onClick={()=>editRecipeHandler(myRecipe)}>Edit</button></td>
      {/* <td><button onClick={()=>deleteRecipeHandler(myRecipe.id)}>Delete</button></td> */}
    </tr>
    </div>
    ))}
  </tbody>
</table>
</div>
    <div>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>

);
}