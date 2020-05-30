import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Controller from './controller';
import RegisterClass from './register/RegisterClass';
import RegisterTeacher from './register/RegisterTeacher';
import RegisterStudent from './register/RegisterStudent';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import DataDisplay from './data-control/DataDisplay';

const App = () => {
  
  const [userObj, setUserObj] = useState();
  useEffect(() => {
    Controller.setUpOnAccount(whatToDoWithUser);
  }, [])
  const whatToDoWithUser = (user) => { 
    if (user) {
      console.log("yeet user");
      console.log(user);
    } else {
      console.log("no user");
      console.log(user);
    }
  }

  const handleRegisterClassRequest = (className) => {
    Controller.registerClass(className);
  }
  const handleRegisterTeacherRequest = (teacherNameInfo) => {
    const { lastName, firstName, salary } = teacherNameInfo;
    Controller.registerTeacher(lastName, firstName, salary);
  }
  const handleRegisterStudentRequest = (studentNameInfo) => {
    const { lastName, firstName, year } = studentNameInfo;
    Controller.registerStudent(lastName, firstName, year);
  }

  const handleSignUpRequest = (signUpInfo) => {
    const { email, password } = signUpInfo;
    Controller.signUpUserEP(email, password);
  }
  const handleSignInRequest = (signInInfo) => {
    const { email, password } = signInInfo;
    Controller.signInUserEP(email, password);
  }
  const handleSignOutRequest = () => {
    Controller.signOutUserEP();
  }

  return (
    <div>
      <h1>Welcome, admin</h1>
      <RegisterClass handleRegisterClassRequest={handleRegisterClassRequest} />
      <RegisterTeacher handleRegisterTeacherRequest={handleRegisterTeacherRequest} />
      <RegisterStudent handleRegisterStudentRequest={handleRegisterStudentRequest} />      
      <SignUp handleSignUpRequest={handleSignUpRequest} />
      <SignIn handleSignInRequest={handleSignInRequest} />
      <SignOut handleSignOutRequest={handleSignOutRequest} />
      <DataDisplay />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));