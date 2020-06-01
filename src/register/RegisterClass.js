import React, { useState } from 'react';
import Controller from '../controller';

import { TextField, Button } from '@material-ui/core'

const RegisterClass = () => {
  const [enteredClass, setEnteredClass] = useState("");

  const handleEnteredClassChange = (event) => {
    setEnteredClass(event.target.value);
  }
  
  const handleRegisterClassRequest = (className) => {
    Controller.registerClass(className);
  }

  return (
    <div>
      <TextField
        size="small" 
        variant="outlined"
        label="class name"
        onChange={handleEnteredClassChange}
      />
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
        handleRegisterClassRequest(enteredClass);
      }}>
        register class
      </Button>
    </div>
  )
}

export default RegisterClass;