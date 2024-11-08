import Layout from '../components/layout';

export default function About() {
    return (
        <Layout>
            <section className='about spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='about__pic'>
                                <img src='img/about/about-us.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='about__item'>
                                <h4>Who We Are ?</h4>
                                <p>We are a young and passionate team, enthusiastic about fashion and technology, who founded MEOW Eyewear with the desire to provide customers with the most premium and convenient eyewear shopping experience. With creativity and commitment, we constantly update the latest trends from renowned brands, while ensuring quality to help customers choose the products that best match their personal style.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='about__item'>
                                <h4>Who We Do ?</h4>
                                <p>We specialize in providing high-quality eyewear products, including sunglasses, prescription glasses, blue light-blocking glasses, and various other eyewear accessories. Each product is carefully selected to ensure aesthetic appeal, durability, and compliance with international quality standards. In addition, we also offer professional consulting services to help customers choose the perfect products for their needs.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='about__item'>
                                <h4>Why Choose Us ?</h4>
                                <p>Top Quality: We are committed to providing products with clear origins and subject to strict quality testing.
                                    <br></br>Diverse Selection: Hundreds of designs from reputable brands both domestically and internationally to meet various style preferences.
                                    <br></br>Dedicated Customer Service: Our consulting team is always ready to assist and answer your inquiries.
                                    <br></br>Reasonable Prices: We promise to offer the most competitive prices in the market.
                                    <br></br>At MEOW Eyewear, you not only own a product but also receive the dedication of a trusted brand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='testimonial'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 p-0'>
                            <div className='testimonial__text'>
                                <span className='icon_quotations' />
                                <p>I am very satisfied with my shopping experience at MEOW Eyewear. From the moment I stepped in to receiving enthusiastic advice from the staff, I felt truly at ease. The selection of glasses here is very diverse, updated with the latest trends, and the quality is impeccable. In particular, I appreciate how they consult to find the right style of glasses that suits my face shape and personal style. I will definitely return and recommend it to my friends. Thank you so much, MEOW Eyewear!</p>
                                <div className='testimonial__author'>
                                    <div className='testimonial__author__pic'>
                                        <img src='img/about/testimonial-author.jpg' alt='' />
                                    </div>
                                    <div className='testimonial__author__text'>
                                        <h5>Augusta Schultz</h5>
                                        {/* <p>Fashion Design</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 p-0'>
                            <div className='testimonial__pic set-bg' data-setbg='img/about/testimonial-pic.jpg' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='counter spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='counter__item'>
                                <div className='counter__item__number'>
                                    <h2 className='cn_num'>102</h2>
                                </div>
                                <span>Our <br />Clients</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='counter__item'>
                                <div className='counter__item__number'>
                                    <h2 className='cn_num'>30</h2>
                                </div>
                                <span>Total <br />Categories</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='counter__item'>
                                <div className='counter__item__number'>
                                    <h2 className='cn_num'>102</h2>
                                </div>
                                <span>In <br />Country</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='counter__item'>
                                <div className='counter__item__number'>
                                    <h2 className='cn_num'>98</h2>
                                    <strong>%</strong>
                                </div>
                                <span>Happy <br />Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='team spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section-title'>
                                <span>Our Team</span>
                                <h2>Meet Our Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row_team'>
                        <div className='col-lg-3 col-md-6 col-sm-6 box_team_item'>
                            <div className='team__item'>
                                <img src='img/about/team-1.jpg' alt='' />
                                <h4>Boi Quan Tran</h4>
                                {/* <span>Fashion Design</span> */}
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 box_team_item'>
                            <div className='team__item'>
                                <img src='img/about/team-2.jpg' alt='' />
                                <h4>Uyen Phuong Tran</h4>
                                {/* <span>C.E.O</span> */}
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 box_team_item'>
                            <div className='team__item'>
                                <img src='img/about/team-3.jpg' alt='' />
                                <h4>Le San Huynh</h4>
                                {/* <span>Manager</span> */}
                            </div>
                        </div>
                        {/* <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='team__item'>
                                <img src='img/about/team-4.jpg' alt='' />
                                <h4>Lucy Myers</h4>
                                <span>Delivery</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className='clients spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section-title'>
                                <span>Partner</span>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <a href='#' className='client__item'><img src='img/clients/client-1.png' alt='' /></a>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <a href='#' className='client__item'><img src='img/clients/client-2.png' alt='' /></a>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <a href='#' className='client__item'><img src='img/clients/client-3.png' alt='' /></a>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <a href='#' className='client__item'><img src='img/clients/client-4.png' alt='' /></a>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <a href='#' className='client__item'><img src='img/clients/client-5.png' alt='' /></a>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <a href='#' className='client__item'><img src='img/clients/client-6.png' alt='' /></a>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <a href='#' className='client__item'><img src='img/clients/client-7.png' alt='' /></a>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
                            <a href='#' className='client__item'><img src='img/clients/client-8.png' alt='' /></a>
                        </div>
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
