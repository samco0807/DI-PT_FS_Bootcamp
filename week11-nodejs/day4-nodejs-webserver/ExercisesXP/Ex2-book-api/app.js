const express = require("express")

const app = express();

let books = [
  {
    id: 1,
    title: "The world in 10 years",
    author: "Regev Yoshev",
    publishedYear: 2021,
  },
  {
    id: 2,
    title: "Another book",
    author: "Rupha Blinson",
    publishedYear: 2023,
  },
];

app.use(express.json());

app.listen(3000, () => console.log("Listening on port 3000"));

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const id = Number(req.params.bookId);
  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.status(200).send(book);
});



app.post("/api/books"),
  (req, res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
  };
