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
  
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listener = Controller.setUpOnAccount(whatToDoWithUser);
    return (() => {listener()})
  }, [])

  const whatToDoWithUser = (user) => { 
    if (user) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  }

  return (
    <div>
      <h1>Wacom to Fire Element</h1>
      {authUser ? <h3>You are logged in</h3> : <h3>You ain't logged in</h3>}
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
        </ul>
        <Route exact path={ROUTES.MAIN} component={MainPage} />
        {authUser && <Route path={ROUTES.ADMIN} component={AdminPage} />}
        {authUser && <Route path={ROUTES.TEACHER} component={TeacherPage} />}
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
      <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
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