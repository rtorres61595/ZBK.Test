import React from 'react';
import '../App.css';
import { Button, AddFavorite } from './Button';
import './WelcomeBack.css';

function WelcomeBack(props) {
    let displayedName = "Sauce";
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Welcome back, {displayedName} </h1>
            <div className='hero-btns'>
            <AddFavorite
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                Add your favorite spot and get weather windows!
            </AddFavorite>
                {/* <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            Make a Account
            </Button> */}
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

export default WelcomeBack;