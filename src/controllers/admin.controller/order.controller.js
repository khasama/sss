const OrderModel = require("../../models/order.model");

const OrderController = {};

OrderController.orderPage = async (req, res) => {
    try {
        const orders = await OrderModel.getAllOrder();
        return res.render("pages/order", { domain: global.domain, branch: global.branch, orders, user: req.session.user });
    } catch (error) {
    }
};

OrderController.getOrderDetail = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const orderDetail = await OrderModel.getOrderDetail(parseInt(id));
            const order = await OrderModel.getOrder(parseInt(id));
            if (orderDetail && order) return res.status(200).json({ status: 'success', data: { order, detail: orderDetail } });
            return res.status(200).json({ status: 'error', message: "Not found" });
        }
    } catch (error) {
    }
};

module.exports = OrderController;