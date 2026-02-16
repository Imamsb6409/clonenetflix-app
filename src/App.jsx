import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="bg-black min-h-screen">
        {isLoggedIn ? (
          <h1 className="text-white text-center text-6xl">Welcome Back</h1>
        ) : (
          <Login onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </div>
    </>
  );
}

export default App;
