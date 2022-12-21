import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { books } from "../../constants";
import "./BookDisplay.css"

function BookDisplay() {
  const { id } = useParams();
  useEffect(()=>{
    console.log(books.find((book) => book._id == id));
    console.log(books);
  }, [id])
  console.log(id);
  return <div className="book-text">{books.find((book) => book._id === id)?.text}</div>;
}

export default BookDisplay;
