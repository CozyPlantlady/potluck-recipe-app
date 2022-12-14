import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import {Route,Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignupForm';
import LogInForm from './pages/auth/LoginForm';
import RecipeCreateForm from './pages/recipes/RecipeCreateForm';

function App() {

  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <Container className={styles.Main}>
        <h1>This is a recipe app</h1>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/profiles" render={() => <h1>Profile</h1>} />
          <Route exact path="/login" render={() => <LogInForm /> } />
          <Route exact path="/signup" render={() => <SignUpForm /> } />
          <Route exact path="/recipes/create" render={() => <RecipeCreateForm /> } />
          <Route render={() => <p>Sorry, can't find that page</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;