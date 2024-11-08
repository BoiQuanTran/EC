import Layout from '../components/layout';
import SaleOrderService from '../services/saleOrder.service';
import ProductService from '../services/product.service';
import { PAYMENT_METHOD, SALE_ORDER_STATUS } from '../core/constant';
import { useEffect, useState } from 'react';

export default function HistoryOrderDetail({ saleOrderFull, total, discount, total1 }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Lấy danh sách sản phẩm khi component được mount
        const fetchProducts = async () => {
            const data = await ProductService.getAll(); // Lấy danh sách sản phẩm
            if (data.result) {
                setProducts(data.result); // Cập nhật danh sách sản phẩm vào state
            }
        };

        fetchProducts();
    }, [])
    const getProductName = (productId) => {
        const product = products.find(p => p.code === productId); // Tìm sản phẩm theo ID
        return product ? product.name : 'Tên sản phẩm không có'; // Trả về tên sản phẩm hoặc thông báo nếu không tìm thấy
    }
    const handleCancelOrder = async () => {
        const dataRequest = {
            id: saleOrderFull._id,
            canceled: true,
            activeStep:0
        }
        const data = await SaleOrderService.updateStatus(dataRequest);
        if (data.result){
            window.location.reload()
        }
    }
    const handleCompleteOrder = async() => {
        const dataRequest = {
            id: saleOrderFull._id,
            canceled: false,
            activeStep:3
        }
        const data = await SaleOrderService.updateStatus(dataRequest);
        if (data.result){
            window.location.reload()
        }
    }
    return (
        <Layout>
            {saleOrderFull ?
                <>
                    <section className='breadcrumb-option'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='breadcrumb__text'>
                                        <h4>Order detail</h4>
                                        <div className='breadcrumb__links'>
                                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                            <a href='/history-order'>Order history</a>
                                            <span>Detail</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='shop spad'>
                        <div className='container-fluid '>
                            <div className='container'>
                                <div className='d-flex justify-content-between align-items-center py-3'>
                                    <h2 className='h5 mb-0'>
                                        <a href='#' className='text-muted order-detail-link ' /> Order
                                        #{saleOrderFull.code}
                                    </h2>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='card-order-detail-tracking mb-4'>
                                            <div className='card-body'>
                                                <div className='mb-3 d-flex justify-content-between'>
                                                    <div>
                                                        <span
                                                            className='me-3'>{saleOrderFull.createdAt.split('T')[0]}</span>
                                                        <span className='me-3'>#{saleOrderFull.code}</span>
                                                        {/*        <span className='badge rounded-pill bg-info'>*/}
                                                        {/*    SHIPPING*/}
                                                        {/*</span>*/}
                                                    </div>
                                                </div>
                                                {saleOrderFull.status === SALE_ORDER_STATUS.CANCELED ? (
                                                    <div className='text-center'>
                                                        <img className='icon mb-2' src='img/order-status/canceled.png' />
                                                        <p className='font-weight-bold'>Canceled</p>
                                                    </div>
                                                ) : (
                                                    <div className='tracking-card'>
                                                        <div className='row d-flex justify-content-center'>
                                                            <div className='col-12'>
                                                                <ul id='progressbar' className='text-center'>
                                                                    <li className={`${SALE_ORDER_STATUS.getNumber(saleOrderFull.status) >= 0 ? 'active' : ''} step0`} />
                                                                    <li className={`${SALE_ORDER_STATUS.getNumber(saleOrderFull.status) >= 1 ? 'active' : ''} step0`} />
                                                                    <li className={`${SALE_ORDER_STATUS.getNumber(saleOrderFull.status) >= 2 ? 'active' : ''} step0`} />
                                                                    <li className={`${SALE_ORDER_STATUS.getNumber(saleOrderFull.status) >= 3 ? 'active' : ''} step0`} />
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='row justify-content-between top'>
                                                            <div className='row d-flex icon-content flex-column'>
                                                                <img className='icon' src='img/order-status/pending.png' />
                                                                <div className='d-flex flex-column order-status'>
                                                                    <p className='font-weight-bold'>Pending</p>
                                                                </div>
                                                            </div>
                                                            <div className='row d-flex icon-content flex-column'>
                                                                <img className='icon' src='img/order-status/confirmed.png' />
                                                                <div className='d-flex flex-column order-status'>
                                                                    <p className='font-weight-bold'>Confirmed</p>
                                                                </div>
                                                            </div>
                                                            <div className='row d-flex icon-content flex-column'>
                                                                <img className='icon' src='img/order-status/delivering.png' />
                                                                <div className='d-flex flex-column order-status'>
                                                                    <p className='font-weight-bold'>Delivering</p>
                                                                </div>
                                                            </div>
                                                            <div className='row d-flex icon-content flex-column'>
                                                                <img className='icon mb-2' src='img/order-status/complete.png' />
                                                                <div className='d-flex flex-column order-status'>
                                                                    <p className='font-weight-bold'>Complete</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-8'>
                                        <div className='card-order-detail mb-4'>
                                            <div className='card-body'>
                                                <table className='table table-borderless'>
                                                    <tbody>
                                                    {saleOrderFull.listDetails ? saleOrderFull.listDetails.map((detail) => {
                                                        const productId = detail.productDetail.code.split(' - ')[0];
                                                        const color = detail.productDetail.code.split(' - ')[1];
                                                        const size = detail.productDetail.code.split(' - ')[2];
                                                        return (<tr key={detail._id}>
                                                            <td>
                                                                <div className='d-flex mb-2'>
                                                                    <div className='flex-shrink-0'>
                                                                        <img
                                                                            src={detail.productDetail.image}
                                                                            alt=''
                                                                            width='40'
                                                                            height='20'
                                                                            className='img-fluid'
                                                                        />
                                                                    </div>
                                                                    <div className='flex-lg-grow-1 ms-3'>
                                                                        <h6 className='small mb-0'>
                                                                            <a href='#'className='text-reset' >
                                                                                <b>{getProductName(productId)}</b>
                                                                            </a>
                                                                        </h6>
                                                                        <span className='small'>
                                                                    Color: {color} - Size: {size}
                                                                </span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>{detail.quantity}</td>
                                                            <td className='text-end'>${detail.price * detail.quantity}</td>
                                                        </tr>);
                                                    }) : ''}
                                                    </tbody>
                                                    <tfoot>
                                                    {/*<tr>*/}
                                                    {/*    <td colSpan='2'>Subtotal</td>*/}
                                                    {/*    <td className='text-end'>$159,98</td>*/}
                                                    {/*</tr>*/}
                                                    {/*<tr>*/}
                                                    {/*    <td colSpan='2'>Shipping</td>*/}
                                                    {/*    <td className='text-end'>$20.00</td>*/}
                                                    {/*</tr>*/}
                                                    {saleOrderFull.voucher ? <tr>
                                                        <td colSpan='2'>Discount (Code: {saleOrderFull.voucher.code}) </td>
                                                        <td className='text-danger text-end'> -${discount} </td>
                                                    </tr> : ''}
                                                    <tr className='fw-bold'>
                                                        <td colSpan='2'>TOTAL</td>
                                                        <td className='text-end'>${total1}</td>
                                                    </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='card-order-detail mb-4'>
                                            <div className='card-body'>
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <h3 className='h6'>Payment Method</h3>
                                                        {saleOrderFull.status === SALE_ORDER_STATUS.CANCELED ? (
                                                            saleOrderFull.paymentMethod === PAYMENT_METHOD.COD ? (
                                                                saleOrderFull.voucher ? (
                                                                    <p>
                                                                        <strong>{saleOrderFull.paymentMethod}</strong><br />                                                                    
                                                                        Total: ${total1}{' '}
                                                                        <span className='badge bg-success rounded-pill'>UNPAID</span>
                                                                    </p>
                                                                ) : (
                                                                    <p>
                                                                        Total: ${total}{' '}
                                                                        <span className='badge bg-success rounded-pill'>UNPAID</span>
                                                                    </p>
                                                                )
                                                            ) : (
                                                                saleOrderFull.voucher ? (
                                                                    <p>
                                                                        <strong>{saleOrderFull.paymentMethod}</strong><br />                                                                        
                                                                        Total: ${total1}{' '}
                                                                        <span className='badge bg-success rounded-pill'>REFUND</span>
                                                                    </p>
                                                                ) : (
                                                                    <p>
                                                                        Total: ${total}{' '}
                                                                        <span className='badge bg-success rounded-pill'>REFUND</span>
                                                                    </p>
                                                                )
                                                            )        
                                                        ) : saleOrderFull.status === SALE_ORDER_STATUS.COMPLETED ? (
                                                            saleOrderFull.paymentMethod === PAYMENT_METHOD.COD ? (
                                                                saleOrderFull.voucher ? (
                                                                    <p>
                                                                        <strong>{saleOrderFull.paymentMethod}</strong><br />                                                                        
                                                                        Total: ${total1}{' '}
                                                                        <span className='badge bg-success rounded-pill'>PAID</span>
                                                                    </p>
                                                                ) : (
                                                                    <p>
                                                                        Total: ${total}{' '}
                                                                        <span className='badge bg-success rounded-pill'>PAID</span>
                                                                    </p>
                                                                )
                                                            ) : (
                                                                saleOrderFull.voucher ? (
                                                                    <p>
                                                                        <strong>{saleOrderFull.paymentMethod}</strong><br />                                                                        
                                                                        Total: ${total1}{' '}
                                                                        <span className='badge bg-success rounded-pill'>PAID</span>
                                                                    </p>
                                                                ) : (
                                                                    <p>
                                                                        Total: ${total}{' '}
                                                                        <span className='badge bg-success rounded-pill'>PAID</span>
                                                                    </p>
                                                                )
                                                            )                                                                                               
                                                        ) : saleOrderFull.paymentMethod === PAYMENT_METHOD.COD ? (
                                                            saleOrderFull.voucher ? (
                                                                <p>
                                                                    <strong>{saleOrderFull.paymentMethod}</strong><br />                                                                    
                                                                    Total: ${total1}{' '}
                                                                    <span className='badge bg-success rounded-pill'>UNPAID</span>
                                                                </p>
                                                            ) : (
                                                                <p>
                                                                    Total: ${total}{' '}
                                                                    <span className='badge bg-success rounded-pill'>UNPAID</span>
                                                                </p>
                                                            )

                                                        ) : (
                                                            saleOrderFull.voucher ? (
                                                                <p>
                                                                    <strong>{saleOrderFull.paymentMethod}</strong><br />                                                                    
                                                                    Total: ${total1}{' '}
                                                                    <span className='badge bg-success rounded-pill'>PAID</span>
                                                                </p>
                                                            ) : (
                                                                <p>
                                                                    Total: ${total}{' '}
                                                                    <span className='badge bg-success rounded-pill'>PAID</span>
                                                                </p>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <h3 className='h6'>Billing address</h3>
                                                        <address>
                                                            <strong>{saleOrderFull.lastName} {saleOrderFull.firstName}</strong>
                                                            <br />
                                                            {saleOrderFull.address}
                                                            <br />
                                                            <span title='Phone'>Phone:</span> {saleOrderFull.phone}
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='card-order-detail mb-4'>
                                            <div className='card-body'>
                                                <h5><strong> Customer Notes</strong></h5>
                                                <p>
                                                    {saleOrderFull.note}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='card-order-detail mb-4'>
                                            <div className='card-body'>
                                                {/*<h3 className='h6'>Shipping Information</h3>*/}
                                                {/*<strong>GiaoHangTietKiem </strong>*/}
                                                {/*<span>*/}
                                                {/*    <a*/}
                                                {/*        href='#'*/}
                                                {/*        className='text-decoration-underline'*/}
                                                {/*        target='_blank'*/}
                                                {/*    >*/}
                                                {/*        #FF1234567890*/}
                                                {/*    </a>{' '}*/}
                                                {/*        <i className='bi bi-box-arrow-up-right' />{' '}*/}
                                                {/* </span>*/}
                                                {/*<hr />*/}
                                                <address>
                                                    <h5><strong> Customer Infomation</strong></h5>
                                                    <br />
                                                    <span title='Address'> Full name: </span><strong>{saleOrderFull.lastName} {saleOrderFull.firstName}</strong>
                                                    <br />
                                                    <span title='Address'> Address: </span>{saleOrderFull.address}
                                                    <br />
                                                    <span title='Phone'>Phone: </span> {saleOrderFull.phone}
                                                </address>
                                            </div>
                                        </div>
                                        {saleOrderFull.status == SALE_ORDER_STATUS.PENDING ?
                                            <button className={'danger-btn w-100'} onClick={handleCancelOrder}>Cancel order</button> : ''}
                                        {saleOrderFull.status == SALE_ORDER_STATUS.DELIVERING ?
                                            <button className={'primary-btn w-100'} onClick={handleCompleteOrder}>Received the goods</button> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                : ''}

        </Layout>
    );
}

export async function getServerSideProps({ query }) {
    const data = await SaleOrderService.getFullById(query.id);

    if (data.result) {
        const dataCreated = data.result.listDetails || [];
        let totalCreated = 0;

        // Tính tổng giá trị của các sản phẩm trong đơn hàng
        dataCreated.forEach(detail => {
            const total = detail.price * detail.quantity;
            totalCreated += total;
        });

        const saleOrderFull = data.result;
        let discountAmount = 0;
        let totalDiscount = totalCreated;

        // Kiểm tra xem đơn hàng có voucher hay không
        if (saleOrderFull.voucher) {
            const voucher = saleOrderFull.voucher; // Voucher đã lưu trong đơn hàng

            // Áp dụng logic giảm giá
            if (voucher.condition <= totalCreated) {
                // Giảm giá theo phần trăm
                discountAmount = (voucher.percent / 100) * totalCreated;
            }

            // Đảm bảo tổng giá trị sau khi áp dụng giảm giá không âm
            totalDiscount = totalCreated - discountAmount;
            if (totalDiscount < 0) {
                totalDiscount = 0;
            }
        }

        return {
            props: {
                saleOrderFull,
                total: totalCreated,
                discount: discountAmount, // Số tiền giảm giá
                total1: totalDiscount,  // Tổng sau khi giảm giá
            },
        };
    }

    return {
        props: {},
    };
}

