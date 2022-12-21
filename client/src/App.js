import React from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import BookDisplay from "./Pages/BookDIsplay/BookDisplay";
import Error from "./Pages/Error/Error";
import About from "./Pages/About/About";

const App = () => {
  const [data, error] = useFetch("");

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/BookDisplay/:id" element={<BookDisplay />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
