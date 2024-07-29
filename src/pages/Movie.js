import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movieData, setMovieData] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
      .then(resp => resp.json())
      .then(data => {
        console.log("Fetch returned!");
        console.log(data);
        setMovieData(data);
      });
  }, []);

  if (movieData === null) return <p>Loading...</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieData.title}</h1>
        <p>{movieData.time}</p>
        {movieData.genres.map(genre => {
          return <span key={genre}>{genre}</span>
        })}
      </main>
    </>
  );
};

export default Movie;
