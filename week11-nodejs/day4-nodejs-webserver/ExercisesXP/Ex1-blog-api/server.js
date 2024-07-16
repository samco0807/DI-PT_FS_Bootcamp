import { express } from "express";
const bodyParser = require("body-parser");

const app = express();

let data = [
  {
    id: "1",
    title: " iPhone 15 Pro Max, the best Apple ever",
    content: "The Best iPhone",
  },
  {
    id: "2",
    title: "Xiaomi 13 Pro 5G, the best Xiaomi ever",
    content: "The Xiaomi worth it",
  },
];

app.use(bodyParser.json()); // parse json body content

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// GET /posts: Return a list of all blog posts.
app.get("/api/posts", (req, res) => {
  res.json(data);
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get("/api/posts:id", (req, res) => {
  const newData = {
    id: data.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  data.push(newData);
  res.status(201).json(newData);
});

// POST /posts: Create a new blog post.
app.get("/api/data/:id", (req, res) => {
  const id = Number(req.params.id);
  const posts = data.find((post) => post.id === id);
  if (!data) {
    return res.status(404).send("Post not found");
  }
  res.json(posts);
});

// PUT /posts/:id: Update an existing blog post.
app.put("/api/data/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = data.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).send("Post not found");
  }
  const updatedData = {
    id: data[index].id,
    name: req.body.name,
    price: req.body.pr,
  };
  (data[index] = updatedData), res.status(200).json("Post updated");
});

// DELETE /posts/:id: Delete a blog post.
app.delete("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = data.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).send("Post not found");
  }
  data.splice(index, 1);
  res.status(200).json("Post deleted");
});
