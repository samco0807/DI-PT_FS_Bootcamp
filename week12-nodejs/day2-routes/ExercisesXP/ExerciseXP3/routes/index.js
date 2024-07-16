const express = require('express');
const { Router } = require("express");
const router=Router()

const app=express()

const { 
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook 
} = require('./routes/index')

router.get('/', getBooks)
router.get('/:bookId', getBook)
router.post('/', createBook) 
router.put('/:bookId', updateBook) 
router.delete('/:bookId', deleteBook)

module.exports=router

