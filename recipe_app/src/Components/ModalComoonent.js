import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/styles';
import '../Assets/Styles/common.scss'

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: 'white',
//     padding: theme.spacing(2, 4, 3),
//     width: '50%', // Adjust the width as needed
//   },
// }));

const ModalComoonent = (props) => {
  // const classes = useStyles();
  const [open, setOpen] = useState(props.showModal);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.onClose(true)
  };

  const body = (
    <div className='modalBody'>
      <p id="simple-modal-description">
        <h1 className='heading-text-level2'>Delete {props.details.title}?</h1>
        <hr/>
      </p>
      <div className='header-button'>
      <Button variant="contained" color="error" className='button' onClick={()=>props.onDelete(true)}>
        Delete
      </Button>
      <Button variant="contained" color="primary" onClick={handleClose}>
        Cancel
      </Button>
      </div>
      
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalComoonent;
