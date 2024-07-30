const { getAllProducts, insertProduct } = require("../models/productsModel.js");

const _getAllProducts = async (req, res) => {
  try {
    const result = await getAllProducts();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrong" });
  }
};

const _insertProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const result = await insertProduct(name, price);
    // res.json(result);
    _getAllProducts(req, res)
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "something went wrond" });
  }
};

module.exports = {
  _getAllProducts,
  _insertProduct
};
