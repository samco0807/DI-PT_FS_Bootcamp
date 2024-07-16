import express from express
import dataService from "./data/dataService"
import { axios } from "axios";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});


app.get("/posts", async (req, res) => {
  try {
    const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
    const posts = response.data
    res.json(posts);
    console.log("The data has been successfully retrieved");
    }
   catch (error) {
    console.log("Error fetching posts: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});