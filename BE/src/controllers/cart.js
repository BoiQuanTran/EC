import ResponseModel from '../models/response/ResponseModel.js';
import CartService from '../services/cart.js';

const CartController = {

    async getAll(req, res, next) {
        try {
            const result = await CartService.getAll(req.user);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving shopping cart information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await CartService.getById(req.params.id);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving shopping cart information!'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await CartService.createItemCart(req.body);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error creating shopping cart!'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await CartService.updateCart(req.body);
            // return res.status(200).json(new ResponseModel(200, ['Shopping cart updated successfully!'], result));
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            console.log(e);
            return res.status(500).json(new ResponseModel(500, ['Error updating shopping cart!'], null));
        }
    },

    async delete(req, res, next) {
        const cartId = req.params.cartId;
        try {
            const result = await CartService.deleteCart(cartId);
            return res.status(200).json(new ResponseModel(200, ['Removed product from cart successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error removing product from cart!'], null));
        }
    },

    async deleteAll(req, res, next) {
        const cartIds = req.body.cartIds;
        try {
            const result = await CartService.deleteAllCart(cartIds);
            return res.status(200).json(new ResponseModel(200, ['Removed product from cart successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error removing product from cart!'], null));
        }
    },
};

export default CartController;
