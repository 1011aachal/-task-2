import React from 'react'
import '../Hero/Hero.css'
import hero from '../Hero/trainingimg.png'

export default function Hero() {
    return (        
    <section className="home">
    <div className="content">
    <h3>Welcome To Team Developer </h3>
     <p>Click on "get users" button to fetch " Developer Details" </p>
    </div>
    <div className="image">
    <img src={hero} alt="Hero"/> 
    </div>
    </section>
    )
}

