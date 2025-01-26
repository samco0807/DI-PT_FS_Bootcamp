// Exercise1/controller/controller.js
import {
  _fetchAllPosts,
  _fetchPost,
  _createPost,
  _updatePost,
  _deletePost,
} from "../model/model.js";

export const fetchAllPosts = async (req, res) => {
  try {
    await _fetchAllPosts();
    res.status(200).json({ message: "All posts fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const fetchPost = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await _fetchPost(id);
      res.status(200).json({ message: "Post fetched successfully" });
    }
    res.status(404).json({ message: "Posts not found" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    await _createPost();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    if (title && content) {
      await _updatePost(id);
      res.status(200).json({ message: "Post updated successfully" });
    }
    res.status(404).json({ message: "Impossible update post, post not found" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await _deletePost(id);
      res.status(200).json({ message: "Post deleted successfully" });
    }
    res.status(404).json({ message: "Post not found, impossible to delete" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
