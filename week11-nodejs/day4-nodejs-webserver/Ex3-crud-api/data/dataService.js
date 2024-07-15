import axios from "axios";

export const fetchPosts = () => {
  axios.get("/", (req, res) => {
    res.send("GET request to the homepage");
  });
};
