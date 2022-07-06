import '../style-module/Feature.css';
import Rider from '../images/rider-img.svg';
import Payment from '../images/payment.svg';
import Delivery from '../images/delivery-img.svg';
function Feature(){
    return(
        <section className='feature'>
            <div className='feature-title'>
                <h1>Our Features</h1>
            </div>
            <div className='feature-box-wrapper'>
                <div className='feature-box'>
                    <img src={Rider} alt=''/>
                    <div className='feature-box-text'>
                    <h3>Real Time Tracking</h3>
                    <p>Track your riders in real-time</p>
                    </div>
                    

                </div>
                <div className='feature-box'>
                    <img src={Payment} alt=''/>
                    <div className='feature-box-text'>
                        <h3>Multiple Payment Options</h3>
                        <p>Payment with Crypto, Airtime, Cards etc</p>
                    </div>
                    

                </div>
                <div className='feature-box'>
                    <img src={Delivery} alt=''/>
                    <div className='feature-box-text'>
                        <h3>Manage your Deliveries</h3>
                        <p>Redirect parcel to a different address or have it left in a safe place</p>
                    </div>
                    

                </div>

            </div>
            <div className='newsletter-portion'>
                <h1>Subscribe To Our Newsletter</h1>
                <p>Be part of the story and subscribe to our newsletter for news and updates about our platform</p>
                <div className='input-sub-wrapper'>
                    <input type='text' placeholder='Email Address'/>
                    <span>Subscribe</span>
                </div>
                

            </div>

        </section>
    )
}
export default Feature;