import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} currTheme={theme} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
