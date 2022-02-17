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
            Ready to have your dream website?
            </h1>
            <p className='about-sub'>
            Look no further
            </p>
            <p className='about-desc'>
            As a solo player or as part of a team, I'm
            ready to provide my ingenuity and skills
            to make <b><em>any</em></b> project a reality.
            </p>
        </div>
      </div>
      )
};

export default About;
