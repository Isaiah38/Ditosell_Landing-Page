import '../style-module/IntroSection.css';
import Phone from '../images/smartphone-mockup-floating2-1.svg';
import SignUp from './SignUp';
import React, {useState} from 'react';


function IntroSection(){
    const [waitList, setWaitList] = useState(false);
    function joinWaitList(){
        setWaitList(true);
    }
    return(
        <section>
            {waitList && <SignUp show = {waitList ? 'joinjoin':''} closeSign={setWaitList}/>}
            <div className='intro-wrapper'>
                <div className='intro-content'>
                    <h1>Limitless locations, unimaginable speed</h1>
                    <p>Be part of the story and subscribe to our newsletter for news and updates about our platform</p>
                    <button className='btn' onClick={joinWaitList}> Join Waitlist</button>

                </div>
                <div className='img'>
                    <img src={Phone} alt=''/>
                </div>
            </div>
            
        </section>
    );
}
export default IntroSection;