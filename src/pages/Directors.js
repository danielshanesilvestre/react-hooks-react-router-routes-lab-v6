import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(resp => resp.json())
      .then(data => {
        console.log("Fetch returned!");
        console.log(data);
        setDirectors(data);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director => {
          return <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => {
                return <li key={movie}>{movie}</li>
              })}
            </ul>
          </article>
        })}
      </main>
    </>
  );
};

export default Directors;
