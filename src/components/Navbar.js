import '../style-module/Navbar.css';
import Logo from '../images/logo.svg';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Navbar(){
    return(

        <nav className='navbar'>

            <div className="logo">
                <a href="ditosell.com"><img src={Logo} alt=''/></a>
            </div>
            <div className="menu">
                <ul className="menu-wrapper">
                    <li><a href="#"><FaFacebookF/></a></li>
                    <li><a href="#"><FaLinkedinIn/></a></li>
                    <li><a href="#"><FaTwitter/></a></li>
                    <li><a href="#"><FaInstagramSquare/></a></li>
                </ul>
            </div>
        </nav>
    )

}
export default Navbar;