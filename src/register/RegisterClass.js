import React, { useState } from 'react';
import Controller from '../controller';

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
      <input
        placeholder="class name"
        onChange={handleEnteredClassChange}
      />
      <button onClick={() => {
        console.log(`${enteredClass}`);
        handleRegisterClassRequest(enteredClass);
      }}>
        register class
      </button>
    </div>
  )
}

export default RegisterClass;