import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import {Route,Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignupForm';
import LogInForm from './pages/auth/LoginForm';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const {data} = await axios.get('dj-rest-auth/user/')
      setCurrentUser(data)
    }catch(err){
      console.log(err)
    };
  };

  useEffect(() => {
    handleMount()
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar></NavBar>
          <Container className={styles.Main}>
            <h1>This is a recipe app</h1>
            <Switch>
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route exact path="/profile" render={() => <h1>Profile</h1>} />
              <Route exact path="/login" render={() => <LogInForm /> } />
              <Route exact path="/signup" render={() => <SignUpForm /> } />
              <Route render={() => <p>Sorry, can't find that page</p>} />
            </Switch>
          </Container>
        </div>
      </setCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;