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

ProductController.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const product = await ProductModel.getProduct(parseInt(id));
            if (!product) return res.status(200).json({ status: 'error', message: "Not found" });
            return res.status(200).json({ status: 'success', data: product });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

ProductController.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const rs = await ProductModel.deleteProduct(parseInt(id));
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

ProductController.updateProduct = async (req, res) => {
    try {
        const { name, image, size, price, idCategory } = req.body;
        const id = req.params.id;
        if (id && name && image && size && price && idCategory) {
            const rs = await ProductModel.updateProduct(parseInt(id), name, image, size, price, parseInt(idCategory));
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

ProductController.addProduct = async (req, res) => {
    try {
        const { name, image, size, price, idCategory } = req.body;
        if (name && image && size && price && idCategory) {
            const rs = await ProductModel.addProduct(name, image, size, price, parseInt(idCategory));
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

module.exports = ProductController;