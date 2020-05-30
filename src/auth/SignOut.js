import React from 'react';
import Controller from '../controller';

const SignOut = (props) => {
  const onSignOut = () => {
    Controller.signOutUserEP();
  };

  return (
    <div>
      <button onClick={ onSignOut } >
        Sign Out
      </button>
    </div>
  )
}

export default SignOut;

