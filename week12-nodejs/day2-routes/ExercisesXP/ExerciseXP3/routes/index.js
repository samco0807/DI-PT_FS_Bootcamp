const express = require('express');
const app=express
const router=Router()

const { 
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook 
} = require("./books.js")

router.get('/books', getBooks)
router.post('/books', createBook) 
router.put('/books/:id', updateBook) 
router.delete('/books/:id', deleteBook)

module.exports=router

