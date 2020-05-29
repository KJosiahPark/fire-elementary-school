import React, { useEffect, useState } from 'react';
import { useInputChange } from './fakeHooks'

const SignInOutHandle = (props) => {
  const { handleSignUpRequest } = props;

  const [signUpInfo, setSignUpInfo] = useInputChange({email:"", password:""});
  const [isInvalid, setInvalid] = useState(true);
  
  useEffect(() => {
    setInvalid(signUpInfo.email === "" || signUpInfo.password === "");
  }, [signUpInfo])

  return (
    <div>
      <input type="text" name="email" value={signUpInfo.email} onChange={setSignUpInfo} />
      <input type="password" name="password" value={signUpInfo.password} onChange={setSignUpInfo} />
      <button disabled={isInvalid} onClick={() => {
        handleSignUpRequest(signUpInfo);
      }}>
        sign up
      </button>
    </div>
  )
}

export default SignInOutHandle;

