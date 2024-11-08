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
    },
    getByCode: (code) => {
        return axiosClient.get(`/voucher/getByCode/${code}`)
    }

};
export default VoucherService;
