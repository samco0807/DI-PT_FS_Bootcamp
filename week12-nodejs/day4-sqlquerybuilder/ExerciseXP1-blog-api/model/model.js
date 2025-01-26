// Exercise1/model/model.js
import db from "../config/knex.js";

export const _fetchAllPosts = () => {
  try {
    db("posts").returning("*");
    console.log("All posts fetched successfully");
  } catch (error) {
    console.error("Failed to fetch the posts");
  }
};
export const _fetchPost = (id) => {
  try {
    db("posts").select(id);
    console.log("Post fetched successfully");
  } catch (error) {
    console.error("Failed to retrieve the post");
  }
};

export const _createPost = () => {
  try {
    db("posts").insert({ title: "", content: "" }, ["id", "title", "content"]);
    console.log("Post created successfully");
  } catch (error) {
    console.error("Failed to create the post");
  }
};

export const _updatePost = (id) => {
  try {
    db("posts")
      .where({ id: id })
      .update({ title: title, content: content }, ["id", "title", "content"]);
  } catch (error) {
    console.error("Failed to update the post");
  }
};

export const _deletePost = (id) => {
  try {
    db("posts").where({ id: id }).del();
  } catch (error) {
    console.error("Failed to delete the post");
  }
};
