import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../books.json";

function BookDetail() {
  const { id: bookId } = useParams();
  const book = data.find((b) => b.id.toString() === bookId);

  if (!book) return <div>Book not found</div>;

  return (
    <div className="bookDetails-wrapper">
      {/* Add the img tag inside the Link here */}
      <Link to="/" className="back-to-home-button">
        <img src="/assets/home.svg" alt="Home" className="home-icon" /> Home
      </Link>

      <div className="book-inner-container">
        <img
          className="book-inner-image"
          src={`/${book.imageUrl}`}
          alt={book.title}
        />
        <div className="book-inner-details">
          <h2 className="book-inner-title">Title: {book.title}</h2>
          <h3 className="book-inner-author">Author: {book.author}</h3>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
