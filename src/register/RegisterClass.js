import React, { useState } from 'react';

const RegisterClass = (props) => {
  const { handleRegisterClassRequest } = props;

  const [enteredClass, setEnteredClass] = useState("");

  const handleEnteredClassChange = (event) => {
    setEnteredClass(event.target.value);
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