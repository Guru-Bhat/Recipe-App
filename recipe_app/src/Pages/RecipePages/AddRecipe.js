import { useEffect, useState } from "react"
import { useAddRecipeMutation } from "../../Redux/apiSlice"
import { Container, Form, FormGroup, Input, Label } from 'reactstrap'
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../Routes/RoutesList";

export default function EditRecipe(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    console.log("username", userData.userName)

    const [recipeDetails, setRecipeDetails] = useState({
            title: "",
            ingredients: "",
            directions: "",
            author: userData.userName,
            email: userData.email,
            category: "",
            subCategory: "",
            rating: 0,
            votes: 0
    })
    
    const [title, setTitle] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)


    const [addRecipe] = useAddRecipeMutation()

    const handleInputField = (e) => {

        setRecipeDetails({ ...recipeDetails, [e.target.name]: e.target.value });

        if(recipeDetails.title && recipeDetails)
        setIsButtonDisabled(false)
    }

    const submitAddRecipeHandler = async (e) => {
        e.preventDefault();
        await addRecipe(
            recipeDetails
        ).then(
            // document.location.href='recipe/useraccountpage';
            // console.log("recipe updated")
            (res) => {
                console.log("response", res)
                navigate(routes.user_account_page);
            }
        )
    }


    return (
        <>
            <b className="heading-text-level1 center-item">Add Recipe Page</b>

            <Form onSubmit={(e) => submitAddRecipeHandler(e)} autoComplete='off' style={{ maxWidth: "60%", margin: "auto" }}>
                <formGroup className='form-group'>
                    <label >Title*:</label>
                    <input className="form-control signup-input" name='title' value={recipeDetails.title} maxLength={30} onChange={handleInputField} required />
                </formGroup>

                <FormGroup className='form-group'>
                    <label>Category*:</label>
                    <Input className="form-control signup-input" name='category' value={recipeDetails.category} maxLength={10} onChange={handleInputField} required />
                </FormGroup>

                <FormGroup className='form-group'>
                    <label>Sub-Category:</label>
                    <Input className="form-control signup-input" name='subCategory' value={recipeDetails.subCategory} maxLength={20} onChange={handleInputField} />
                </FormGroup>

                <FormGroup className='form-group'>
                    <Label>Ingredients*:</Label>
                    <textarea className="form-control signup-input" name='ingredients' value={recipeDetails.ingredients} onChange={handleInputField} required />
                </FormGroup>

                <FormGroup className='form-group'>
                    <label>Directions*:</label>
                    <textarea className="form-control signup-input" name='directions' value={recipeDetails.directions} onChange={handleInputField} required />
                </FormGroup>
<br/>
                <Button variant="contained" color="success" type="submit" disabled={isButtonDisabled} >Add Recipe </Button>
            </Form>

        </>
    )
}