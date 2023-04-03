import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <h1 className={styles.title2}>
          <Link to="/" className={styles.title}>
            Cientificos & Filosofos
          </Link>
        </h1>
        {/* <Link to="/movie">Details</Link> */}
        {/* <Link to="/movie">Informacion del filosofo</Link> */}
      </header>
      <main>
        <Switch>
          <Route exact path="/movie">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
