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
import { useGetUserDataByEmailQuery } from '../../Redux/apiSlice'

export default function SignIn(){
    let [email, setMail] = useState('')
    let [isProcessing, setIsProcessing] = useState(false)
    let [isValidEmail, setIsValidEmail] = useState()
    let [errorMessageEmail, setErrorMessageEmail] = useState()
    let [isButtonDisabled, setIsButtonDisabled] = useState(true)
    let [password, setPassword] = useState('')
    let [isValidPassword, setIsValidPassword] = useState(false)
    let [errorMessagePwd, setErrorMessagePwd] = useState()
    let [errorMessage, setErrorMessage] = useState()
    
    let [isValidLogin, setIsValidLogin] = useState(false)
    console.log("email",email)

    const { data, error, isLoading } = useGetUserDataByEmailQuery(email);
    const navigate= useNavigate()
    const dispatch = useDispatch();

    useEffect(()=>{
    },[email])
    

    const handleInputField = (e) => {
        if (e.target.name === 'email') {
            let newEmail = e.target.value;
            let isValidEmail = validateEmail(newEmail)
            if (isValidEmail) {
                console.log("isValidEmail", isValidEmail)
                setMail(newEmail);
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
        else{
            setPassword(e.target.value)
        }

        if(email && password){
            setIsButtonDisabled(false)
        }
    }

    const submitFormHandler = async (e) => {
        e.preventDefault();
        if(data.length>0){
            let isValidLogin= data.password===password
            setIsValidLogin(isValidLogin)
            setErrorMessage("")
        console.log("isValidLogin", isValidLogin)
        console.log("data", data)
        
        if(!isValidLogin){
            setErrorMessagePwd("Please enter valid password")
        }
    }
    else{
        setErrorMessage("Please enter valid credentials")
    }

    dispatch(setLogin(true));
    dispatch(setUserName(data.fullName));
    dispatch(setEmail(data.email));
    dispatch(setRole(data.role));

    // navigate(routes.home_page,{
    //     state: { userData:data }
    // });

    navigate(routes.home_page)
    }

    return(
        <>
        <div className="background-color">
            <Container className="container">
                <Loader show={isProcessing} />
               {error && <p className='errorMessage'>{errorMessage}</p>} 
                <div className='card'>
                    <b className='heading-text-level1'>Sign Up</b>
                    <Form onSubmit={(e) => submitFormHandler(e)} autoComplete='off'>
                       
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
                            <p>New user?</p><a href='http://localhost:3001/recipe/signup'>Sign UP</a>
                    </Form>
                    </div>
                    </Container>
                    </div>
        </>
    )
}

