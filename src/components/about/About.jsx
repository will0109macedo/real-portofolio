import React from 'react';
import "./about.css";
import secondImg from "../../img/white-0.jpg";

const About = () => {
  return (
      <div className='about'>
        <div className='about-left'>
            <div className='about-card'>
                <img src={secondImg} alt='' className='about-image'/>
            </div>
        </div>
        <div className='about-right'>
            <h1 className='about-title'>
            About Me</h1>
            <p className='about-sub'>
            Subtitle here
            </p>
            <p className='about-desc'>
            Full length description here, maybe
            a couple of sentences, maybe a whole,
            parragraph. We'll see.
            </p>
        </div>
      </div>
      )
};

export default About;
