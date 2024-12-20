import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import ProductService from '../services/product.service';
import Product from '../components/shared/product';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsFeature();
    }, []);

    const getProductsFeature = async () => {
        const data = await ProductService.getFeature();
        setProducts(data.result);
    };

    return (
        <Layout>
            <div>
                <section className='hero'>
                    <div className='hero__slider owl-carousel'>
                        <div className='hero__items set-bg' data-setbg='img/hero/hero-1.jpg'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-xl-5 col-lg-7 col-md-8'>
                                        <div className='hero__text'>
                                            <h2>Men's Eyewear Collection 2024</h2>
                                            <p>Shape your style in 2024 with the latest men's eyewear collection from MEOW Eyewear. This collection features modern, refined designs crafted from premium materials and offers a wide range of styles, from masculine square frames to classic round shapes. Each pair of glasses is carefully selected to suit various styles, whether you're aiming for a sophisticated look or a dynamic vibe. Explore the 2024 men's eyewear collection to find the perfect pair that lets you confidently express your unique identity!</p>
                                            <a href='/shop' className='primary-btn'>Shop now <span
                                                className='arrow_right' /></a>
                                            <div className='hero__social'>
                                                <a href='#'><i className='fa fa-facebook' /></a>
                                                <a href='#'><i className='fa fa-twitter' /></a>
                                                <a href='#'><i className='fa fa-pinterest' /></a>
                                                <a href='#'><i className='fa fa-instagram' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hero__items set-bg' data-setbg='img/hero/hero-2.jpg'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-xl-5 col-lg-7 col-md-8'>
                                        <div className='hero__text'>
                                            <h2>Women's Eyewear Collection 2024</h2>
                                            <p>Define your style in 2024 with MEOW Eyewear's latest women's eyewear collection. This lineup showcases modern, sophisticated designs made from premium materials and offers a variety of styles, from sharp square frames to elegant round glasses. Each pair is carefully curated to complement diverse looks, whether you're going for a luxurious, youthful, or dynamic aesthetic. Explore the 2024 women's eyewear collection to find the perfect pair that lets you confidently express your unique identity!</p>
                                            <a href='/shop' className='primary-btn'>Shop now<span
                                                className='arrow_right' /></a>
                                            <div className='hero__social'>
                                                <a href='#'><i className='fa fa-facebook' /></a>
                                                <a href='#'><i className='fa fa-twitter' /></a>
                                                <a href='#'><i className='fa fa-pinterest' /></a>
                                                <a href='#'><i className='fa fa-instagram' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='banner spad'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-7 offset-lg-4'>
                                <div className='banner__item'>
                                    <div className='banner__item__pic'>
                                        <img src='img/banner/banner-1.jpg' alt='' />
                                    </div>
                                    <div className='banner__item__text'>
                                        <h2>Men's Collection 2024</h2>
                                        <a href='/shop'>Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <div className='banner__item banner__item--middle'>
                                    <div className='banner__item__pic'>
                                        <img src='img/banner/banner-2.jpg' alt='' />
                                    </div>
                                    <div className='banner__item__text'>
                                        <h2>Sunglasses</h2>
                                        <a href='/shop'>Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='banner__item banner__item--last'>
                                    <div className='banner__item__pic'>
                                        <img src='img/banner/banner-3.jpg' alt='' />
                                    </div>
                                    <div className='banner__item__text'>
                                        <h2>Women's Collection 2024</h2>
                                        <a href='/shop'>Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='product spad'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <ul className='filter__controls'>
                                    <li className='active' data-filter='*'>Feature</li>
                                </ul>
                            </div>
                        </div>
                        <div className='row product__filter'>
                            {products.map(item => {
                                return <Product typeCol={true} product={item} key={item._id} />;
                            })}
                            {/* <div className='col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals'>
                                <div className='product__item'>
                                    <div className='product__item__pic set-bg' data-setbg='img/product/product-1.jpg'>
                                        <span className='label'>New</span>
                                        <ul className='product__hover'>
                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                <span>Compare</span></a></li>
                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>Piqué Biker Jacket</h6>
                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                        <div className='rating'>
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                        </div>
                                        <h5>$67.24</h5>
                                        <div className='product__color__select'>
                                            <label htmlFor='pc-1'>
                                                <input type='radio' id='pc-1' />
                                            </label>
                                            <label className='active black' htmlFor='pc-2'>
                                                <input type='radio' id='pc-2' />
                                            </label>
                                            <label className='grey' htmlFor='pc-3'>
                                                <input type='radio' id='pc-3' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales'>
                                <div className='product__item'>
                                    <div className='product__item__pic set-bg' data-setbg='img/product/product-2.jpg'>
                                        <ul className='product__hover'>
                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                <span>Compare</span></a></li>
                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>Piqué Biker Jacket</h6>
                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                        <div className='rating'>
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                        </div>
                                        <h5>$67.24</h5>
                                        <div className='product__color__select'>
                                            <label htmlFor='pc-4'>
                                                <input type='radio' id='pc-4' />
                                            </label>
                                            <label className='active black' htmlFor='pc-5'>
                                                <input type='radio' id='pc-5' />
                                            </label>
                                            <label className='grey' htmlFor='pc-6'>
                                                <input type='radio' id='pc-6' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals'>
                                <div className='product__item sale'>
                                    <div className='product__item__pic set-bg' data-setbg='img/product/product-3.jpg'>
                                        <span className='label'>Sale</span>
                                        <ul className='product__hover'>
                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                <span>Compare</span></a></li>
                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>Multi-pocket Chest Bag</h6>
                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                        <div className='rating'>
                                            <i className='fa fa-star' />
                                            <i className='fa fa-star' />
                                            <i className='fa fa-star' />
                                            <i className='fa fa-star' />
                                            <i className='fa fa-star-o' />
                                        </div>
                                        <h5>$43.48</h5>
                                        <div className='product__color__select'>
                                            <label htmlFor='pc-7'>
                                                <input type='radio' id='pc-7' />
                                            </label>
                                            <label className='active black' htmlFor='pc-8'>
                                                <input type='radio' id='pc-8' />
                                            </label>
                                            <label className='grey' htmlFor='pc-9'>
                                                <input type='radio' id='pc-9' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales'>
                                <div className='product__item'>
                                    <div className='product__item__pic set-bg' data-setbg='img/product/product-4.jpg'>
                                        <ul className='product__hover'>
                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                <span>Compare</span></a></li>
                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>Diagonal Textured Cap</h6>
                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                        <div className='rating'>
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                        </div>
                                        <h5>$60.9</h5>
                                        <div className='product__color__select'>
                                            <label htmlFor='pc-10'>
                                                <input type='radio' id='pc-10' />
                                            </label>
                                            <label className='active black' htmlFor='pc-11'>
                                                <input type='radio' id='pc-11' />
                                            </label>
                                            <label className='grey' htmlFor='pc-12'>
                                                <input type='radio' id='pc-12' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals'>
                                <div className='product__item'>
                                    <div className='product__item__pic set-bg' data-setbg='img/product/product-5.jpg'>
                                        <ul className='product__hover'>
                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                <span>Compare</span></a></li>
                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>Lether Backpack</h6>
                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                        <div className='rating'>
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                        </div>
                                        <h5>$31.37</h5>
                                        <div className='product__color__select'>
                                            <label htmlFor='pc-13'>
                                                <input type='radio' id='pc-13' />
                                            </label>
                                            <label className='active black' htmlFor='pc-14'>
                                                <input type='radio' id='pc-14' />
                                            </label>
                                            <label className='grey' htmlFor='pc-15'>
                                                <input type='radio' id='pc-15' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales'>
                                <div className='product__item sale'>
                                    <div className='product__item__pic set-bg' data-setbg='img/product/product-6.jpg'>
                                        <span className='label'>Sale</span>
                                        <ul className='product__hover'>
                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                <span>Compare</span></a></li>
                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>Ankle Boots</h6>
                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                        <div className='rating'>
                                            <i className='fa fa-star' />
                                            <i className='fa fa-star' />
                                            <i className='fa fa-star' />
                                            <i className='fa fa-star' />
                                            <i className='fa fa-star-o' />
                                        </div>
                                        <h5>$98.49</h5>
                                        <div className='product__color__select'>
                                            <label htmlFor='pc-16'>
                                                <input type='radio' id='pc-16' />
                                            </label>
                                            <label className='active black' htmlFor='pc-17'>
                                                <input type='radio' id='pc-17' />
                                            </label>
                                            <label className='grey' htmlFor='pc-18'>
                                                <input type='radio' id='pc-18' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals'>
                                <div className='product__item'>
                                    <div className='product__item__pic set-bg' data-setbg='img/product/product-7.jpg'>
                                        <ul className='product__hover'>
                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                <span>Compare</span></a></li>
                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>T-shirt Contrast Pocket</h6>
                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                        <div className='rating'>
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                        </div>
                                        <h5>$49.66</h5>
                                        <div className='product__color__select'>
                                            <label htmlFor='pc-19'>
                                                <input type='radio' id='pc-19' />
                                            </label>
                                            <label className='active black' htmlFor='pc-20'>
                                                <input type='radio' id='pc-20' />
                                            </label>
                                            <label className='grey' htmlFor='pc-21'>
                                                <input type='radio' id='pc-21' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales'>
                                <div className='product__item'>
                                    <div className='product__item__pic set-bg' data-setbg='img/product/product-8.jpg'>
                                        <ul className='product__hover'>
                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                <span>Compare</span></a></li>
                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>Basic Flowing Scarf</h6>
                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                        <div className='rating'>
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                            <i className='fa fa-star-o' />
                                        </div>
                                        <h5>$26.28</h5>
                                        <div className='product__color__select'>
                                            <label htmlFor='pc-22'>
                                                <input type='radio' id='pc-22' />
                                            </label>
                                            <label className='active black' htmlFor='pc-23'>
                                                <input type='radio' id='pc-23' />
                                            </label>
                                            <label className='grey' htmlFor='pc-24'>
                                                <input type='radio' id='pc-24' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section className='categories spad'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className='categories__text'>
                                    <h2>Man Collections <br /> <span>Woman Collections</span> <br />Sunglasses</h2>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='categories__hot__deal'>
                                    <img src='img/product-sale.png' alt='' />
                                    <div className='hot__deal__sticker'>
                                        <span>Sale Of</span>
                                        <h5>$29.99</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 offset-lg-1'>
                                <div className='categories__deal__countdown'>
                                    <span>Deal Of The Week</span>
                                    <h2>BLACK SATURN</h2>
                                    <div className='categories__deal__countdown__timer' id='countdown'>
                                        <div className='cd-item'>
                                            <span>3</span>
                                            <p>Days</p>
                                        </div>
                                        <div className='cd-item'>
                                            <span>1</span>
                                            <p>Hours</p>
                                        </div>
                                        <div className='cd-item'>
                                            <span>50</span>
                                            <p>Minutes</p>
                                        </div>
                                        <div className='cd-item'>
                                            <span>18</span>
                                            <p>Seconds</p>
                                        </div>
                                    </div>
                                    <a href='/shop' className='primary-btn'>Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='instagram spad'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='instagram__pic'>
                                    <div className='instagram__pic__item set-bg'
                                         data-setbg='img/instagram/instagram-1.jpg' />
                                    <div className='instagram__pic__item set-bg'
                                         data-setbg='img/instagram/instagram-2.jpg' />
                                    <div className='instagram__pic__item set-bg'
                                         data-setbg='img/instagram/instagram-3.jpg' />
                                    <div className='instagram__pic__item set-bg'
                                         data-setbg='img/instagram/instagram-4.jpg' />
                                    <div className='instagram__pic__item set-bg'
                                         data-setbg='img/instagram/instagram-5.jpg' />
                                    <div className='instagram__pic__item set-bg'
                                         data-setbg='img/instagram/instagram-6.jpg' />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='instagram__text'>
                                    <h2>Instagram</h2>
                                    <p>Explore MEOW Eyewear's Instagram page now to stay updated on the latest eyewear trends and fashion styles! Here, we share the hottest frames from top brands, styling tips to help you stand out, and valuable insights on choosing and caring for your glasses. Follow us to never miss a trend and elevate your style every day!</p>
                                    <h3>#meow.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='latest spad'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='section-title'>
                                    <span>Latest News</span>
                                    <h2>Fashion New Trends</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='blog__item'>
                                    <div className='blog__item__pic set-bg' data-setbg='img/blog/blog-1.jpg' />
                                    <div className='blog__item__text'>
                                        <span><img src='img/icon/calendar.png' alt='' /> 16 September 2024</span>
                                        <h5>Top 11+ Must-Have Street Style Accessories You Can't Miss</h5>
                                        <a href='#'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='blog__item'>
                                    <div className='blog__item__pic set-bg' data-setbg='img/blog/blog-2.jpg' />
                                    <div className='blog__item__text'>
                                        <span><img src='img/icon/calendar.png' alt='' /> 21 September 2024</span>
                                        <h5>Can You Wear Contact Lenses in the Rain? 7 Quick Fixes</h5>
                                        <a href='#'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className='blog__item'>
                                    <div className='blog__item__pic set-bg' data-setbg='img/blog/blog-3.jpg' />
                                    <div className='blog__item__text'>
                                        <span><img src='img/icon/calendar.png' alt='' /> 28 September 2024</span>
                                        <h5>What is Myasthenia Gravis in the Eyes? Causes and 5 Effective Treatments</h5>
                                        <a href='#'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
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
