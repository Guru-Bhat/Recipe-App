import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader';
import '../../Assets/Styles/common.scss';
import '../../Assets/Styles/signUpPage.scss';
import validateEmail from '../../customHooks/SignInSignUpHooks';
import routes from '../../Routes/RoutesList';
import { useDispatch } from 'react-redux';
import { setLogin, setUserName, setEmail, setRole } from '../../Redux/sessionDataSlice';
import { useGetUserDataByEmailQuery } from '../../Redux/apiSlice';

export default function SignIn() {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); // Default to true to show initial state
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true); // Default to true to show initial state
  const [errorMessagePwd, setErrorMessagePwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { data, error, isLoading } = useGetUserDataByEmailQuery(email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogin(false));
    dispatch(setUserName(''));
    dispatch(setEmail(''));
    dispatch(setRole(''));
    sessionStorage.clear('userData');
  }, [email]);

  const isButtonDisabled= email.length === 0 || password.length === 0 || !isValidEmail || !isValidPassword

  const handleInputField = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      let isValidEmail = validateEmail(value);
      setMail(value);
      setIsValidEmail(isValidEmail);
      setErrorMessageEmail(value.length >0 ? (isValidEmail ? '' : 'Invalid email') : '');
    } else {
      setPassword(value);
      setIsValidPassword(value.length >= 8);
      setErrorMessagePwd( value.length >0 ? (value.length >= 8 ?  '' : 'Min 8 characters required') : '');
    }

    // setIsButtonDisabled(email.length === 0 || password.length === 0 || !isValidEmail || !isValidPassword);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (data) {
      const isValidLogin = data.password === password;
      setIsValidEmail(true); // Reset email validation state
      setIsValidPassword(isValidLogin); // Update password validation state
      setErrorMessage(''); // Reset error message

      if (isValidLogin) {
        dispatch(setLogin(true));
        dispatch(setUserName(data.userName));
        dispatch(setEmail(data.email));
        dispatch(setRole(data.role));

        const userData = {
          isLoggedIn: true,
          userName: data.userName,
          email: data.email,
          role: data.role,
        };
        sessionStorage.setItem('userData', JSON.stringify(userData));

        navigate(routes.home_page);
      } else {
        setErrorMessagePwd('Please enter a valid password');
      }
    } else {
      setErrorMessage('Please enter valid credentials');
    }
  };

  return (
    <div className="background-color">
      {isProcessing ? (
        <Loader show={isProcessing} />
      ) : (
        <Container className="container">
          {error && <p className="errorMessage">{errorMessage}</p>}
          <div className="card">
            <b className="heading-text-level1">Sign In</b>
            <Form onSubmit={(e) => submitFormHandler(e)} autoComplete="off">
              <FormGroup className="form-group">
                <Input className="form-control signup-input" placeholder="Email*" type="text" name="email" value={email} maxLength={30} onChange={(e) => handleInputField(e)} />
                {!isValidEmail && <p className="errorMessage">{errorMessageEmail}</p>}
              </FormGroup>
              <FormGroup className="form-group">
                <Input className="form-control signup-input" placeholder="Password(Min 8 characters)*" type="password" name="password" onChange={(e) => handleInputField(e)} />
                {!isValidPassword && <p className="errorMessage">{errorMessagePwd}</p>}
              </FormGroup>
              <Button type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? 'btn-disabled' : 'btn-active'}>
                <p className="btn-text">Next</p>
              </Button>
              <p className="center-item" onClick={() => setIsProcessing(true)}>
                New user?<Link to="/recipe/signup">Sign UP</Link>
              </p>
            </Form>
          </div>
        </Container>
      )}
    </div>
  );
}
