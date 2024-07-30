const {getAllProducts}=require("../controller/")

const getAllProducts = async () => { try {
    const result = await getAllProducts()
} catch (error) {
    res.status(404).json("something get wrong")
} }