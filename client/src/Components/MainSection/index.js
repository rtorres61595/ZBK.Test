import React from 'react';
import '../../../App.css';
import Cards from '../../Cards';
import HeroSection from '../../HeroSection';
import Footer from '../../Footer';

function userHome(props) {
    return(
        <div>
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
        return <UserGreeting />;
        }
        return <GuestGreeting />;
        </div>
    )
}