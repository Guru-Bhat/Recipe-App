import { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Input, Button, Label } from 'reactstrap'

export default function ContactUs() {
    const [info,setinfo]=useState({
        fullName:'',
        email:'',
        mobileNumber:'',
        details:''
    })
const [errorMessage,seterrorMessage]=useState('');
const [isButtonDisabled,setIsButtonDisabled]=useState(true);

// useEffect(()=>{
//     if(info.fullName.length>0 && info.email.length>0 &&info.mobileNumber.length>0 &&info.details.length>0){
//         setIsButtonDisabled(false);
//     }
// },[info.fullName,info.email,info.mobileNumber,info.details])

 const handleInputField=async(e)=>{
    await setinfo((prevInfo)=>({...prevInfo,[e.target.name]:e.target.value}));
    if(info.fullName && info.email&&info.mobileNumber&&info.details){
        await setIsButtonDisabled(false);
    }
 }

 const submitFormHandler=(e)=>{
    e.preventDefault();
    setinfo({
        fullName:'',
        email:'',
        mobileNumber:'',
        details:''
    })
 }

  return (
    <div>
        <Container className="container">
               {/* {error && <p className='errorMessage'>{errorMessage}</p>}  */}
                <div className='card'>
                    <b className='heading-text-level1'>Contact Us</b>
                    <p>Please fill the below form</p>
                    <Form onSubmit={(e) => submitFormHandler(e)} autoComplete='off'>
                    <FormGroup className='form-group'>
                            <Input className='form-control signup-input' placeholder='Full Name*' type='text' name='fullName' value={info.fullName} maxLength={30} onChange={(e) => handleInputField(e, 'fullName')} required/>
                           
                        </FormGroup>

                        <FormGroup className='form-group'>
                            <Input className='form-control signup-input' placeholder='Mobile number*' type='text' name='mobileNumber' value={info.mobileNumber} maxLength={30} onChange={(e) => handleInputField(e, 'mobileNumber')} />
                            {/* <Label className='form-control-placeholder' for='fullName' sm={2}>Mobile Number<super>*</super></Label> */}
                           
                        </FormGroup>

                        <FormGroup className='form-group'>
                            <Input className='form-control signup-input' placeholder='Email*' type='text' name='email' value={info.email} maxLength={30} onChange={(e) => handleInputField(e, 'email')} />
                           
                        </FormGroup>

                        <FormGroup className='form-group'>
                            <textarea className='form-control signup-input' placeholder='Details*' type='text' name='details' value={info.details} maxLength={300} onChange={(e) => handleInputField(e, 'details')} />
                            {/* <Label className='form-control-placeholder' for='fullName' sm={2}>Mobile Number<super>*</super></Label> */}
                            
                        </FormGroup>

                        <Button type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? "btn-disabled" : "btn-active"} >
                            <p className='btn-text'>Submit</p></Button>
                    </Form>
                    </div>
                    </Container>
    </div>
  );
}