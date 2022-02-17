import React from 'react';
import './intro.css';
import firstImg from "../../img/white-1.jpg";

const Intro = () => {
  return <div className="intro">
    <div className="intro-left">
        <div className='intro-left-wrapper'>
            <h1 className='intro-intro'>
            Hello there!, I am</h1>
            <h2 className='intro-name'>
            Willard Macedo</h2>
         <div className='intro-title'>
            <div className='intro-title-wrapper'>
            <div className='intro-title-item'>
            Web Developer</div>
            <div className='intro-title-item'>
            UI/UX Designer</div>
            <div className='intro-title-item'>
            Content Creator</div>
            </div>
         </div>
         <p className='item-description'>
         First off, thank you for visiting my page. As a 
         React developer, I have many tools and 
         skills under my belt that are going to be 
         helpful in any type of project.
         </p>
        </div>
    </div>
    <div className="intro-right">
        <img src={firstImg} alt='' className='item-img' />
    </div>
  </div>;
};

export default Intro;
