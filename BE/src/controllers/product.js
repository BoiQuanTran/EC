import ProductService from '../services/product.js';
import ResponseModel from '../models/response/ResponseModel.js';

const ProductController = {

    async getAll(req, res, next) {
        try {
            const result = await ProductService.getAll();
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },
    async getProductsPagination(req, res, next) {
        try {
            const page = req.params.page;
            const result = await ProductService.getProductsPagination(page);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },
    async getFilter(req, res, next) {
        try {
            // const page = req.params.page;
            const result = await ProductService.getFilter(req.body);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },
    async getLikeCode(req, res, next) {
        try {
            // const page = req.params.page;
            const result = await ProductService.getProductLikeCode(req.params.code);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },
    async getByCode(req, res, next) {
        try {
            // const page = req.params.page;
            const result = await ProductService.getProductByCode(req.params.code);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },
    async getFeature(req, res, next) {
        try {
            const result = await ProductService.getFeature();
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },
    async getRelatedProducts(req, res, next) {
        try {
            const result = await ProductService.getRelatedProducts(req.params.id);

            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },

    async getById(req, res, next) {
        try {
            const result = await ProductService.getById(req.params.id);
            return res.status(200).json(new ResponseModel(200, [], result));
        } catch (e) {
            res.status(500).json(new ResponseModel(500, ['Error retrieving color information!'], null));
        }
    },

    async create(req, res, next) {
        try {
            const result = await ProductService.createProduct(req.body);
            return res.status(200).json(new ResponseModel(200, ['Product created successfully!'], result));
        } catch (e) {
            console.log(e);
            return res.status(500).json(new ResponseModel(500, ['Error creating product!'], null));
        }
    },

    async update(req, res, next) {
        try {
            const result = await ProductService.updateProduct(req.body);
            // const result_detail = await ProductService.updateProductDetail(req.body);
            return res.status(200).json(new ResponseModel(200, ['Sửa sản phẩm thành công'], {result}));
        } catch (e) {
            console.log(e);
            return res.status(500).json(new ResponseModel(500, ['Lỗi cập nhật thông tin sản phẩm'], null));
        }
    },

    async delete(req, res, next) {
        const productId = req.params.productId;
        try {
            const result = await ProductService.deleteProduct(productId);
            return res.status(200).json(new ResponseModel(200, ['Product deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting product!'], null));
        }
    },

    async deleteAll(req, res, next) {
        const productIds = req.body.productIds;
        try {
            const result = await ProductService.deleteAllProduct(productIds);
            return res.status(200).json(new ResponseModel(200, ['Product deleted successfully!'], result));
        } catch (e) {
            return res.status(500).json(new ResponseModel(500, ['Error deleting product!'], null));
        }
    },
};

export default ProductController;
