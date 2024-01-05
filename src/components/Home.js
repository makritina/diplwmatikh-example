// Home.js
import React from "react";
import { Link } from "react-router-dom";
import data from "../books.json";

function Home() {
  return (
    <main style={{ flex: "1" }}>
      <section className="book-list">
        {data.map((book) => (
          <Link to={`/book/${book.id}`}>
            <div key={book.id} className="book-item">
              <div className="book-discount">10%</div>

              <img src={book.imageUrl} alt={book.title} />
              <h2>{book.title}</h2>

              <p className="book-author">Author: {book.author}</p>
              <div className="book-price">
                <span className="original-price">{book.price.toFixed(2)}€</span>
                <span className="discounted-price">
                  {(book.price * 0.9).toFixed(2)}€
                </span>
              </div>
              <button>ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</button>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;
