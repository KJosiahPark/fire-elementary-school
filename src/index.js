import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Controller from './controller';
import RegisterClass from './RegisterClass';
import RegisterTeacher from './RegisterTeacher';
import RegisterStudent from './RegisterStudent';
import SignInOutHandle from './SignInOutHandle';
import DataDisplay from './DataDisplay';

const App = () => {
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

  const handleSignUpRequest = (signUpInfo) => {
    const { email, password } = signUpInfo;
    console.log(`i: ${signUpInfo.email}, ${signUpInfo.password}`);
  }

  return (
    <div>
      <h1>Welcome, admin</h1>
      <RegisterClass handleRegisterClassRequest={handleRegisterClassRequest} />
      <RegisterTeacher handleRegisterTeacherRequest={handleRegisterTeacherRequest} />
      <RegisterStudent handleRegisterStudentRequest={handleRegisterStudentRequest} />      
      <SignInOutHandle handleSignUpRequest={handleSignUpRequest} />
      <DataDisplay />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));