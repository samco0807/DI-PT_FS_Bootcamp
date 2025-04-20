// App/src/app.tsx
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import BookList from "./components/BookList";
import { Book, GoogleBookItem } from "./types";

const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const App = () => {
  const [searchTermInput, setSearchTermInput] = useState<string>("react");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = useCallback(async (query: string) => {
    if (!query) {
      setBooks([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    setBooks([]);

    try {
      const response = await axios.get<{ items?: GoogleBookItem[] }>(
        `${API_BASE_URL}?q=${encodeURIComponent(query)}&maxResults=40`
      );

      if (response.data.items && response.data.items.length > 0) {
        const fetchedBooks: Book[] = response.data.items.map((item) => {
          const year = item.volumeInfo.publishedDate
            ? item.volumeInfo.publishedDate.substring(0, 4)
            : "Unknown published year";

          return {
            id: item.id,
            title: item.volumeInfo.title || "Unknown title",
            authors: item.volumeInfo.authors || ["Unknown author"],
            publishedYear: year,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
          };
        });
        setBooks(fetchedBooks);
      } else {
        setBooks([]);
        setError("No books found.");
      }
    } catch (err) {
      console.error("Error fetching books:", err);

      setError("An error occurred while fetching books.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBooks(searchTermInput);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTermInput, fetchBooks]);

  const handleSearch = (query: string) => {
    setSearchTermInput(query);
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <SearchBox onSearch={handleSearch} initialValue={searchTermInput} />
        <BookList books={books} loading={loading} error={error} />
      </div>
    </>
  );
};

export default App;