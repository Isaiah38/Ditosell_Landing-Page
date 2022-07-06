import '../style-module/IntroSection.css';
import Phone from '../images/smartphone-mockup-floating2-1.svg';
import SignUp from './SignUp';
import React, {useState} from 'react';


function IntroSection(){
    const [isJoin, setIsJoin] = useState(false);
    return(
        <section>
            <div class="head-container">
            <div class="head-content">
                <h1>Limitless locations, unimaginable speed</h1> 
                <p className='pp'>Be part of the story and subscribe to our newsletter for news and updates about our platform.</p>
                <button className='btn joinbtn'onClick={() => setIsJoin(!isJoin)}>Join Waitlist</button>
                
                    
                    <SignUp name={isJoin ?'joinjoin': ''} closeSign={setIsJoin}/>
            </div>
            <div class="image">
                <img src={Phone} alt=''/>
            </div>

            </div>
            
       </section>
    );
}
export default IntroSection;