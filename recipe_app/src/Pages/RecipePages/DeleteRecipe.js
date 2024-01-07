import { Container, Form, FormGroup, Input, Label, Card } from 'reactstrap'
import { useEffect, useState } from 'react'
import {useAddRecipeMutation} from "../../Redux/apiSlice"
import { useNavigate } from 'react-router-dom';
import routes from '../../Routes/RoutesList'
import Button from '@mui/material/Button';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function DeleteRecipe(){
    const [showModal, setShowModal] = useState(true)
    const [recipeToBeDeleted, setRecipeToBeDeleted] = useState()
    let [RecipeName, setRecipeName] = useState('')
    let [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [addRecipe]= useAddRecipeMutation()

    const navigate = useNavigate();

    const handleInputField = (e) => {

    }

const submitFormHandler=(e)=>{
        e.preventDefault();
       
    }

    const toggle = () => setShowModal(!showModal);

    return(
        <>
          <Modal
        isOpen={showModal}
        toggle={toggle}
        
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          hello
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
}

