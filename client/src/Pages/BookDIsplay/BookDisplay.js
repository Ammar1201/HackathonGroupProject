import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../constants";
import "./BookDisplay.css";

function BookDisplay() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const bookOnDisplay = books.find((book) => book._id === id);
    setBook(bookOnDisplay);
    console.log(books.find((book) => book._id == id));
    console.log(books);
  }, [id]);
  console.log(id);
  return (
    <div className="book-text">
      { book && 
        <>
          <div className="book-img"style={{backgroundImage:`url(${book.img})`}}></div>
          <h3 className="book-title">{book.name}</h3>
          <p className="book-paragraph">{book.text}</p>
        </>
      }
    </div>
  );
}

export default BookDisplay;
