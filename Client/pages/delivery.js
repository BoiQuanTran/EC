import Layout from '../components/layout';
import { Constant } from '../core/constant';

export default function Delivery() {
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
                            <h1>MEOW Eyewear Shipping Policy</h1>
                            <ul>
                                <h4>1. Shipping Fees</h4>
                                <li>MEOW Eyewear offers free nationwide shipping.</li>
                                <li>For express delivery, please contact our hotline at 0787190119 for a quote (available via Zalo, website, email, and Facebook).</li>
                            </ul>
                            <ul>
                                <h4>2. Delivery Times</h4>
                                <li>Express delivery: 30 minutes to 4 hours (contact us for detailed consultation).</li>
                                <li>Inner and outer Ho Chi Minh City: 1 - 2 days.</li>
                                <li>Hanoi and major cities: 3 - 4 days.</li>
                                <li>Other areas: 4 - 5 days.</li>
                                <li>MEOW Eyewear provides additional support for your delivery needs, such as scheduling specific delivery times, pick-up at local post offices, and choosing nearby shipping carriers.</li>
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
