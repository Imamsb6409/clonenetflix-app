import { useEffect, useState } from "react";
import axios from "../api/axios";

const Hero = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${fetchUrl}&api_key=${import.meta.env.VITE_TMDB_KEY}`);
      
      // Ambil satu film secara acak dari hasil trending
      const randomIndex = Math.floor(Math.random() * request.data.results.length);
      setMovie(request.data.results[randomIndex]);
    }
    fetchData();
  }, [fetchUrl]);

  // Fungsi untuk memotong teks sinopsis yang terlalu panjang
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header 
      className="relative h-[600px] text-white object-contain bg-cover bg-center"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="ml-8 pt-48 h-48">
        <h1 className="text-5xl font-extrabold pb-4">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <div className="flex space-x-4">
          <button className="cursor-pointer text-black font-bold rounded-sm px-8 py-2 bg-white hover:bg-gray-300 transition">
            Play
          </button>
          <button className="cursor-pointer text-white font-bold rounded-sm px-8 py-2 bg-gray-500/50 hover:bg-gray-800 transition">
            My List
          </button>
        </div>

        <h1 className="w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-20">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      {/* Fade Effect: Memberikan gradasi hitam di bagian bawah banner agar menyatu dengan MovieList */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </header>
  );
};

export default Hero;
