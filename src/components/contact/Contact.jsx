import React, { useRef, useState, useContext } from 'react';
import './contact.css';
import Phone from '../../img/phone.ico';
import Email from '../../img/email.ico';
import Location from '../../img/location.ico';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef= useRef();
    const [done, setDone] = useState(false)
    const theme= useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
      e.preventDefault()
      emailjs
      .sendForm(
      'service_dhie0gn', 
      'template_wvb7y89', 
      formRef.current, 
      "user_rzFjqUpzyReawcRANuAxF"
      )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='contact'>
      <div className='contact-bg'></div>
      <div className='contact-wrapper'>
        <div className='contact-left'>
          <h1 className='contact-title'>
          Let's get in touch
          </h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img
              src={Phone}
              alt=''
              className='contact-icon'
              />
              +1 (954) 682 - 0112
            </div>
            <div className='contact-info-item'>
              <img
              src={Email}
              alt=''
              className='contact-icon'
              />
              will.macedo@hotmail.com
            </div>
            <div className='contact-info-item'>
              <img
              src={Location}
              alt=''
              className='contact-icon'
              />
              Hollywood, Florida. U.S.A
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <p className='contact-desc'>
            <b>Do you have any ideas or questions? </b> 
              Write me a quick message and I'll get back
              at you as soon as possible.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Name' name='user_name' />
            <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Company' name='user_subject' />
            <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Email and/or Phone Number' name='user_email' />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows='3' placeholder='Keep it short, make it sweet' name='message' />
            <button>Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
      </div>
      </div>
    )
};

export default Contact;
