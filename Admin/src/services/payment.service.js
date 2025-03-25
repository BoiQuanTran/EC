import axiosClient from './base';

const PaymentService = {
    create: (paymentInfo ) => {
        return axiosClient.post('/paymentInfo/create', paymentInfo );
    },
    update: (paymentInfo ) => {
        return axiosClient.patch('/paymentInfo/update', paymentInfo );
    },
    delete: (paymentInfoId) => {
        return axiosClient.delete('/paymentInfo/delete', paymentInfoId);
    },
    deleteAll: (paymentInfoIds) => {
        return axiosClient.post('/paymentInfo/delete-all', { paymentInfoIds });
    },
    getAll: () => {
        return axiosClient.get('/paymentInfo/get-all');
    },
    getById: (id) => {
        return axiosClient.get(`/paymentInfo/get/${id}`);
    }

};
export default PaymentService;
