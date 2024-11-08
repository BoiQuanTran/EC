import ResponseModel from '../models/response/ResponseModel.js';
import SaleOrderService from '../services/saleOrder.js';

const SaleOrderController = {

    async getAll(req, res, next) {
        try {
            const result = await SaleOrderService.getAll(req.user);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving sale order information!'], null));
        }
    },
    async getAllForce(req, res, next) {
        try {
            const result = await SaleOrderService.getAllAdmin();
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving sale order information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await SaleOrderService.getById(req.params.id);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving sale order information!'], null));
        }
    },
    async getFullById(req, res, next) {
        try {
            const result = await SaleOrderService.getFullById(req.params.id);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving sale order information!'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await SaleOrderService.createSaleOrder(req.body);
            return res.status(200).json(new ResponseModel(200, ['Order created successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error creating order!'], null));
        }
    },
    async updateStatus(req, res, next) {
        try {
            const result = await SaleOrderService.updateStatus(res,req.body);
            return res.status(200).json(new ResponseModel(200, ['Order status updated successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error updating order status!'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await SaleOrderService.updateSaleOrder(req.body);
            return res.status(200).json(new ResponseModel(200, ['Order information updated successfully!'], result));
        } catch (e) {
            console.log(e);
            return res.status(500).json(new ResponseModel(500, ['Error updating order information!'], null));
        }
    },

    async delete(req, res, next) {
        const wishlistId = req.params.wishlistId;
        try {
            const result = await SaleOrderService.deleteSaleOrder(wishlistId);
            return res.status(200).json(new ResponseModel(200, ['Sale order deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting sale order!'], null));
        }
    },

    async deleteAll(req, res, next) {
        const wishlistIds = req.body.wishlistIds;
        try {
            const result = await SaleOrderService.deleteAllSaleOrder(wishlistIds);
            return res.status(200).json(new ResponseModel(200, ['Sale order deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting sale order!'], null));
        }
    },
};

export default SaleOrderController;
