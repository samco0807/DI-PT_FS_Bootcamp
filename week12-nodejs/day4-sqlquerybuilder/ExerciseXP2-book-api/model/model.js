// Exercise2/model/model.js
import db from "../config/knex.js";

export const _fetchAllBooks = () => {
  try {
    return db("books").select("*");
  } catch (error) {
    console.error("Failed to fetch the books", error);
  }
};

export const _fetchBook = (id) => {
  try {
    return db("books").where({id}).first();
    
  } catch (error) {
    console.error("Failed to retrieve the book", error);
  }
};

export const _createBook = ({ title, author, published_year }) => {
  try {
    return db("books")
      .insert({ title, author, published_year }, [
        "id",
        "title",
        "author",
        "publishedYear",
      ])
      .returning("*");
  } catch (error) {
    console.error("Failed to create the book", error);
  }
};

export const _updateBook = (id, {title, author, published_year}) => {
  try {
    return db("books")
      .where({ id })
      .update({ title, author, published_year }, [
        "id",
        "title",
        "author",
        "publishedYear",
      ]);
  } catch (error) {
    console.error("Failed to update the book", error);
  }
};

export const _deleteBook = (id) => {
  try {
    return db("books").where({ id }).del();
  } catch (error) {
    console.error("Failed to delete the book", error);
  }
};
