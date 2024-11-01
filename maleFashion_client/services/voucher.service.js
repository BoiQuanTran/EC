import axiosClient from './base';

const VoucherService = {

    getAll: () => {
        return axiosClient.get('/voucher/get-all');
    },
    getById: (id) => {
        return axiosClient.get(`/voucher/get/${id}`);
    },
    getFullById: (id) =>{
        return axiosClient.get(`/voucher/get-full/${id}`);
    }

};
export default VoucherService;
