import StaffService from '../services/staff.js';
import ResponseModel from '../models/response/ResponseModel.js';

const StaffController = {

    async getAll(req, res, next) {
        try {
            const result = await StaffService.getAll();
            res.json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving staff information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await StaffService.getById(req.params.id);
            return res.json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving staff id!'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await StaffService.createStaff(req.body);
            return res.json(new ResponseModel(200, ['Staff created successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error creating staff!' + e], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await StaffService.updateStaff(req.body);
            return res.json(new ResponseModel(200, ['Staff information updated successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error updating staff information!'], null));
        }
    },

    async delete(req, res, next) {
        const staffId = req.params.id;
        try {
            const result = await StaffService.deleteStaff(staffId);
            return res.json(new ResponseModel(200, ['Staff deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting staff!'], null));
        }
    },

    async deleteAll(req, res, next) {
        const staffIds = req.body.staffIds;
        try {
            const result = await StaffService.deleteAllStaff(staffIds);
            return res.status(200).json(new ResponseModel(200, ['Staff deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting staff!'], null));
        }
    },
};

export default StaffController;
