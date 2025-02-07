import React from "react";

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  // properties
  private books: Book[] = [];

  constructor() {
    this.books = [];
  }
  //  methods
  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): string {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      return `Title ${book.title} Author ${book.author} isbn: ${book.isbn} Published year: ${book.publishedYear} Genre: ${book.genre}`;
    }
    return "Book not found";
  }

  protected getBooks(): Book[] {
    return this.books;
  }
}

class DigitalLibrary extends Library {
  // properties
  readonly website: string;
  constructor(website: string) {
    super();
    this.website = website;
  }
  // methods
  public listBooks(): string[] {
    return this.getBooks().map((book) => book.title);
  }
}

const digitalLibrary = new DigitalLibrary("www.mydigitallibrary.com");

digitalLibrary.addBook({
  title: "Harry Potter and the chamber of secrets",
  author: "J.K Rowling",
  isbn: "10,0545656708",
  publishedYear: 1999,
  genre: "Fantasy",
});
digitalLibrary.addBook({
  title: "Harry Potter: The deathly Hallows",
  author: "J.K Rowling",
  isbn: "10,0545139708",
  publishedYear: 2007,
  genre: "Fantasy",
});

const DailyChallenge = () => {
  return (
    <>
      <h1>Digital Library Details</h1>;
      <h2>Website: {digitalLibrary.website} </h2>
      <h3>Books in the Library:</h3>
      <ul>
        {digitalLibrary.listBooks().map((title, index) => (
          <li key={index}>{title}</li>
        ))}{" "}
      </ul>
    </>
  );
};

export default DailyChallenge;
