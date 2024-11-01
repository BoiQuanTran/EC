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
                        <div className='return_exchange'>
                            <h1>Chính sách Đổi trả của MEOW Eyewear</h1>
                            <ul>
                                <h4>1. Điều kiện đổi trả</h4>
                                <p>Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:</p>
                                <li>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
                                <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                                <li>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
                                <p>Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.</p>
                            </ul>
                            <ul>
                                <h4>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</h4>
                                <li>Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.</li>
                                <li>Thời gian gửi chuyển trả sản phẩm: trong vòng 14 ngày kể từ khi nhận sản phẩm.</li>
                                <li>Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.</li>
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
