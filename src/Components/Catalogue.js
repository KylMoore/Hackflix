import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Catalogue = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "6929f877cb065604d1901a78768cad61",
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: "1",
        primary_release_year: 1988,
      },
    }).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <ul className="catalogue">
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Catalogue;
