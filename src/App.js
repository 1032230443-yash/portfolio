import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

export default function App(){
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/Projects" element={<Projects/>}/>
            <Route path ="/About" element={<About/>}/>
          </Routes>
        </main>
        < Footer />
      </div>
    </Router>
  );
}
