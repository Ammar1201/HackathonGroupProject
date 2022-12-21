import React from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import BookDisplay from "./Pages/BookDisplay/BookDisplay.jsx";
import Error from "./Pages/Error/Error.jsx";

const App = () => {
  const [data, error] = useFetch("");

  return (
    <h1>
      <NavBar />
      <Routes>
        <Route data={data} exact path="/" element={<HomePage />} />
        <Route
          data={data}
          exact
          path="/BookDisplay"
          element={<BookDisplay />}
        />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </h1>
  );
};

export default App;
