import * as React from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import {
    closeAddProduct,
    generateProductDetail,
    setCategorySelected,
    setDataDetail,
    setListCategory,
    setListColor,
    setListColorSelected,
    setListSize,
    setListSizeSelected,
    setListSupplier,
    setMainImage,
    setSupplierSelected
} from '../../slice';
import {
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { BADGE_PRODUCT } from '../../../../core/constant/data/bagde-product';
import { Autocomplete } from '@mui/lab';
import { PhotoCamera } from '@mui/icons-material';
import { convertBase64 } from '../../../../core/utils/base64';
import { notifyErrorMessage } from '../../../../core/utils/notify-action';
import ProductService from '../../../../services/product.service';
import PropertiesService from '../../../../services/properties.service';

const AddProduct = ({ saveCompleteEvent }) => {
    const state = useSelector(state => state.product);
    const appUI = useSelector(state => state.appUI);
    const dispatch = useDispatch();
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const listData = await PropertiesService.getAll();
        dispatch(setListColor(listData.result.colors || []));
        dispatch(setListSize(listData.result.sizes || []));
        dispatch(setListSupplier(listData.result.suppliers || []));
        dispatch(setListCategory(listData.result.categories || []));
    };
    const handleClose = () => {
        dispatch(closeAddProduct());
    };
    const handleAddProduct = async (values) => {
        const obj = {
            ...values,
            image: state.mainImage,
            supplier: state.supplierSelected,
            category: state.categorySelected,
            listDetails: state.listProductDetail
        };
        const data = await ProductService.create(obj);
        if (data) {
            saveCompleteEvent();
            dispatch(closeAddProduct());
        }
    };
    const handleChangeColorSelected = (event, value) => {
        dispatch(setListColorSelected(value));
        dispatch(generateProductDetail());
    };
    const handleChangeSizeSelected = (event, value) => {
        dispatch(setListSizeSelected(value));
        dispatch(generateProductDetail());
    };
    const handleFileRead = async (event, detail) => {
        if (!validateSizeImage(event)) return;
        const base64 = await convertBase64(event.target.files[0]);
        dispatch(setDataDetail({ event: base64, detail, actionType: 'image' }));
    };
    const handleChangeMainImage = async (event) => {
        if (!validateSizeImage(event)) return;
        const base64 = await convertBase64(event.target.files[0]);
        dispatch(setMainImage(base64));
    };
    const validateSizeImage = (event) => {
        if (event.target.files[0].size > 300000) {
            notifyErrorMessage('The image size is too large!');
            return false;
        }
        return true;
    };


    return (

        <Dialog open={state.addProduct} onClose={handleClose} maxWidth={'md'}>
            <Typography variant={'h3'} margin={2}>Add New Product</Typography>
            <Formik
                initialValues={{
                    name: '',
                    code: '',
                    badge: BADGE_PRODUCT.NOTTHING,
                    star: 5,
                    description: '',
                    exportPrice: 0,
                    salePrice: 0

                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required('Please enter product name.'),
                    code: Yup.string().max(255).required('Please enter product code.')
                })}
                onSubmit={handleAddProduct}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth size='small' error={Boolean(touched.name && errors.name)}
                                    >
                                        <InputLabel htmlFor='product-name'>Product name</InputLabel>
                                        <OutlinedInput
                                            id='product-name'
                                            type='text'
                                            value={values.name}
                                            name='name'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            label='Product name'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth size='small' error={Boolean(touched.code && errors.code)}
                                    >
                                        <InputLabel htmlFor='product-code'>Code</InputLabel>
                                        <OutlinedInput
                                            id='product-code'
                                            type='text'
                                            value={values.code}
                                            name='code'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            label='Code'
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={3}>
                                    <FormControl fullWidth size='small'
                                                 error={Boolean(touched.exportPrice && errors.exportPrice)}
                                    >
                                        <InputLabel htmlFor='product-export'>Selling Price</InputLabel>
                                        <OutlinedInput
                                            type='number'
                                            value={values.exportPrice}
                                            name='exportPrice'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            endAdornment={<InputAdornment position='end'>$</InputAdornment>}
                                            label='Selling Price'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl size='small' fullWidth
                                                 error={Boolean(touched.salePrice && errors.salePrice)}
                                    >
                                        <InputLabel htmlFor='product-sale'>Discounted Price</InputLabel>
                                        <OutlinedInput
                                            type='number'
                                            value={values.salePrice}
                                            name='salePrice'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            endAdornment={<InputAdornment position='end'>$</InputAdornment>}
                                            label='Discounted Price'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl size={'small'} fullWidth>
                                        <InputLabel id='product-supplier'>Supplier</InputLabel>
                                        <Select
                                            id='product-supplier'
                                            onChange={(evt) => dispatch(setSupplierSelected(evt.target.value))}
                                            input={<OutlinedInput label='Supplier' />}
                                        >
                                            {state.listSuppliers.map((supplierItm) => (
                                                <MenuItem
                                                    key={supplierItm._id}
                                                    value={supplierItm}
                                                >
                                                    {supplierItm.sortName + ' - ' + supplierItm.phone}
                                                </MenuItem>
                                            ))}
                                            <MenuItem value={''}>None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl size={'small'} fullWidth>
                                        <InputLabel id='product-category'>Category</InputLabel>
                                        <Select
                                            id='product-category'
                                            onChange={(evt) => dispatch(setCategorySelected(evt.target.value))}
                                            input={<OutlinedInput label='Category' />}
                                        >
                                            {state.listCategories.map((categoryItm) => (
                                                <MenuItem
                                                    key={categoryItm._id}
                                                    value={categoryItm}
                                                >
                                                    {categoryItm.name}
                                                </MenuItem>
                                            ))}
                                            <MenuItem value={''}>None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl fullWidth size='small'>
                                        <InputLabel id='product-badge'>Label</InputLabel>
                                        <Select
                                            labelId='product-badge'
                                            value={values.bagde}
                                            label='Label'
                                            onChange={handleChange}
                                            name='badge'
                                            defaultValue={BADGE_PRODUCT.NOTTHING}
                                        >
                                            <MenuItem value={BADGE_PRODUCT.SALE}>Sale</MenuItem>
                                            <MenuItem value={BADGE_PRODUCT.HOT}>Hot</MenuItem>
                                            <MenuItem value={BADGE_PRODUCT.NEW}>New</MenuItem>
                                            <MenuItem value={BADGE_PRODUCT.NOTTHING}>None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={2} spacing={2}>
                                    <Grid item xs={6}>
                                        <IconButton color='primary' aria-label='upload picture'
                                                    component='label'>
                                            <input hidden accept='image/*'
                                                   onChange={handleChangeMainImage}
                                                   type='file' />
                                            <PhotoCamera />
                                        </IconButton>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <div style={{
                                            backgroundImage: `url(${state.mainImage}`,
                                            width: '100%',
                                            height: '100%',
                                            backgroundSize: 'cover',
                                            borderRadius: appUI.borderRadius
                                        }} />
                                    </Grid>

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField fullWidth
                                               value={values.description}
                                               onChange={handleChange}
                                               label='Description'
                                               multiline
                                               rows={4}
                                               name='description'
                                               size='small'
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                        onChange={handleChangeColorSelected}
                                        multiple
                                        options={state.listColors}
                                        getOptionLabel={(option) => option.name}
                                        defaultValue={state.listColorsSelected || []}
                                        filterSelectedOptions
                                        isOptionEqualToValue={(option, value) => option.name === value.name}
                                        size='small'
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label='Color'
                                                placeholder='Favorites'
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                        onChange={handleChangeSizeSelected}
                                        multiple
                                        options={state.listSizes}
                                        getOptionLabel={(option) => option.name}
                                        defaultValue={state.listSizesSelected || []}
                                        filterSelectedOptions
                                        isOptionEqualToValue={(option, value) => option.name === value.name}
                                        size='small'
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label='Size'
                                                placeholder='Favorites'
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'h4'}>Product detail (SKU, Stock, Cost Price, Selling Price, Discounted Price, Image) </Typography>
                                </Grid>

                                {state.listProductDetail.map((detail) => {
                                    return (
                                        <Grid item xs={24} key={detail.id}>

                                            <Grid container spacing={2}>
                                                <Grid item xs={1.5}>
                                                    <FormControl fullWidth size='small'>
                                                        <OutlinedInput
                                                            type='text'
                                                            placeholder={detail.color.name}
                                                            disabled
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={1.5}>
                                                    <FormControl fullWidth size='small'>
                                                        <OutlinedInput
                                                            type='text'
                                                            placeholder={detail.size.name}
                                                            disabled
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={1.5}>
                                                    <FormControl fullWidth size='small'>
                                                        <OutlinedInput
                                                            type='number'
                                                            value={detail.stock}
                                                            onChange={(event) => dispatch(setDataDetail({
                                                                event,
                                                                detail,
                                                                actionType: 'stock'
                                                            }))}

                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={1.5}>
                                                    <FormControl fullWidth size='small'>
                                                        <OutlinedInput
                                                            type='number'
                                                            value={detail.importPrice}
                                                            onChange={(event) => dispatch(setDataDetail({
                                                                event,
                                                                detail,
                                                                actionType: 'importPrice'
                                                            }))}

                                                            endAdornment={<InputAdornment
                                                                position='end'>$</InputAdornment>}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={1.5}>
                                                    <FormControl fullWidth size='small'>
                                                        <OutlinedInput
                                                            type='number'
                                                            value={detail.exportPrice}
                                                            onChange={(event) => dispatch(setDataDetail({
                                                                event,
                                                                detail,
                                                                actionType: 'exportPrice'
                                                            }))}
                                                            endAdornment={<InputAdornment
                                                                position='end'>$</InputAdornment>}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                
                                                <Grid item xs={1.5}>
                                                    <FormControl fullWidth size='small'>
                                                        <OutlinedInput
                                                            type='number'
                                                            value={detail.salePrice}
                                                            onChange={(event) => dispatch(setDataDetail({
                                                                event,
                                                                detail,
                                                                actionType: 'salePrice'
                                                            }))}
                                                            endAdornment={<InputAdornment
                                                                position='end'>$</InputAdornment>}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid container item xs={2} spacing={2}>
                                                    <Grid item xs={6}>
                                                        <IconButton color='primary' aria-label='upload picture'
                                                                    component='label'>
                                                            <input hidden accept='image/*'
                                                                   onChange={(evt) => handleFileRead(evt, detail)}
                                                                   type='file' />
                                                            <PhotoCamera />
                                                        </IconButton>

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <div style={{
                                                            backgroundImage: `url(${detail.image}`,
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundSize: 'cover',
                                                            borderRadius: appUI.borderRadius
                                                        }} />
                                                    </Grid>

                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    );
                                })}


                            </Grid>

                        </DialogContent>
                        <DialogActions sx={{ justifyContent: 'space-between', marginTop: 2 }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type={'submit'}>Add</Button>
                        </DialogActions>
                    </form>
                )}
            </Formik>

        </Dialog>

    );
};
export default AddProduct;
