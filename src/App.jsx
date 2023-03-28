import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
    <header>
      <Link to="/">Home</Link>
      <h1 className={styles.title}>Cientificos & Filosofos</h1>
    </header>
    <main>
      <Switch>
        <router exact path="/movie">
          <MovieDetails />
        </router>
        <router path="/">
          <LandingPage />
        </router>
      </Switch>
    </main>
  </Router>
  );
};
