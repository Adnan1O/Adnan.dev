import React from 'react'
import  "./Pro.css"
import olx from "./Img/olx.png"
import o from "./Img/o.png"
import l from "./Img/l.png"
import x from "./Img/x.png"
import { SiGithub } from 'react-icons/si';
import { LuExternalLink } from 'react-icons/lu';
function ProC() {
  return (
<div className='pro b-pro'>

  <div className="pro-details">
    <h3 className='olx'>OLX-clone<img src={o} alt="" className='o'/><img src={l} alt="" className='l'/><img src={x} alt="" className='x'/></h3>
    <p>OLX-clone is a fullstack clone application of the 
      original OLX marketplace web-app. the app
     has all the important functionalities of the origional OLX.
     users can create account and make a post, see others posts and more. will upload the Link When i deploy.</p>
      <div className="stack stack-small">
        <span>React</span>
        <span> Node </span>
        <span> Express </span>
        <span> PosgreSQL </span>
      </div>
      <div className="code">
       <a>
         <span>Code <SiGithub/></span>
         </a>
        <a >
          <span>Live Demo <LuExternalLink/></span>
          </a>
      </div>
  </div>
  <div className="image-container">
    <img src={olx} alt="" />
  </div>

</div>
  )
}

export default ProC
