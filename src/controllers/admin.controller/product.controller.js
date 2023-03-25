const ProductModel = require("../../models/product.model");
const CategoryModel = require("../../models/category.model");

const ProductController = {};

ProductController.productPage = async (req, res) => {
    try {
        const products = await ProductModel.getAllProduct();
        const categories = await CategoryModel.getAllCategory();
        return res.render("pages/product", { domain: global.domain, branch: global.branch, products, categories });
    } catch (error) {
        // logger.error(error.stack || error);
    }
};

module.exports = ProductController;