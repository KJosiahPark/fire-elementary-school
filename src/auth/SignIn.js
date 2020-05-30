import React, { useEffect, useState } from 'react';
import { useInputChange } from '../fakeHooks';
import Controller from '../controller';

const SignIn = (props) => {
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
  
  const handleSignInRequest = (signInInfo) => {
    const { email, password } = signInInfo;
    Controller.signInUserEP(email, password);
  }

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

export default SignIn;