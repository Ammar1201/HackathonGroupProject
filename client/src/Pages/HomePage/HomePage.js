import React, { useState } from "react";
import BookList from "../../Components/BookList/BookList"
import { useNavigate } from "react-router-dom";
import logo from "../../Images/Book-icon-bible.png"
import "./HomePage.css";

function HomePage(data) {
  const [categoryInput, setCategoryInput] = useState("");
  const [category, setCategory] = useState(false);
  const [languageInput, setLanguageInput] = useState("");
  const [books, setBooks]= useState([])

  const navigate = useNavigate();

  function handleCategory(event) {
    const input = event.target.value;
    console.log(input);
    setCategoryInput(input);
    displayCategoryBooks();
  }
  function handleLanguage(event) {
    const input = event.target.value;
    console.log(input);
    setLanguageInput(input);
  }
  
  function displayCategoryBooks() {
    setCategory(true)
    // navigate("/BookDisplay")
  }

  const categoryOptions = [
    { value: "", text: "Choose Category" },
    { value: "0-3", text: "0-3" },
    { value: "4-7", text: "4-7" },
    { value: "8-12", text: "8-12" },
  ];

  const languages = [
    { value: "", text: "Choose language" },
    { value: "english", text: "English" },
    { value: "arabic", text: "Arabic" },
    { value: "hebrew", text: "Hebrew" },
    { value: "french", text: "French" },
    { value: "spanish", text: "Spanish" },
  ];

  return (
    <div className="main-homepage">
      <img className="homepage-logo"src={logo} alt="" />
      <h2 className="title">Translating dreams to reality</h2>
      <div className="buttons">
        <div className="drop-down">
          <label>Choose Category</label>
          <select name="Choose Category" onChange={handleCategory}>
            Choose category
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="drop-down">
          <label>Choose Language</label>
          <select name="Choose Language" onChange={handleLanguage}>
            Choose Language
            {languages.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      {
        categoryInput && <div><BookList data={data} category={categoryInput}/></div>
      }
    </div>
  );
}

export default HomePage;
