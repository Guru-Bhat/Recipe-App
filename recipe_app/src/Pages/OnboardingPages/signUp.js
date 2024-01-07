import { Container, Form, FormGroup, Input, Button, Label } from 'reactstrap'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader'
import '../../Assets/Styles/common.scss'
import '../../Assets/Styles/signUpPage.scss'
import validateEmail from '../../customHooks/SignInSignUpHooks'
import routes from '../../Routes/RoutesList'
import { useDispatch } from 'react-redux';
import { setLogin, setUserName, setEmail, setRole } from '../../Redux/sessionDataSlice'
import { useCreateUserMutation } from '../../Redux/apiSlice'
import CircularProgress from '@mui/material/CircularProgress';

export default function SignUp() {
    let [fullName, setfullName] = useState('')
    let [mobleNumber, setmobleNumber] = useState(null)
    let [email, setMail] = useState('')
    let [isProcessing, setIsProcessing] = useState(false)
    let [isValidEmail, setIsValidEmail] = useState()
    let [errorMessageEmail, setErrorMessageEmail] = useState()
    let [isButtonDisabled, setIsButtonDisabled] = useState(true)
    let [password, setPassword] = useState('')
    let [isValidPassword, setIsValidPassword] = useState(false)
    let [errorMessagePwd, setErrorMessagePwd] = useState()
    const [createUser] = useCreateUserMutation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInputField = (e) => {

        console.log("inputs", e.target.value, isButtonDisabled)
        if (e.target.name === 'fullName') {
            setfullName(e.target.value)
        }
        else if (e.target.name === 'email') {
            let newEmail = e.target.value
            // console.log("newEmail", newEmail)
            setMail(newEmail);
            let isValidEmail = validateEmail(newEmail)
            if (isValidEmail) {
                console.log("isValidEmail", isValidEmail)
                setIsValidEmail(true)
                setErrorMessageEmail("")
                console.log("isValidEmail inside condition", isValidEmail)
            }
            else if (newEmail.length > 0 && !isValidEmail) {
                console.log("isValidEmail inside condition", isValidEmail)
                setErrorMessageEmail("Invalid email")
            }
            else {
                setErrorMessageEmail("")
            }
        }

        else {
            let password = e.target.value
            let isValidPassword = password.length > 7;
            setIsValidPassword(isValidPassword)
            console.log("isValidPassword", isValidPassword)
            if (isValidPassword) {
                setPassword(password);
                setErrorMessagePwd("")
            }
            else if (password.length > 0 && !isValidPassword) {
                setErrorMessagePwd("Minimum 8 character is required")
            }
            else {
                setErrorMessagePwd("")
            }
        }

        if (fullName && email && isValidEmail && isValidPassword) {
            setIsButtonDisabled(false)
        }
    }

    const submitFormHandler = async (e) => {
        e.preventDefault();
        let userData={
            userName: fullName,
            email: email,
            password: password,
            role: "User"
        }
        console.log("userData",userData)
        await createUser({userData})
        console.log("user created")
        dispatch(setLogin(true));
        dispatch(setUserName(fullName));
        dispatch(setEmail(email));
        dispatch(setRole("User"));

        sessionStorage.setItem("userData",JSON.stringify(userData))
        
        navigate(routes.home_page);
       
    }  
    

    return (

        <div className="background-color">
             {isProcessing ?
            //  <CircularProgress/>
            <Loader show={isProcessing} />
             :
            <Container className="container">
                
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
                            <Input className='form-control signup-input' placeholder='Email*' type='text' name='email' value={email} maxLength={30} onChange={(e) => handleInputField(e, 'email')} />
                            {/* <Label className='form-control-placeholder' for='fullName' sm={2}>Mobile Number<super>*</super></Label> */}
                            {!isValidEmail &&
                                <p className='errorMessage'>{errorMessageEmail}</p>
                            }
                        </FormGroup>

                        <FormGroup className='form-group'>
                            <Input className='form-control signup-input' placeholder='Password(Min 8 characters)*' type="password" name='password' onChange={(e) => handleInputField(e, 'password')} />
                            {/* <Label className='form-control-placeholder' for='fullName' sm={2}>Mobile Number<super>*</super></Label> */}
                            {!isValidPassword &&
                                <p className='errorMessage'>{errorMessagePwd}</p>
                            }
                        </FormGroup>

                        <Button type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? "btn-disabled" : "btn-active"} >
                            <p className='btn-text'>Next</p></Button>
                            <p className='center-item' onClick={()=>setIsProcessing(true)}>Already have an account?<a href='/recipe/signin'>SignIn</a></p>
                    </Form>


                </div>
              
            </Container>
}


        </div>
    )
}
