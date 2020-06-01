import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, AppBar, Toolbar, Tabs, Tab, Typography, Avatar, Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

// import './index.css';
import Controller from './controller';
import RegisterClass from './register/RegisterClass';
import RegisterTeacher from './register/RegisterTeacher';
import RegisterStudent from './register/RegisterStudent';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
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
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6">
                Fire Elementary School Dashboard
              </Typography>
              <Tabs style={{marginLeft: 'auto'}}>
                <Tab label="Main" component={Link} to ={ROUTES.MAIN} />
                <Tab label="Admin Page" component={Link} to ={ROUTES.ADMIN} />
                {authUser
                ? <Tab label="Sign Out" onClick={() => Controller.signOutUserEP()} />
                : <Tab label="Sign In" component={Link} to ={ROUTES.SIGN_IN} />}
                {authUser &&
                  <Avatar>Me</Avatar>}
              </Tabs>
            </Toolbar>
          </Container>
        </AppBar>
        
        <Container>
          <Route exact path={ROUTES.MAIN} component={MainPage} />
          {/* {authUser && <Route path={ROUTES.TEACHER} component={TeacherPage} />} */}
          {authUser && <Route path={ROUTES.ADMIN} component={AdminPage} />}
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        </Container>
      </Router>
    </div>
  );
}

const MainPage = () => {
  return (
    <div>
      <Typography variant="h3">
        Home Page
      </Typography>
      <DataDisplay trunc={false}/>
    </div>
  );
}

const AdminPage = () => {
  return (
    <div>
      <Typography variant="h3">
        Admin Page
      </Typography>
      <Typography variant="h5">
        Register a Class
      </Typography>
      <RegisterClass />
      <Typography variant="h5">
        Register a Teacher
      </Typography>
      <RegisterTeacher />
      <Typography variant="h5">
        Register a Student
      </Typography>
      <RegisterStudent />
      <DataDisplay trunc={true}/>
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