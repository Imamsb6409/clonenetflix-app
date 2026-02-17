import { useState } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Login from "./pages/Login";
import Hero from "./components/Hero";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-black min-h-screen">
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Navbar onSearch={setSearchQuery} />

          {/* Jika sedang tidak mencari, tampilkan Hero Banner */}
          {!searchQuery && <Hero fetchUrl="/trending/all/week?" />}

          <div className={searchQuery ? "pt-28" : "mt-[-100px] relative z-10"}>
            {searchQuery ? (
              <MovieList
                title="Search Result"
                fetchUrl={`/search/movie?query=${searchQuery}`}
              />
            ) : (
              <>
                <MovieList
                  title="Trending Now"
                  fetchUrl="/trending/all/week?"
                />
                <MovieList
                  title="Netflix Originals"
                  fetchUrl="/discover/tv?with_networks=213"
                />
                <MovieList
                  title="Action Movies"
                  fetchUrl="/discover/movie?with_genres=28"
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
