import { useEffect, useState } from "react";
import axios from "../api/axios";

const MovieList = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${fetchUrl}&api_key=${import.meta.env.VITE_TMDB_KEY}`,
      );
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-white px-10 mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex space-x-4 p-2 no-scrollbar">
        {movies.map((movie) => (
          <div className="flex flex-col">
            <img
              key={movie.id}
              src={`${IMG_BASE}${movie.poster_path}`}
              className="w-44 hover:scale-110 transition-transform duration-300 cursor-pointer rounded-lg shadow-xl"
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
