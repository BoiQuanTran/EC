import Layout from '../components/layout';
import { Constant } from '../core/constant';

export default function ReturnExchange() {
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
                            <h1>MEOW Eyewear Return and Exchange Policy</h1>
                            <ul>
                                <h4>1. Conditions for Return and Exchange</h4>
                                <p>Customers need to check the condition of the goods and can exchange or return items at the time of delivery/receipt in the following cases:</p>
                                <li>The items received do not match the type or model ordered or do not match the website description at the time of order.</li>
                                <li>The quantity is insufficient or the items are incomplete as stated in the order.</li>
                                <li>The external condition is affected, such as torn packaging, peeling, or breakage.</li>
                                <p>Customers are responsible for providing relevant documents to prove the discrepancies to complete the return/exchange process.</p>
                            </ul>
                            <ul>
                                <h4>2. Notification and Return Time Regulations</h4>
                                <li>Notification of return/exchange must be made within 48 hours from the time of receiving the product in cases of missing accessories, gifts, or breakage.</li>
                                <li>The return shipment of the product must be made within 14 days from the time of receiving the product.</li>
                                <li>Location for product returns: Customers can bring items directly to our office/store or send them via postal service.</li>
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
