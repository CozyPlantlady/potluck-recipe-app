import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import {Route,Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignupForm';
import LogInForm from './pages/auth/LoginForm';
import RecipeCreateForm from './pages/recipes/RecipeCreateForm';
import RecipePage from './pages/recipes/RecipePage';
import RecipesPage from './pages/recipes/RecipesPage';
import RecipeEditForm from './pages/recipes/RecipeEditForm';
import ProfilePage from './pages/profiles/ProfilePage';

function App() {

  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <RecipesPage 
            message="Sorry, didn't find anything. Try with different keyword."/>} />
          <Route exact path="/profiles" render={() => <h1>Profile</h1>} />
          <Route exact path="/login" render={() => <LogInForm /> } />
          <Route exact path="/signup" render={() => <SignUpForm /> } />
          <Route exact path="/recipes/create" render={() => <RecipeCreateForm /> } />
          <Route exact path="/recipes/:id" render={()=> <RecipePage />} />
          <Route exact path="/recipes/:id/edit" render={() => <RecipeEditForm /> } />
          <Route exact path="/profiles/:id" render={()=> <ProfilePage /> } />
          <Route render={() => <p>Sorry, can't find that page</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;