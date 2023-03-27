const OrderModel = require("../../models/order.model");

const OrderController = {};

OrderController.orderPage = async (req, res) => {
    try {
        const orders = await OrderModel.getAllOrder();
        return res.render("pages/order", { domain: global.domain, branch: global.branch, orders });
    } catch (error) {
    }
};

module.exports = OrderController;