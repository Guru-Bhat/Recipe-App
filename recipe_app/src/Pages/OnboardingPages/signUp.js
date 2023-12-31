import { Container, Form, FormGroup, Input, Button, Label } from 'reactstrap'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader'
import '../../Assets/Styles/common.scss'
import '../../Assets/Styles/signUpPage.scss'
import validateEmail from '../../customHooks/SignInSignUpHooks'
import routes from '../../Routes/RoutesList'
import { useDispatch } from 'react-redux';
import {setLogin, setUserName, setEmail,setIsAdmin} from '../../Redux/sessionDataSlice'

export default function SignUp() {
    let [fullName, setfullName] = useState('')
    let [mobleNumber, setmobleNumber] = useState(null)
    let [email, setMail] = useState('')
    let [isProcessing, setIsProcessing] = useState(false)
    let [isValidEmail, setIsValidEmail] = useState()
    let [errorMessage, setErrorMessage] = useState()
    let [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const navigate = useNavigate();
const dispatch=useDispatch();

    const handleInputField = (e) => {
        
        console.log("inputs",e.target.value, isButtonDisabled)
        if (e.target.name === 'fullName') {
            setfullName(e.target.value)
        }
        else {
            let newEmail = e.target.value
            // console.log("newEmail", newEmail)
            setMail(newEmail);
            if (newEmail.length > 0) {
                let isValidEmail = validateEmail(newEmail)
                if (isValidEmail) {
                    setIsValidEmail(true)
                    setErrorMessage("")
                }
                else {
                    setErrorMessage("Invalid email")
                }
            }

            else {
                setErrorMessage("")
            }
        }

        if(fullName && email && isValidEmail){
            setIsButtonDisabled(false)
        }
    }

    const submitFormHandler = (e) => {
        dispatch(setLogin(true));
        dispatch(setUserName(fullName));
        dispatch(setEmail(email));
        dispatch(setIsAdmin(false));
        
        navigate(routes.home_page);
    }




    return (

        <div className="background-color">
            <Container className="container">
                <Loader show={isProcessing} />

                <div className='card'>
                    <b className='heading-text-level1'>Sign Up</b>
                    <Form onSubmit={(e) => submitFormHandler(e)} autoComplete='off'>
                        <FormGroup className='form-group'>
                            <Input className="form-control signup-input" placeholder='Name*' type='text' name='fullName' value={fullName} maxLength={30} onChange={(e) => handleInputField(e, 'name')} required />
                            {/* <Label className='form-control-placeholder' for='fullName' sm={2}>Name<super>*</super></Label> */}

                        </FormGroup>

                        {/* <FormGroup className='form-group'>
                        <Input className='form-control signup-input' placeholder='Mobile number*' type='text' name='mobleNumber' value={mobleNumber} maxLength={30} onChange={(e)=>handleInputField(e,'mobileNumber')} />
                        <Label className='form-control-placeholder' for='fullName' sm={2}>Mobile Number<super>*</super></Label>
                        
                    </FormGroup> */}

                        <FormGroup className='form-group'>
                            <Input className='form-control signup-input' placeholder='email*' type='text' name='email' value={email} maxLength={30} onChange={(e) => handleInputField(e, 'email')} />
                            {/* <Label className='form-control-placeholder' for='fullName' sm={2}>Mobile Number<super>*</super></Label> */}
                            {!isValidEmail &&
                                <p className='errorMessage'>{errorMessage}</p>
                            }
                        </FormGroup>

                        <Button type="submit" disabled= {isButtonDisabled} className={isButtonDisabled ?"btn-disabled" : "btn-active"} >
                            <p className='btn-text'>Next</p></Button>

                    </Form>


                </div>

            </Container>




        </div>


    )
}