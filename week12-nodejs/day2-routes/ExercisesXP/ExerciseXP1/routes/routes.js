import express from "express"
const router=express.Router()

const homePage = (req, res) => {
  res.send("This is a home page");
};

const aboutPage = (req, res) => {
  res.send("About");
};

router.get("/", homePage)
router.get("/about", aboutPage)

export default router