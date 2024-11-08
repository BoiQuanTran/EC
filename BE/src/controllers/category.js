import CategoryService from '../services/category.js';
import ResponseModel from '../models/response/ResponseModel.js';

const CategoryController = {

    async getAll(req, res, next) {
        try {
            const result = await CategoryService.getAll();
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving category information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await CategoryService.getById(req.params.id);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving category information!'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await CategoryService.createCategory(req.body);
            return res.status(200).json(new ResponseModel(200, ['Category created successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error creating category!'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await CategoryService.updateCategory(req.body);
            return res.status(200).json(new ResponseModel(200, ['Category information updated successfully!'], result));
        } catch (e) {
            console.log(e);
            return res.status(500).json(new ResponseModel(500, ['Error updating category information!'], null));
        }
    },

    async delete(req, res, next) {
        const categoryId = req.params.categoryId;
        try {
            const result = await CategoryService.deleteCategory(categoryId);
            return res.status(200).json(new ResponseModel(200, ['Category deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting category!'], null));
        }
    },

    async deleteAll(req, res, next) {
        const categoryIds = req.body.categoryIds;
        try {
            const result = await CategoryService.deleteAllCategory(categoryIds);
            return res.status(200).json(new ResponseModel(200, ['Category deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting category!'], null));
        }
    },
};

export default CategoryController;
