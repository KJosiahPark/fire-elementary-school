import React, { useEffect, useState } from 'react';
import { useInputChange } from './fakeHooks'

const SignUpHandle = (props) => {
  const { handleSignUpRequest } = props;

  const [signUpInfo, setSignUpInfo, resetInfo] = useInputChange({ email: "", password: "" });
  const [isInvalid, setInvalid] = useState(true);

  useEffect(() => {
    setInvalid(signUpInfo.email === "" || signUpInfo.password === "");
  }, [signUpInfo])

  const onSubmit = (event) => {
    handleSignUpRequest(signUpInfo);
    // reset state
    resetInfo();
    setInvalid(true);
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={signUpInfo.email}
        onChange={setSignUpInfo} />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={signUpInfo.password}
        onChange={setSignUpInfo} />
      <button disabled={isInvalid} onClick={
        onSubmit
      }>
        sign up
      </button>
    </div>
  )
}

const SignInHandle = (props) => {
  const { handleSignInRequest } = props;

  const [signInInfo, setSignInInfo, resetInfo] = useInputChange({ email: "", password: "" });
  const [isInvalid, setInvalid] = useState(true);

  useEffect(() => {
    setInvalid(signInInfo.email === "" || signInInfo.password === "");
  }, [signInInfo])

  const onSubmit = (event) => {
    handleSignInRequest(signInInfo);
    // reset state
    resetInfo();
    setInvalid(true);
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={signInInfo.email}
        onChange={setSignInInfo} />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={signInInfo.password}
        onChange={setSignInInfo} />
      <button disabled={isInvalid} onClick={
        onSubmit
      }>
        sign in
      </button>
    </div>
  )
}

const SignOut = (props) => {
  const { handleSignOutRequest } = props;

  const onSubmit = () => {
    handleSignOutRequest();
  };

  return (
    <div>
      <button onClick={ onSubmit } >
        Sign Out
      </button>
    </div>
  )
}

export { SignUpHandle, SignInHandle, SignOut };

