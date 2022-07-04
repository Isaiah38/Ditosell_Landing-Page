import '../style-module/IntroSection.css';
import Googleplay from '../images/google-play.svg';
import Applestore from '../images/app-store-apple.svg';
import Phone from '../images/smartphone-mockup-floating2-1.svg';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SignUp from './SignUp';
import React, {useState} from 'react';
import SignUpConfirm from './SignUpConfirm';


function IntroSection(){
    const [isJoin, setIsJoin] = useState(false);
    return(
        <section class="head-container">
            <div class="head-content">
                <h1>Now is the time to find a dispatcher at your location</h1> 
                <p className='pp'>Be part of the story and subscribe to our newsletter for news and updates about our platform.</p>
                <button className='btn'onClick={() => setIsJoin(!isJoin)}>Join Waitlist</button>
                <div className='comingSoon'>
                    <p>Coming Soon</p>
                </div>
                
                    
                    <SignUp name={isJoin ?'joinjoin': ''} closeSign={setIsJoin}/>
                    <SignUpConfirm continue = {setIsJoin}/>
                
                <div className='download-container'>
                    <a><img src={Googleplay} alt='' className='Googleplay'/></a>
                    <a><img src={Applestore} alt=''className='Applestore'/></a>
                </div>
                <ul className="link-wrapper">
                    <li><a href="#"><FaFacebookF/></a></li>
                    <li><a href="#"><FaLinkedinIn/></a></li>
                    <li><a href="#"><FaTwitter/></a></li>
                    <li><a href="#"><FaInstagramSquare/></a></li>
                </ul>
                <div className='email'>
                    <p><a href=''>info@ditosell.com</a></p>
                </div>
                <div with='300px' height='300px'></div>
            </div>
            <div class="image">
                <img src={Phone} alt=''/>
            </div>
       </section>
    );
}
export default IntroSection;