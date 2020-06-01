import React, { useEffect, useState } from 'react';
import { useInputChange } from '../fakeHooks';
import Controller from '../controller';

import { Typography, TextField, Button } from '@material-ui/core'

import { withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

const SignUp = withRouter((props) => {
  const [signUpInfo, setSignUpInfo, resetInfo] = useInputChange({ email: "", password: "" });
  const [isInvalid, setInvalid] = useState(true);

  useEffect(() => {
    setInvalid(signUpInfo.email === "" || signUpInfo.password.length < 6);
  }, [signUpInfo])

  const onSubmit = (event) => {
    handleSignUpRequest(signUpInfo);
    // reset state
    resetInfo();
    setInvalid(true);
  };

  const handleSignUpRequest = (signUpInfo) => {
    const { email, password } = signUpInfo;
    Controller.signUpUserEP(email, password)
    .then(authUser => {
      props.history.push(ROUTES.MAIN);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div>
      <Typography variant="h5">
        Sign up
      </Typography>
      <TextField
        variant="outlined"
        type="text"
        name="email"
        label="email"
        value={signUpInfo.email}
        onChange={setSignUpInfo} />
      <TextField
        variant="outlined"
        type="password"
        name="password"
        label="password"
        value={signUpInfo.password}
        onChange={setSignUpInfo} />
      <Button variant="contained"
        color="primary"
        disabled={isInvalid}
        onClick={
        onSubmit
      }>
        sign up
      </Button>
    </div>
  )
})

export default SignUp;