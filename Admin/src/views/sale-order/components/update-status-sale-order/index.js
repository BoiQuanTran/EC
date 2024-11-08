import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import SALE_ORDER_STATUS from '../../../../core/constant/sale-order-status';
import SaleOrderService from '../../../../services/sale-order.service';
const steps = [
    {
        status:SALE_ORDER_STATUS.PENDING,
        label: 'The customer has just created an order',
        description: ''
    },
    {
        status:SALE_ORDER_STATUS.CONFIRM,
        label: 'Confirm or reject the order',
        description: 'Confirm the order to indicate that the store has received and is processing it; if anything seems inappropriate, you may reject the order'
    },

];

const stepsConfirm = [
    {
        status:SALE_ORDER_STATUS.DELIVERING,
        label: 'Order packaging and dispatch',
        description: 'Once your order is confirmed, we promptly package the product and hand it over to the shipping carrier'
    },
    {
        status:SALE_ORDER_STATUS.COMPLETED,
        label: 'Order complete',
        description: ``
    }
]
const UpdateStatusSaleOrder = ({ saleOrderFull, showStatus, closeUpdateStatus, saveComplete }) => {

    const state = useSelector(state => state.saleOrder);
    const [activeStep, setActiveStep] = React.useState(SALE_ORDER_STATUS.getNumber(saleOrderFull.status));
    const [canceled, setCanceled] = React.useState(saleOrderFull.status == SALE_ORDER_STATUS.CANCELED);


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleCancel = () => {
        setCanceled(true);
    };
    const handleActicve = () => {
        setCanceled(false);
    };

    const handleUpdatStatus = async () => {
        const dataRequest = {
            id: saleOrderFull._id,
            canceled,
            activeStep
        }
        console.log(dataRequest );
        const data = await SaleOrderService.updateStatus(dataRequest);
        if (data.result){
            saveComplete();
            closeUpdateStatus()

        }
    }



    return (
        <Dialog open={showStatus} onClose={closeUpdateStatus} maxWidth={'md'} >
            <Typography variant={'h3'} margin={2}>Order status</Typography>

            <DialogContent>
                <Box sx={{ width: '400px' }}>
                    <Stepper activeStep={activeStep} orientation='vertical'>
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant='caption'> When the customer has received the package, the order status will update to this</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            {index <2 ?  <Button
                                                variant={canceled ? 'outlined' : 'contained'}
                                                onClick={canceled ? handleActicve : handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {!canceled ? 'Continue': 'Tiếp tục đơn hàng'}
                                            </Button> : ''}
                                            {!canceled ? <Button
                                                variant={!canceled ? 'outlined' : 'contained'}
                                                onClick={handleCancel}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === 1 ? 'Reject' : 'Back'}
                                            </Button> : ''}

                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                        { !canceled ? stepsConfirm.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 1 ? (
                                            <Typography variant='caption'> When the customer has received the package, the order status will update to this</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>

                                            <Button
                                                variant={'outlined'}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {'Back'}
                                            </Button>

                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        )) : ''}
                    </Stepper>

                </Box>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'space-between', marginTop: 2 }}>
                <Button onClick={closeUpdateStatus}>Cancel</Button>
                <Button variant={'contained'} onClick={handleUpdatStatus}>Save</Button>
            </DialogActions>
        </Dialog>

    );
};
export default UpdateStatusSaleOrder;
