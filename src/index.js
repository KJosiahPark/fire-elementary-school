import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Controller from './controller';
import RegisterClass from './RegisterClass';
import RegisterTeacher from './RegisterTeacher';
import RegisterStudent from './RegisterStudent';
import { SignUpHandle, SignInHandle, SignOut } from './signUpInOutHandle';
import DataDisplay from './DataDisplay';

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
    const { lastName, firstName } = teacherNameInfo;
    Controller.registerTeacher(lastName, firstName);
  }
  const handleRegisterStudentRequest = (studentNameInfo) => {
    const { lastName, firstName } = studentNameInfo;
    Controller.registerStudent(lastName, firstName);
  }

  const handleRemoveClassRequest = (classId) => {
    Controller.removeClass(classId);
  }
  const handleRemoveTeacherRequest = (teacherId) => {
    Controller.removeTeacher(teacherId);
  }
  const handleRemoveStudentRequest = (studentId) => {
    Controller.removeStudent(studentId);
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
      <SignUpHandle handleSignUpRequest={handleSignUpRequest} />
      <SignInHandle handleSignInRequest={handleSignInRequest} />
      <SignOut handleSignOutRequest={handleSignOutRequest}/>
      <DataDisplay
        handleRemoveClassRequest={handleRemoveClassRequest}
        handleRemoveTeacherRequest={handleRemoveTeacherRequest}
        handleRemoveStudentRequest={handleRemoveStudentRequest} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));