import UserService from '../services/user.js';
import ResponseModel from '../models/response/ResponseModel.js';

const UserController = {

    async getAll(req, res, next) {
        try {
            const result = await UserService.getAll();
            res.json(result);
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving user information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await UserService.getById(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving user information!'], null));
        }
    },

    async getCurrentUser(req, res, next) {
        try {
            const result = await UserService.getById(req.user._id);
            return res.status(200).json(new ResponseModel(500, [], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error retrieving user information!'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await UserService.createUser(req.body);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error creating user!'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await UserService.updateUser(req.body);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error updating user information!'], null));
        }
    },

    async delete(req, res, next) {
        const userId = req.params.userId;
        try {
            const result = await UserService.deleteUser(userId);
            return res.json(result);
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting user!'], null));
        }
    },
};

export default UserController;
