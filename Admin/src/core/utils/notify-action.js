import toast from 'react-hot-toast';

const notifyErrorSystem = () => {
    toast.error('An error has occurred, please contact a technician for repairs. Thank you!', {
        style: {
            borderRadius: '4px',
            height: '60px',
            border: '1px solid red'
        },
        position: 'top-right'
    });
};


const notifyErrorMessage = (message) => {
    toast.error(message, {
        style: {
            borderRadius: '4px',
            border: '1px solid red'
        },
        position: 'top-right'
    });
};
const notifySuccessMessage = (message) => {
    toast.success(message, {
        style: {
            borderRadius: '4px',
            border: '1px solid green'
        },
        position: 'top-right'
    });
};


const notifyErrorMessages = (message) => {
    message.forEach(e => {
        toast.error(e, {
            style: {
                borderRadius: '4px',
                border: '1px solid red'
            },
            position: 'top-right'
        });
    });
};
const notifySuccessMessages = (message) => {
    message.forEach(e => {
        toast.success(e, {
            style: {
                borderRadius: '4px',
                border: '1px solid green'
            },
            position: 'top-right'
        });
    });
};

export { notifyErrorSystem, notifyErrorMessage, notifySuccessMessage, notifyErrorMessages, notifySuccessMessages };
