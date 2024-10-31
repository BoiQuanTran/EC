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
                                <p>Chúng tôi là một đội ngũ trẻ và nhiệt huyết, yêu thích thời trang và công nghệ, đã thành lập MEOW Eyewear với mong muốn mang đến cho khách hàng trải nghiệm mua sắm mắt kính đẳng cấp và tiện lợi nhất. 
                                    Với sự sáng tạo và cam kết, chúng tôi luôn cập nhật những xu hướng mới nhất từ các thương hiệu nổi tiếng, đồng thời cam kết chất lượng để giúp khách hàng lựa chọn sản phẩm phù hợp nhất với phong cách cá nhân.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='about__item'>
                                <h4>Who We Do ?</h4>
                                <p>Chúng tôi chuyên cung cấp các dòng sản phẩm mắt kính chất lượng cao từ kính râm, kính cận, kính chống ánh sáng xanh đến các phụ kiện kính mắt khác. 
                                    Mỗi sản phẩm được chọn lọc kỹ lưỡng nhằm đảm bảo tính thẩm mỹ, sự bền bỉ và đáp ứng các tiêu chuẩn quốc tế về chất lượng. Ngoài ra, chúng tôi cũng hỗ trợ dịch vụ tư vấn chuyên nghiệp, giúp khách hàng chọn lựa sản phẩm hoàn hảo nhất cho nhu cầu của mình.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='about__item'>
                                <h4>Why Choose Us</h4>
                                <p>Chất lượng hàng đầu: Chúng tôi cam kết mang đến cho khách hàng sản phẩm có nguồn gốc rõ ràng, được kiểm tra chất lượng nghiêm ngặt.
                                    Đa dạng lựa chọn: Với hàng trăm mẫu mã và kiểu dáng khác nhau, từ các thương hiệu uy tín trong và ngoài nước, chúng tôi đáp ứng nhu cầu của nhiều phong cách và mục đích sử dụng.
                                    Dịch vụ khách hàng tận tâm: Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn trong quá trình mua sắm và giải đáp mọi thắc mắc.
                                    Giá cả hợp lý: Chúng tôi hiểu rằng chất lượng cần đi đôi với giá cả hợp lý, vì vậy cam kết mang lại mức giá cạnh tranh nhất trên thị trường.
                                    Đến với MEOW Eyewear, bạn không chỉ sở hữu một sản phẩm mà còn là sự tận tâm và cam kết từ một thương hiệu đáng tin cậy.</p>
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
                                <p>"Mình rất hài lòng khi mua sắm tại MEOW Eyewear. 
                                    Từ lúc bước vào đến khi nhận được sự tư vấn nhiệt tình từ nhân viên, mình cảm thấy thực sự yên tâm. 
                                    Các mẫu kính ở đây rất đa dạng, cập nhật theo xu hướng và chất lượng thì không thể chê vào đâu được. 
                                    Đặc biệt, mình thích cách họ tư vấn để tìm được kiểu kính phù hợp với khuôn mặt và phong cách cá nhân.
                                    Chắc chắn mình sẽ quay lại và giới thiệu cho bạn bè. Cảm ơn MEOW Eyewear rất nhiều!”
                                </p>
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
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='team__item'>
                                <img src='img/about/team-1.jpg' alt='' />
                                <h4>John Smith</h4>
                                <span>Fashion Design</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='team__item'>
                                <img src='img/about/team-2.jpg' alt='' />
                                <h4>Christine Wise</h4>
                                <span>C.E.O</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='team__item'>
                                <img src='img/about/team-3.jpg' alt='' />
                                <h4>Sean Robbins</h4>
                                <span>Manager</span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='team__item'>
                                <img src='img/about/team-4.jpg' alt='' />
                                <h4>Lucy Myers</h4>
                                <span>Delivery</span>
                            </div>
                        </div>
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
