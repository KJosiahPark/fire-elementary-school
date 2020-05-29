import React, { useEffect, useState } from 'react';
import { useInputChange } from '../fakeHooks'

const SignUp = (props) => {
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

export default SignUp;