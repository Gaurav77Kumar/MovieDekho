import { useState } from "react";
import Home from "./pages/Home";
import "./css/App.css"
import MovieCards from "./components/MovieCards";
import {Routes, Route} from "react-router-dom"
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MovieProvider>
   
      <Navbar />
   
    <main className="main-content">
    <Routes>
    <Route path = "/" element={<Home />} />
    <Route path = "/favorites" element={<Favorite />} />


    </Routes>

    </main>
   </MovieProvider>
    
  );
}

export default App;
