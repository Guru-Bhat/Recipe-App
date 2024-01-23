import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validateEmail from '../../customHooks/SignInSignUpHooks';
import routes from '../../Routes/RoutesList';
import { useDispatch } from 'react-redux';
import { setLogin, setUserName, setEmail, setRole } from '../../Redux/sessionDataSlice';
import { useCreateUserMutation } from '../../Redux/apiSlice';
import Loader from '../../Components/Loader';
import '../../Assets/Styles/common.scss';
import '../../Assets/Styles/signUpPage.scss';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [dataValidations, setDataValidations] = useState({
    isValidEmail: false,
    isValidPassword: false,
    errorMessageEmail: '',
    errorMessagePassword: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [createUser] = useCreateUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isButtonDisabled =
  formData.fullName.length === 0 ||
  formData.email.length === 0 ||
  !dataValidations.isValidEmail ||
  !dataValidations.isValidPassword;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === 'email') {
      let newEmail = value;
      setFormData((prevData) => ({ ...prevData, email: newEmail }));
      let isValidEmail = validateEmail(newEmail);
      setDataValidations((prevState) => ({ ...prevState, isValidEmail, errorMessageEmail: newEmail.length>0 ? (isValidEmail ? '' : 'Invalid email') : '' }));
    } else if (name === 'password') {
      let password = value;
      let isValidPassword = password.length >= 8;
      setDataValidations((prevState) => ({ ...prevState, isValidPassword, errorMessagePassword: password.length>0 ? (isValidPassword ? '' : 'Min 8 characters required') : '' }));
    }

    // setIsButtonDisabled(formData.fullName.length === 0 || formData.email.length === 0 || !dataValidations.isValidEmail || !dataValidations.isValidPassword);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    let userData = {
      id: formData.email,
      userName: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: 'User',
    };

    await createUser({ userData });
    dispatch(setLogin(true));
    dispatch(setUserName(formData.fullName));
    dispatch(setEmail(formData.email));
    dispatch(setRole('User'));

    sessionStorage.setItem('userData', JSON.stringify(userData));

    navigate(routes.home_page);
  };

  return (
    <div className="background-color">
      {isProcessing ? (
        <Loader show={isProcessing} />
      ) : (
        <Container className="container">
          <div className="card">
            <b className="heading-text-level1">Sign Up</b>
            <Form onSubmit={(e) => submitFormHandler(e)} autoComplete="off" className="form">
              <FormGroup className="form-group">
                <Input className="form-control signup-input" placeholder="Name*" type="text" name="fullName" value={formData.fullName} maxLength={30} onChange={handleInput} required />
              </FormGroup>
              <FormGroup className="form-group">
                <Input className="form-control signup-input" placeholder="Email*" type="text" name="email" value={formData.email} maxLength={30} onChange={handleInput} />
                {!dataValidations.isValidEmail && <p className="errorMessage">{dataValidations.errorMessageEmail}</p>}
              </FormGroup>
              <FormGroup className="form-group">
                <Input className="form-control signup-input" placeholder="Password(Min 8 characters)*" type="password" name="password" value={formData.password} onChange={handleInput} />
                {!dataValidations.isValidPassword && <p className="errorMessage">{dataValidations.errorMessagePassword}</p>}
              </FormGroup>
              <Button type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? 'btn-disabled' : 'btn-active'}>
                <p className="btn-text">Next</p>
              </Button>

              <p className="center-item" onClick={() => setIsProcessing(true)}>
                Already have an account?<Link to="/recipe/signin">SignIn</Link>
              </p>
            </Form>
          </div>
        </Container>
      )}
    </div>
  );
}
