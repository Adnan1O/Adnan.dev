import React from 'react'
import  "./Pro.css"
import ecom from "./Img/ecom.png"
import cart from "./Img/cart.png"
import { SiGithub } from 'react-icons/si';
import { LuExternalLink } from 'react-icons/lu';
function ProA() {
  return (
<div className='pro'>
  <div className="image-container">
    <img src={ecom} alt="" />
  </div>
  <div className="pro-details">
    <h3>Ecomm<img src={cart} alt=""/></h3>
    <p>Ecomm is a fully functioning 
      ecommerce web-app built using
      React, Firebase, stripe, figma.
      designed the app myself in figma.
      built the frontend with react use
      Context API for global state. used
      firebase for user authentication, 
      integrated stripe payment.</p>
      <div className="stack">
        <span>React</span>
        <span>  CSS  </span>
        <span>Firebase</span>
      </div>
      <div className="code">
       <a target='_blank' rel="noreferrer" href="https://github.com/Adnan1O/Ecomm">
         <span>Code <SiGithub/></span>
         </a>
        <a target='_blank' rel="noreferrer" href="https://ecomm-murex-five.vercel.app/">
          <span>Live Demo <LuExternalLink/></span>
          </a>
      </div>
  </div>

</div>
  )
}

export default ProA
