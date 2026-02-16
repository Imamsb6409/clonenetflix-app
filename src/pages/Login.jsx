import { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) onLoginSuccess(); // Sinyal ke App.jsx untuk buka gerbang
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/background.jpg')] bg-cover">
      <div className="bg-black/65 h-full w-full flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-black/80 p-12 rounded-lg w-96 border border-gray-800">
          <h1 className="text-white text-3xl font-bold mb-8">Sign In</h1>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-600"
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button className="w-full bg-red-600 text-white p-3 rounded font-bold hover:bg-red-700 transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
