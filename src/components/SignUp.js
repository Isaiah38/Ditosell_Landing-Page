import '../style-module/Signup.css';
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from 'axios';

function SignUp({show, closeSign}){
    const [formData, setFormData] = useState({
        firstName: '', email: ''
    })
    function handleChange(event){
        setFormData(prevFormData => {
            return{...prevFormData, [event.target.name]: event.target.value}
        })
    }
    const waitlist = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8000/join/waitlist', {
            method: 'post',
            email: formData.email
        });

    }
    
return (        
            <div className='modal-background' id={show}>
                <div className='modal-box'>
                <FaTimes className='close'onClick={() =>closeSign(false)}/>
                    <form id='join'>
                        <h3>Join the Waitlist</h3>
                        
                        <input type='email'
                        required
                        placeholder='Email Address' 
                        name='email' 
                        value={formData.email}
                        onChange={handleChange}
                        />
                        <button className='btn' onClick={waitlist}>Join</button>
                    </form>
                </div>
            </div>
    )
}
export default SignUp;