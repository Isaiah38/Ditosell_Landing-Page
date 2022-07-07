import '../style-module/Navbar.css';
import Logo from '../images/logo.svg';
import {FaBars} from 'react-icons/fa';

function Navbar(){
    return(

        <nav>
            <div className='nav-wrapper'>
                <div className="logo">
                <a href="ditosell.com"><img src={Logo} alt=''/></a>
                </div>

                <div className='right-wrapper'>
                    <div className='right-con'>
                        <input type='text' placeholder='Email Address'/>
                        <span>Subscribe</span>
                    </div>
                </div>
                <FaBars className='fabar'/>

            </div>

            
            
        </nav>
    )

}
export default Navbar;