import React from 'react'
import './Hero.css'
import { BsLinkedin } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import adnan from "./img/adnan.jpeg"
import helmet from "./img/helmet.png"
import pg from "./img/pg.png"
import mongo from "./img/mongo.png"
import node from "./img/node.png"
import express from "./img/express.png"
function Hero() {
  return (
    <div className="hero-section">
    <div className='hero'>
      <div className="text-area">
        <h1>Fullstack Web Developer <img src={helmet} alt="" height={40} /></h1>
        <p>Hi, I'm Adnan Shaikh. A passionate Fullstack React Developer based in Hyderabad, India. 📍</p>
        <div className="social">
        <BsLinkedin/>
        <SiGithub/>
        </div>
      </div>
      <div className="img">
        <img src={adnan} alt=""  />
      </div>
    </div>
    <div className="tech-stack">
        <div className="mystack">
    <strong>Tech Stack</strong> 
    <strong className='line'>|</strong>
    <ul>
        <li><img src="https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg" alt="" title="HTML5" /></li>
        <li><img src="https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg" alt="" title="CSS3" /></li>
        <li><img src="https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg" alt="" title="JavaScript" /></li>
        <li><img src="https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg" alt="" title="React" /></li>
        <li><img src={node} alt="" title="Node.js" /></li>
        <li><img src={express} alt="" title="Express.js"  /></li>
        <li><img src={mongo} alt="" title="MongoDB" /></li>
        <li><img src={pg} alt="" title="PostgreSQL" /></li>
        </ul>      
    </div>
    </div>
    </div>
  )
}

export default Hero
