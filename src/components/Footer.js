import '../style-module/Footer.css';
import Googleplay from '../images/google-play.svg';
import Applestore from '../images/app-store-apple.svg';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer(){
    return(
            <footer>
                <div  className='footer-wrapper'>
                    <div className='left-box'>
                        <h4>Coming Soon</h4>
                        <img src={Googleplay} alt=''/>
                        <img src={Applestore} alt=''/>

                    </div>
                    <div className='middle-box'></div>
                    <div className='contact-container'>
                        <h3>Follow Us</h3>
                        <ul className="link-wrapper">
                            <li><a href="facebook.com/ditosell"><FaFacebookF/></a></li>
                            <li><a href="linkedin.com/company/ditosell"><FaLinkedinIn/></a></li>
                            <li><a href="twitter.com/ditosell"><FaTwitter/></a></li>
                            <li><a href="instagram.com/ditosell"><FaInstagram/></a></li>
                        </ul>
                        <p className='email'>info@ditosell.com</p>

                    </div>
                    
                </div>
                <div className='copyright'>
                    <h5>@2022, All right reserved</h5>
                </div>


            </footer>)

}
export default Footer;