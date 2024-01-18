// import React, { useState } from 'react';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" />;
// }

// const Notification = ({ open, message, handleClose }) => {
//     const [notification,setnotification]=useState('Recipe deleted')
//   return (
//     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//       <Alert >
//         {message}
//       </Alert>
//     </Snackbar>
//   );
// };

// export default Notification;

import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ message }) => {
    useEffect(()=>{
        notify();
    },[])

  const notify = () => toast.info(message, { position: 'top-center', autoClose: 10000 } );

  return (
    <div>
    {/* <ToastContainer position="top-center" autoClose={3000}/> */}
      <ToastContainer position="top-center" hideProgressBar/>
    </div>
  );
};

export default Notification;
