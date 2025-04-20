// App/src/component/bookcard.tsx
import React from "react";
import { Book } from "../types";
// import "./BookCard.css"; // Import your CSS file for styling

interface BookCardProps {
  book: Book;
}

const placeholderImage = "https://via.placeholder.com/128x192?text=No+Image";

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card">
      <a
        href={book.infoLink}
        target="_blank"
        rel="noopener noreferrer"
        title="See on google books"
      >
        <img
          src={book.thumbnail || placeholderImage}
          alt={`Couverture de ${book.title}`}
          className="book-card-image"
          loading="lazy"
        />
      </a>
      <div className="book-card-body">
        <h5 className="book-card-title" title={book.title}>
          {book.title.length > 50
            ? `${book.title.substring(0, 47)}...`
            : book.title}{" "}
        </h5>
        <p className="book-card-text">Author: {book.authors}</p>
        <p className="book-card-text">Published: {book.publishedYear}</p>
      </div>
    </div>
  );
};

export default BookCard;
