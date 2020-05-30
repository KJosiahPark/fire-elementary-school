import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

// import './index.css';
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

  return (
    <div>
      <h1>Wacom to Fire Element</h1>
      <Router>
        <ul>
          <li>
            <Link to={ROUTES.MAIN}>Main</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
          <li>
            <Link to={ROUTES.TEACHER}>Teacher</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </li>
        </ul>
        <Route exact path={ROUTES.MAIN} component={MainPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.TEACHER} component={TeacherPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </Router>
    </div>
  );
}

const MainPage = () => {
  return (
    <div>
      <SignOut />
      <RegisterClass />
      <RegisterTeacher />
      <RegisterStudent />
      <DataDisplay />
    </div>
  );
}

const AdminPage = () => {
  return (
    <div>
      <SignOut />
      <RegisterClass />
      <RegisterTeacher />
      <RegisterStudent />
      <DataDisplay />
    </div>
  );
}

const TeacherPage = () => {
  return (
    <div>
      <SignOut />
      <RegisterClass />
      <RegisterTeacher />
      <RegisterStudent />
      <DataDisplay />
    </div>
  );
}

const SignInPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
}

const SignUpPage = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));