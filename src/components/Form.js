import React, { useState } from 'react'; 
import SignUpForm from './SignUpForm.js';
import SignUpSucess from './SignUpSucess.js';

const Forms =()=>{
    const[formIsSubmitted,setFormISSubmitted] = useState(false);
    
    const submitForm = () =>{
        setFormISSubmitted(true);
    };
    return(
        <div className="container">
           
            {!formIsSubmitted ? (
            <SignUpForm submitForm={submitForm}/> ):( <SignUpSucess/>)}
           
        </div>
    );
};
export default Forms;