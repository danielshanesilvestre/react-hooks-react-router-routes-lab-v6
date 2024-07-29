import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(resp => resp.json())
      .then(data => {
        console.log("Fetch returned!");
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => {
          return <MovieCard
            key={movie.id}
            title={movie.title}
            id={movie.id}
          />
        })}
      </main>
    </>
  );
};

export default Home;
