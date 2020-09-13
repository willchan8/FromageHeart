import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import '../styles/App.css';

const useStyles = makeStyles(theme => ({
  form: {
    
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <>
      <div>
        Contact Us
      </div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="outlined-helperText"
          label="Name"
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Message"
          multiline
          rows={4}
          placeholder="Type your message here..."
          variant="outlined"
        />
      </form>
    </>
  );
}

export default Contact;