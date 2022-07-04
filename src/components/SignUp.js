import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from 'axios';

function SignUp({name, closeSign}){
    const [signUpConfirm, setSignUpConfirm] = useState('')
    const [formData, setFormData] = useState({
        firstName: '', email: ''
    })
    function handleChange(event){
        setFormData(prevFormData => {
            return{...prevFormData, [event.target.name]: event.target.value}
        })
    }
    const waitlist = () =>{
        axios.post({
            method: 'post',
            url: 'http://localhost:5000/waitlist',
            email: formData.email
        }).then(Response => console.log(Response));
    }
    
return (        
            <div className='modal-background' id={name}>
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