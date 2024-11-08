import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout';
import { PAYMENT_METHOD, SALE_ORDER_STATUS } from '../core/constant';
import { useEffect, useState } from 'react';
import CartService from '../services/cart_service';
import VoucherService from '../services/voucher.service.js';
// import VoucherService from '../services/voucher.service';
import randomString from '../core/utils/random-string.js';
import SaleOrderService from '../services/saleOrder.service';
import { resetCart } from '../store/feature/UserSlice';
import { useRouter } from 'next/router';
import { notifyErrorMessage, notifyWarningMessage } from '../core/utils/notify-action';

export default function CheckOut() {
    const user = useSelector((state) => state.user);
    // const voucher = useSelector((state) => state.voucher);

    const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHOD.COD);
    const [description, setDescription] = useState('');
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [note, setNote] = useState('');
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [total, setTotal] = useState(0);
    const [listDetails, setListDetails] = useState([]);
    const [code, setCode] = useState('');
    const [codeVoucher, setCodeVoucher] = useState('');
    const [discountAmount, setdiscountAmount] = useState(0);
    const [totalDiscount, settotalDiscount] = useState(0);

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        getItemsCart();
        setCode(randomString(5));
    }, []);

    const getItemsCart = async () => {
        const data = await CartService.getAll();
        const listCart = data.result || [];
        const details = [];
        let totalCreated = 0;
        listCart.forEach(e => {
            const price = e.productDetail.salePrice === 0 ? e.productDetail.exportPrice : e.productDetail.salePrice;
            details.push({
                quantity: e.quantity,
                amount: e.quantity * price,
                price,
                productDetail: e.productDetail,
                name: e.name,
            });
            const total = price * e.quantity;
            totalCreated += total;
        });
        setTotal(totalCreated);
        setListDetails(details);

    };

    const handleOnChangePayment = (evt) => {
        const value = evt.target.value;
        if (value === PAYMENT_METHOD.BANKING) {
            const des = `${randomString(5) + ' ' + user.email}`;
            setDescription(des);
            setCode(des.split(' ')[0]);
        } else {
            setDescription('');
            setCode(randomString(5));
        }
        setPaymentMethod(value);

    };
    const handleVoucher= async (e)=> {
        e.preventDefault()
        // const DiscountCode = codeVoucher;
        // console.log(DiscountCode);
        if(codeVoucher){
            const data = await VoucherService.getByCode(codeVoucher);
            const res = data.result || [];
            console.log(res._id);
            if (res != []) {
                const expiryDate = new Date(res.endDate); // lấy ngày hết hạn từ dữ liệu API
                const currentDate = new Date(); // lấy ngày hiện tại
                if (expiryDate >= currentDate) {
                    console.log("Voucher hợp lệ");
                    // Tính tổng giỏ hàng
                    await applyDiscount(res);
                } else {
                    console.log("Voucher đã hết hạn.");
                }
            } else {
                console.log("Voucher không tồn tại.");
            }

        }

    };
    const applyDiscount = async (voucher) => {
        // Tính tổng giỏ hàng
        await getItemsCart(); // Gọi hàm tính tổng giỏ hàng
        
        // Áp dụng giảm giá nếu voucher hợp lệ
        let discountAmount = 0;
        if (voucher.condition <= total) {
            // Giảm giá theo phần trăm
            discountAmount = (voucher.percent / 100) * total;
        }

        // Đảm bảo tổng giá trị không âm
        let totalDiscount = total - discountAmount;
        if (totalDiscount < 0) {
            totalDiscount = 0;
        }
    
        // Cập nhật tổng giá trị sau khi áp voucher
        setdiscountAmount(discountAmount);
        settotalDiscount(totalDiscount);
    };
    
    const handlePlaceOrder = async (e) => {
        e.preventDefault()
        if (listDetails.length === 0){
            notifyErrorMessage('There must be at least 1 product in the order!')
            return
        }
        const saleOrderFull = {
            customer: user.refId,
            firstName,
            lastName,
            phone,
            email,
            code,
            description,
            note,
            address,
            paymentMethod,
            status: SALE_ORDER_STATUS.PENDING,
            listDetails,
        };
        if (codeVoucher){
            const data = await VoucherService.getByCode(codeVoucher);
            const res = data.result || [];
            // console.log(res._id);
            saleOrderFull.voucher = res._id;
        }
        const data = await SaleOrderService.create(saleOrderFull);
        if(data){
            dispatch(resetCart());
            router.push(`/history-order-detail?id=${data.result._id}`);
        }
    };

    return (
        <Layout>
            <section className='breadcrumb-option'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='breadcrumb__text'>
                                <h4>Check Out</h4>
                                <div className='breadcrumb__links'>
                                    <a href='./'>Home</a>
                                    <a href='./shop'>Shop</a>
                                    <span>Check Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='checkout spad'>
                <div className='container'>
                    <div className='checkout__form'>
                        <form noValidate>
                            <div className='row'>
                                <div className='col-lg-8 col-md-6'>
                                    {/*<h6 className='coupon__code'><span className='icon_tag_alt' /> Have a*/}
                                    {/*    coupon? <a href='#'>Click*/}
                                    {/*        here</a> to enter your code</h6>*/}
                                    <h6 className='checkout__title'>Billing Details</h6>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='checkout__input'>
                                                <p>Fist Name<span>*</span></p>
                                                <input type='text' value={firstName}
                                                       onChange={(e) => setFirstName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='checkout__input'>
                                                <p>Last Name<span>*</span></p>
                                                <input type='text' value={lastName}
                                                       onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='checkout__input'>
                                        <p>Address<span>*</span></p>
                                        <input type='text' placeholder='Street Address'
                                               className='checkout__input__add' value={address}
                                               onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='checkout__input'>
                                                <p>Phone<span>*</span></p>
                                                <input type='text' value={phone}
                                                       onChange={(e) => setPhone(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='checkout__input'>
                                                <p>Email<span>*</span></p>
                                                <input type='text' value={email}
                                                       onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='checkout__input'>
                                        <p>Order notes</p>
                                        <input type='text' value={note} onChange={(e) => setNote(e.target.value)}
                                               placeholder='Notes about your order, e.g. special notes for delivery.' />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='cart__discount'>
                                        <h6 >Discount codes</h6>
                                        <form action=''>
                                            <input type='text' placeholder='Coupon code' defaultValue='' value={codeVoucher}
                                                   onChange={(e) => setCodeVoucher(e.target.value)}/>
                                            <button type='submit' onClick={(e) => handleVoucher(e)}>Apply</button>
                                        </form>
                                    </div>
                                    <div className='checkout__order'>
                                        <h4 className='order__title'>Your order</h4>
                                        <div className='checkout__order__products'>Product <span>Total</span></div>
                                        <ul className='checkout__total__products'>
                                            {listDetails.map((detail, index) => {
                                                const price = detail.productDetail.salePrice === 0 ? detail.productDetail.exportPrice : detail.productDetail.salePrice;
                                                return <li key={detail.productDetail._id}>{index + 1}. {detail.name} ( x{detail.quantity} ) 
                                                        <span style={{ fontWeight: 'bold' }}>${price * detail.quantity}</span>
                                                </li>;
                                            })}
                                        </ul>
                                        <ul className='checkout__total__all'>
                                            <li>Total <span>${total}</span></li>
                                            {discountAmount > 0 && (  // Hiển thị discountAmount nếu có
                                                <li>
                                                    Discount voucher: <span>-${discountAmount}</span>  {/* Hiển thị số tiền giảm giá */}
                                                </li>
                                            )}
                                            <li>
                                                Total Payment: <span>${totalDiscount}</span>  {/* Tổng giá trị sau khi áp dụng giảm giá */}
                                            </li>
                                        </ul>
                                        {description === '' ? '' : <div style={{ display: 'flex' }}>
                                            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                                                <p><strong>Account number:</strong> 0123456789</p>
                                                <p><strong>Bank:</strong> AGRIBANK</p>
                                                <p><strong>Account name:</strong> TRAN BOI QUAN</p>
                                                <div style={{display: "flex"}}>
                                                    <p><strong>Transfer content: <br /> </strong>{description} </p>
                                                    <button style={{
                                                        marginLeft: '20px',
                                                        marginTop: '5px',
                                                        border: 'none',
                                                        outline: 'none',
                                                    }}
                                                            onClick={(evt) => {
                                                                evt.preventDefault();
                                                                navigator.clipboard.writeText(description);
                                                            }}>
                                                        <img src='img/icon/copytoclipboard.png' width={20}
                                                            alt='copytoclipboard' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>}

                                        <div className=''>
                                            Select Payment Method:
                                            <div className=''>
                                                <select className=' form-control payment_method mt-2 mb-2'
                                                        defaultValue={PAYMENT_METHOD.COD}
                                                        value={paymentMethod}
                                                        onChange={handleOnChangePayment}>
                                                    <option value={PAYMENT_METHOD.COD}>COD</option>
                                                    <option value={PAYMENT_METHOD.BANKING}>Banking</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type='submit' className='site-btn' onClick={(e) =>handlePlaceOrder(e)}>PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {},
    };
}
