import { useState, useEffect } from "react";

const Navbar = ({ onSearch }) => {
  const [show, handleShow] = useState(false);
  const [query, setQuery] = useState("");


  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <nav className={`fixed top-0 w-full p-5 flex justify-between items-center z-50 transition-all duration-500 ${show ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
      <div className="flex items-center space-x-6">
        <h1 className="text-blue-600 font-extrabold text-3xl cursor-pointer tracking-tighter">ISAVIE</h1>
        <ul className="hidden md:flex space-x-4 text-gray-200 text-sm">
          <li className="cursor-pointer hover:text-white transition font-semibold">Home</li>
          <li className="cursor-pointer hover:text-white transition">TV Shows</li>
          <li className="cursor-pointer hover:text-white transition">Movies</li>
          <li className="cursor-pointer hover:text-white transition">New & Popular</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search titles..."
            className="bg-black/50 text-white border border-gray-500 px-3 py-1 text-sm outline-none focus:border-white transition-all w-32 md:w-64"
            value={query}
            onChange={handleSearchChange}
          />
        </div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="Avatar" 
          className="w-8 h-8 rounded cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
