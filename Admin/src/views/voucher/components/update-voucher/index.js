import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { closeUpdateVoucher, setSelected } from '../../slice';
import { FormHelperText, Grid, Tooltip, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import LoadingSpinner from '../../../../ui-component/loading';
import VoucherService from '../../../../services/voucher.service';

const UpdateVoucher = ({ saveCompleteEvent }) => {
    const [voucherOld, setVoucherOld] = useState(undefined);
    const state = useSelector(state => state.voucher);
    const dispatch = useDispatch();
    useEffect(() => {
        getVoucherById();
    }, [state.selected[0]]);
    const getVoucherById = async () => {
        if (state.selected[0]) {
            const data = await VoucherService.getById(state.selected[0]);
            if (data.result) {
                setVoucherOld(data.result);
            } else {
                dispatch(closeUpdateVoucher());
            }
        }

    };
    const handleClose = () => {
        dispatch(closeUpdateVoucher());
    };
    const handleUpdateVoucher = async (values) => {
        const data = await VoucherService.update({ ...voucherOld, ...values });
        if (data) {
            saveCompleteEvent();
            dispatch(closeUpdateVoucher());
            dispatch(setSelected([]));
        }
    };
    return (

        <Dialog open={state.updateVoucher} onClose={handleClose}>
            <Typography variant={'h3'} margin={2}>Update Voucher</Typography>
            {!voucherOld ? <LoadingSpinner /> :
                <Formik
                    initialValues={{
                        code: voucherOld.code,
                        description: voucherOld.description,
                        condition: voucherOld.condition,
                        percent: voucherOld.percent,
                        quantity: voucherOld.quantity,
                        startDate: voucherOld.startDate.split('T')[0],
                        endDate: voucherOld.endDate.split('T')[0]
                    }}
                    validationSchema={Yup.object().shape({
                        code: Yup.string().max(255).required('Please enter voucher name.'),
                        description: Yup.string().required('Please enter description.'),
                        condition: Yup.number().required('Condition can not be blank.'),
                        percent: Yup.number().required('Please enter promotional percentage.'),
                        startDate: Yup.date().required('Please enter start date.'),
                        endDate: Yup.date().required('Please enter end date.'),
                        quantity: Yup.number().required('Please enter number of vouchers issued.')
                    })}
                    onSubmit={handleUpdateVoucher}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <DialogContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField fullWidth
                                                   value={values.code}
                                                   onChange={handleChange}
                                                   label='Voucher code'
                                                   name='code'
                                                   size='small'
                                        />
                                        {touched.code && errors.code && (
                                            <FormHelperText error>
                                                {errors.code}
                                            </FormHelperText>
                                        )}

                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth
                                                   value={values.quantity}
                                                   onChange={handleChange}
                                                   label='Number of vouchers issued'
                                                   name='quantity'
                                                   size='small'
                                                   type='number'
                                        />
                                        {touched.quantity && errors.quantity && (
                                            <FormHelperText error>
                                                {errors.quantity}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Tooltip title={'Total order value must be above this level'} placement='top'>
                                            <TextField fullWidth
                                                       value={values.condition}
                                                       onChange={handleChange}
                                                       label='Condition'
                                                       name='condition'
                                                       size='small'
                                                       type='number'
                                            />
                                        </Tooltip>
                                        {touched.condition && errors.condition && (
                                            <FormHelperText error>
                                                {errors.condition}
                                            </FormHelperText>
                                        )}

                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth
                                                   value={values.percent}
                                                   onChange={handleChange}
                                                   label='Promotional percentage'
                                                   name='percent'
                                                   size='small'
                                                   type='number'
                                        />
                                        {touched.percent && errors.percent && (
                                            <FormHelperText error>
                                                {errors.percent}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth
                                                   value={values.startDate}
                                                   onChange={handleChange}
                                                   label='Start date'
                                                   name='startDate'
                                                   size='small'
                                                   type={'date'}
                                        />
                                        {touched.startDate && errors.startDate && (
                                            <FormHelperText error>
                                                {errors.startDate}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth
                                                   value={values.endDate}
                                                   onChange={handleChange}
                                                   label='End date'
                                                   name='endDate'
                                                   size='small'
                                                   type={'date'}
                                        />
                                        {touched.endDate && errors.endDate && (
                                            <FormHelperText error>
                                                {errors.endDate}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth
                                                   value={values.description}
                                                   onChange={handleChange}
                                                   multiline
                                                   rows={4}
                                                   label='Description'
                                                   name='description'
                                                   size='small'
                                        />
                                        {touched.description && errors.description && (
                                            <FormHelperText error>
                                                {errors.description}
                                            </FormHelperText>
                                        )}
                                    </Grid>


                                </Grid>
                            </DialogContent>
                            <DialogActions sx={{ justifyContent: 'space-between', marginTop: 2 }}>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type={'submit'}>Update</Button>
                            </DialogActions>
                        </form>
                    )}
                </Formik>
            }
        </Dialog>

    );

};
export default UpdateVoucher;
