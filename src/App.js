import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container"


function App() {
  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <Container className={styles.Main}>
        <h1>This is a recipe app</h1>
      </Container>
    </div>
  );
}

export default App;