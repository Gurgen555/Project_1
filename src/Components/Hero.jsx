import React from 'react'
import '../Components/Her.css'
import '../App.css'
import video from '../videos/video-2.mp4'
import { Btn } from './Btn'
function Hero() {
  return (
    <div className='hero-container'>
        <video src={video} autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
         <Btn className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED     
        </Btn>   
        <Btn className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            WATCH TRILER <i className='far fa-play-circle' />
        </Btn>  
        </div> 
    </div>
  )
}

export default Hero;