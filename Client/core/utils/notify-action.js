
import { ToastContainer, toast } from 'react-toastify';
const notifyErrorSystem = () => {
    toast.error('An error has occurred, please contact a technician for repair. Thank you!');
};
const notifyErrorMessage = (message) => {
    toast.error(message, {autoClose: 2000});
};
const notifySuccessMessage = (message) => {
    toast.success(message,{autoClose: 2000} );
};

const notifyWarningMessage = (message) => {
    toast.warning(message,{autoClose: 2000} );
}



export { notifyErrorSystem, notifyErrorMessage, notifySuccessMessage, notifyWarningMessage };
