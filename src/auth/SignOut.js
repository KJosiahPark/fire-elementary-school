import React from 'react';

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

export default SignOut;

