const CategoryModel = require("../../models/category.model");
const ProductModel = require("../../models/product.model");

const CategoryController = {};

CategoryController.categoryPage = async (req, res) => {
    try {
        const categories = await CategoryModel.getAllCategory();
        return res.render("pages/category", { domain: global.domain, branch: global.branch, categories, user: req.session.user });
    } catch (error) {
    }
};

CategoryController.getCategory = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const category = await CategoryModel.getCategory(parseInt(id));
            if (!category) return res.status(200).json({ status: 'error', message: "Not found" });
            return res.status(200).json({ status: 'success', data: category });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

CategoryController.updateCategory = async (req, res) => {
    try {
        const { category } = req.body;
        const id = req.params.id;
        if (id && category) {
            const rs = await CategoryModel.updateCategory(parseInt(id), category);
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

CategoryController.deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const products = await ProductModel.getProductWithCategory(parseInt(id));
            if (products.length > 0) {
                return res.status(200).json({ status: 'error', message: 'Hãng đang được sửa dụng' });
            } else {
                const rs = await CategoryModel.deleteCategory(parseInt(id));
                if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
                return res.status(200).json({ status: 'success' });
            }
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

CategoryController.addCategory = async (req, res) => {
    try {
        const category = req.body.category;
        if (category) {
            await CategoryModel.addCategory(category);
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

module.exports = CategoryController;