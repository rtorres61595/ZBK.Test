import React from 'react';
import '../App.css';
import { SignUpButton } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted /> 
      <h1>When is it clear to skate?</h1>
      <p>We got you</p>
      <div className='hero-btns'>
        <SignUpButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Make a Account
        </SignUpButton>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Check The Map <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
