import { Container, Form, FormGroup, Input, Button, Label } from 'reactstrap'
import { useEffect, useState } from 'react'
import {useAddRecipeMutation} from "../../Redux/apiSlice"
import { useNavigate } from 'react-router-dom';
import routes from '../../Routes/RoutesList'
export default function addRecipe(){
    let [RecipeName, setRecipeName] = useState('')
    let [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [addRecipe]= useAddRecipeMutation()

    const navigate = useNavigate();

    const handleInputField = (e) => {

        console.log("inputs", e.target.value)
        if (e.target.name === 'RecipeName') {
            setfullName(e.target.value)
        }
        setIsButtonDisabled(false)
    }

    submitFormHandler=()=>{
        e.preventDefault();
       
        addRecipe({
      title: RecipeName ,
      ingredients: [
        "Ingredient 1",
        "Ingredient 2"
    ],
    "directions": "Prepare Greens: Wash and tear mixed salad greens.Chop Veggies: Slice tomatoes, cucumber, red onion, carrots, and bell peppers.Combine Ingredients: Mix veggies in a bowl, add optional feta cheese.",
    "author": "admin",
    "category": "Veg",
    "subCategory": "Sandwich",
    "rating": 0,
    "votes": 0
        })

        navigate(routes.home_page);
    }

    return(
        <>
        <h1>addRecipe</h1>
        <Form onSubmit={(e) => submitFormHandler(e)} autoComplete='off'>
                        <FormGroup className='form-group'>
                            <Input className="form-control signup-input" placeholder='RecipeName*' type='text' name='RecipeName' value={RecipeName} maxLength={30} onChange={(e) => handleInputField(e, 'RecipeName')} required />
                            {/* <Label className='form-control-placeholder' for='fullName' sm={2}>Name<super>*</super></Label> */}

                        </FormGroup>
                        <Button type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? "btn-disabled" : "btn-active"} >Add Recipe </Button>
                        </Form>
        
        </>
    )
}

