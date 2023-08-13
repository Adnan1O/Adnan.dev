import React from 'react'
import  "./Pro.css"
import nolan from "./Img/nolan.png"
import robot from "./Img/robot.png"
import { SiGithub } from 'react-icons/si';
import { LuExternalLink } from 'react-icons/lu';
function ProB() {
  return (
<div className='pro b-pro'>

  <div className="pro-details">
    <h3>Nolan-ai<img src={robot} alt=""/></h3>
    <p>Nolan ai is an ai script writing web 
      applications. Basically users inputs the 
      title, plot and genre of the script and the 
      the web app generate script accordingly 
      Integrated chat-GPT chat complition for 
      scripts. Fe- React Be-node auth-firebase 
      Ui-css</p>
      <div className="stack">
        <span>React</span>
        <span> Node </span>
        <span>  CSS  </span>
      </div>
      <div className="code">
       <a target='_blank' rel="noreferrer" href="https://github.com/Adnan1O/NolanAi-Clone">
         <span>Code <SiGithub/></span>
         </a>
        <a target='_blank' rel="noreferrer" href="https://nolan-ai-clone-deploy.vercel.app/">
          <span>Live Demo <LuExternalLink/></span>
          </a>
      </div>
  </div>
  <div className="image-container">
    <img src={nolan} alt="" />
  </div>

</div>
  )
}

export default ProB
