// App/src/component/booklist.tsx
import BookCard from "./BookCard";
import { Book } from "../types";
// import "./BookList.css"; // Import your CSS file for styling

interface BookListProps {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const BookList = ({ books, loading, error }: BookListProps) => {
  if (loading) {
    return <div className="message error">Loading books...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (books.length === 0) {
    return <div className="message">No books found.</div>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
