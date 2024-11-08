import VoucherService from '../services/voucher.js';
import ResponseModel from '../models/response/ResponseModel.js';

const VoucherController = {

    async getAll(req, res, next) {
        try {
            const result = await VoucherService.getAll();
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving voucher information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await VoucherService.getById(req.params.id);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving voucher information!'], null));
        }
    },
    async getByCode(req, res, next){
        try {
            const result = await VoucherService.getByCode(req.params.code);
            console.log(req.params.code);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Invalid voucher code!'], null));
        }
    },

    async getFullById(req, res, next) {
        const result = await VoucherService.getFullById(req.params.id);
        return res.status(200).json(new ResponseModel(200, [], result));
    },
    
    async create(req, res, next) {
        try {
            const result = await VoucherService.createVoucher(req.body);
            return res.status(200).json(new ResponseModel(200, ['Voucher created successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error creating voucher!'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await VoucherService.updateVoucher(req.body);
            return res.status(200).json(new ResponseModel(200, ['Voucher information updated successfully!'], result));
        } catch (e) {
            console.log(e);
            return res.status(500).json(new ResponseModel(500, ['Error updating voucher information!'], null));
        }
    },

    async delete(req, res, next) {
        const voucherId = req.params.voucherId;
        try {
            const result = await VoucherService.deleteVoucher(voucherId);
            return res.status(200).json(new ResponseModel(200, ['Voucher deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting voucher!'], null));
        }
    },

    async deleteAll(req, res, next) {
        const voucherIds = req.body.voucherIds;
        try {
            const result = await VoucherService.deleteAllVoucher(voucherIds);
            return res.status(200).json(new ResponseModel(200, ['Voucher deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting voucher!'], null));
        }
    },
};

export default VoucherController;
