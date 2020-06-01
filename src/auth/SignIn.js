import React, { useEffect, useState } from 'react';
import { useInputChange } from '../fakeHooks';
import Controller from '../controller';

import { Typography, TextField, Button } from '@material-ui/core'

import { withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

const SignIn = withRouter((props) => {
  const [signInInfo, setSignInInfo, resetInfo] = useInputChange({ email: "", password: "" });
  const [isInvalid, setInvalid] = useState(true);

  useEffect(() => {
    setInvalid(signInInfo.email === "" || signInInfo.password.length < 6);
  }, [signInInfo])

  const onSubmit = (event) => {
    handleSignInRequest(signInInfo);
    // reset state
    resetInfo();
    setInvalid(true);
  };
  
  const handleSignInRequest = (signInInfo) => {
    const { email, password } = signInInfo;
    Controller.signInUserEP(email, password)
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
        Sign in
      </Typography>
      <TextField
        variant="outlined"
        type="text"
        name="email"
        label="email"
        value={signInInfo.email}
        onChange={setSignInInfo} />
      <TextField
        variant="outlined"
        type="password"
        name="password"
        label="password"
        value={signInInfo.password}
        onChange={setSignInInfo} />
      <Button variant="contained" color="primary" disabled={isInvalid} onClick={
        onSubmit
      }>
        sign in
      </Button>
    </div>
  )
})

export default SignIn;