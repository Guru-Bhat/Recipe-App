import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ message }) => {
    useEffect(()=>{
        notify();
    },[])

  const notify = () => toast.info(message, { position: 'top-center', autoClose: 2000 } );

  return (
    <div>
    {/* <ToastContainer position="top-center" autoClose={3000}/> */}
      <ToastContainer position="top-center" hideProgressBar/>
    </div>
  );
};

export default Notification;
