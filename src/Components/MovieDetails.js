import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: "6929f877cb065604d1901a78768cad61",
      },
    }).then((res) => {
      setMovie(res.data);
    });
  }, [movieID]);

  const { original_title, tagline, overview, poster_path } = movie;

  return (
    <>
      <div className="poster">
        <div className="description">
          <h2>{original_title}</h2>
          <h3>{tagline}</h3>
          <p>{overview}</p>
        </div>
        <div className="poster-image">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`Poster for ${original_title}`}
          />
        </div>
      </div>
      <Link to={`/`}>
        <h2>back...</h2>
      </Link>
    </>
  );
};

export default MovieDetails;
