import '../style-module/SignUpConfirm.css';
import Logo from '../images/logo.svg';
import {FaCheckCircle} from "react-icons/fa";


function SignUpConfirm(){

    return(
        <div className= 'signupConfirm'>
            <div className='modal-box'>
            <img src={Logo} alt=''/>
            <div className='checkIcon'><FaCheckCircle /></div>
                <p>Congratulations, your account has been successfully created with ditosell</p>
                <button className='btn'>Continue</button>

            </div>
        </div>
        
    );
}
export default SignUpConfirm;