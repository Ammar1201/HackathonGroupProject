import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../../constants";
import "./BookList.css";

function BookList({ data, category, id }) {
  const navigate = useNavigate();
  console.log(books);
  function handleClick(id) {
    navigate(`/BookDisplay/${id}`);
  }

  return (
    <div>
      {/*books= fake data */}
      <div className="booklist-container">
        <h4 className="booklist-title">Please select a Book</h4>
        <ul>
          {books
            .filter((book) => book.category === category)
            .map((book) => {
              console.log('hello');
              return <li className="book-names" onClick={() => handleClick(book._id)}>{book.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default BookList;
