import '../style-module/Signup.css';
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from 'axios';

function SignUp({show, closeSign}){
    const [formData, setFormData] = useState({
        firstName: '', email: ''
    })
    const register = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3001/register',
            data: {email: formData.email}
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

    }
    function handleChange(event){
        setFormData(prevFormData => {
            return{...prevFormData, [event.target.name]: event.target.value}
        })
    }
return (        
            <div className='modal-background' id={show}>
                <div className='modal-box'>
                <FaTimes className='close'onClick={() =>closeSign(false)}/>
                    <form  id='join' onSubmit={register}>
                        <h3>Join the Waitlist</h3>
                        
                        <input type='email'
                        required
                        placeholder='Email Address' 
                        name='email' 
                        value={formData.email}
                        onChange={handleChange}
                        />
                        <button className='btn'>Join</button>
                    </form>
                </div>
            </div>
    )
}
export default SignUp;