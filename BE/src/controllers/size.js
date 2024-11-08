import SizeService from '../services/size.js';
import ResponseModel from '../models/response/ResponseModel.js';

const SizeController = {

    async getAll(req, res, next) {
        try {
            const result = await SizeService.getAll();
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving size information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await SizeService.getById(req.params.id);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving size information!'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await SizeService.createSize(req.body);
            return res.status(200).json(new ResponseModel(200, ['Size created successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error creating size!'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await SizeService.updateSize(req.body);
            return res.status(200).json(new ResponseModel(200, ['Size information updated successfully!'], result));
        } catch (e) {
            console.log(e);
            return res.status(500).json(new ResponseModel(500, ['Error updating size information!'], null));
        }
    },

    async delete(req, res, next) {
        const sizeId = req.params.sizeId;
        try {
            const result = await SizeService.deleteSize(sizeId);
            return res.status(200).json(new ResponseModel(200, ['Size deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting size!'], null));
        }
    },

    async deleteAll(req, res, next) {
        const sizeIds = req.body.sizeIds;
        try {
            const result = await SizeService.deleteAllSize(sizeIds);
            return res.status(200).json(new ResponseModel(200, ['Size deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting size!'], null));
        }
    },
};

export default SizeController;
