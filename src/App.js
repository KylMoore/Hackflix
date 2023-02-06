import "./App.css";

import Catalogue from "./Components/Catalogue";
import MovieDetails from "./Components/MovieDetails";
import ErrorPage from "./Components/ErrorPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
      {/* create paths allowing us to render different things depending on the URL */}
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/movie/:movieID" element={<MovieDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

// on component mount (useEffect)...
// Fetch list of popular movies from certain year from TMDB API with axios
// store those movies in state (useState)
// map through the movies state to render JSX with the movie posters (movie component?)

// load movies/movieID where movie is is the movies ID
// load a component that calls or API with the movies id to get the details about that movie
// put those details on the page
