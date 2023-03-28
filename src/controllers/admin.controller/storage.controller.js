const StorageModel = require("../../models/storage.model");
const ProductModel = require("../../models/product.model");

const StorageController = {};

StorageController.storagePage = async (req, res) => {
    try {
        const storages = await StorageModel.getAllStorage();
        const products = await ProductModel.getAllProductNotDelete();
        return res.render("pages/storage", { domain: global.domain, branch: global.branch, storages, products, user: req.session.user });
    } catch (error) {
    }
};

StorageController.getStorage = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const storage = await StorageModel.getStorage(parseInt(id));
            if (!storage) return res.status(200).json({ status: 'error', message: "Not found" });
            return res.status(200).json({ status: 'success', data: storage });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

StorageController.addStorage = async (req, res) => {
    try {
        const { idProduct, quantity } = req.body;
        if (idProduct && quantity) {
            const check = await StorageModel.checkHasStorage(parseInt(idProduct), parseInt(global.branch.id))
            if (!check) {
                const rs = await StorageModel.addStorage(parseInt(idProduct), parseInt(quantity), parseInt(global.branch.id));
                if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
                return res.status(200).json({ status: 'success' });
            }
            return res.status(200).json({ status: 'error', message: "Product in storage" });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

StorageController.updateStorage = async (req, res) => {
    try {
        const { quantity } = req.body;
        const id = req.params.id;
        if (id && quantity) {
            const rs = await StorageModel.updateStorage(parseInt(id), parseInt(quantity));
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

StorageController.deleteStorage = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const rs = await StorageModel.deleteStorage(parseInt(id));
            if (!rs) return res.status(200).json({ status: 'error', message: "Has error" });
            return res.status(200).json({ status: 'success' });
        }
        return res.status(400);
    } catch (error) {
        return res.status(200).json({ status: 'error', message: error.message });
    }
};

module.exports = StorageController;