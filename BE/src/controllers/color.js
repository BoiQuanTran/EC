import ColorService from '../services/color.js';
import ResponseModel from '../models/response/ResponseModel.js';

const ColorController = {

    async getAll(req, res, next) {
        try {
            const result = await ColorService.getAll();
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await ColorService.getById(req.params.id);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await ColorService.createColor(req.body);
            return res.status(200).json(new ResponseModel(200, ['Color created successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error creating color!'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await ColorService.updateColor(req.body);
            return res.status(200).json(new ResponseModel(200, ['Color information updated successfully!'], result));
        } catch (e) {
            console.log(e);
            return res.status(500).json(new ResponseModel(500, ['Error updating color information!'], null));
        }
    },

    async delete(req, res, next) {
        const colorId = req.params.colorId;
        try {
            const result = await ColorService.deleteColor(colorId);
            return res.status(200).json(new ResponseModel(200, ['Color deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting color!'], null));
        }
    },

    async deleteAll(req, res, next) {
        const colorIds = req.body.colorIds;
        try {
            const result = await ColorService.deleteAllColor(colorIds);
            return res.status(200).json(new ResponseModel(200, ['Color deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting color!'], null));
        }
    },
};

export default ColorController;
