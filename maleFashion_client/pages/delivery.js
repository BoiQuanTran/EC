import Layout from '../components/layout';
import { Constant } from '../core/constant';

export default function Contact() {
    return (
        <Layout>
            <div className='map'>
                <iframe
                    width='600'
                    height='450'
                    style={{ border: 0 }}
                    loading='lazy'
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB12a91SpS1s699OhnsEyMKk58pYdfv_Ec&q=${Constant.ADDRESS}`}>
                </iframe>
            </div>
            <section className='contact spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='delivery'>
                            <h1>Chính sách Vận chuyển của MEOW Eyewear</h1>
                            <ul>
                                <h4>1. Phí ship</h4>
                                <li>My Eyewear miễn phí giao hàng trên toàn quốc với sản phẩm trị giá từ 300.000 VND</li>
                                <li>Áp dụng phí vận chuyển 20.000 VND với sản phẩm dưới 300.000 VND</li>
                                <li>Đối với ship hoả tốc, vui lòng liên hệ hotline 0787190119 để được báo giá (Zalo, Web, Email, FB)</li>
                            </ul>
                            <ul>
                                <h4>2. Thời gian giao hàng</h4>
                                <li>Ship hoả tốc 30' - 4h (Liên hệ để được tư vấn chi tiết)</li>
                                <li>Khu vực nội và ngoại thành TP.HCM: Từ 1 – 2 ngày</li>
                                <li>Khu vực Hà Nội và các thành phố lớn: 3 – 4 ngày</li>
                                <li>Các khu vực khác: 4 – 5 ngày</li>
                                <li>Mắt kính My Eyewear hỗ trợ quý khách trong giao hàng: hẹn giờ giao, nhận tại bưu cục, chọn đơn vị vận chuyển gần nhà,...</li>
                            </ul>
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
