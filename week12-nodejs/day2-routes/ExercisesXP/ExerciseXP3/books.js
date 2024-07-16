const books = require('../data.js')

const getBooks = (req, res) => {
    res.json(books)
}

const getBook = (req, res) => {
    const id = Number(req.params.bookId)
    const book = books.find(book => book.id === id)

    if (!book) {
        return res.status(404).send('Book not found')
    }
    res.json(book)
}

const createBook = (req, res) => {
    const newBook = {
        id: books.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    books.push(newBook)
    res.status(201).json(newBook)
}

const updateBook = (req, res) => {
    const id = Number(req.params.bookID)
    const index = books.findIndex(book => book.id === id)
    const updatedBook = {
        id: books[index].id,
        name: req.body.name,
        price: req.body.price
    }

    books[index] = updatedBook
    res.status(200).json('Book updated')
}

const deleteBook = (req, res) => {
    const id = Number(req.params.bookId)
    const index = books.findIndex(book => book.id === id)
    books.splice(index, 1)
    res.status(200).json('Book deleted')
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}