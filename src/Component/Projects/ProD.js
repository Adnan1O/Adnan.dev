import React from 'react'
import  "./Pro.css"
import insta from  "./Img/insta.png"
import { SiGithub } from 'react-icons/si';
import { LuExternalLink } from 'react-icons/lu';
function ProD() {
  return (
<div className='pro'>
  <div className="video-container">
  <iframe width="100%" height="100%" 
   src="https://www.youtube.com/embed/VNZaL7CVb40"
    title="Pern stack Instagram clone react js" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowfullscreen></iframe>
  </div>
  <div className="pro-details">
    <h3>Instagram-clone<img src={insta} alt=""/></h3>
    <p>Fullstack Clone app of Instagram. 
      in the app user can create account/login 
      see posts on feed of their following, upload/delete 
      posts with caption and location, like/comment, follow/Unfollow users, checkout other users profile and  search users, upload 
      profile details like dp/bio, and more.</p>
      <div className="stack stack-small">
      <span>React</span>
        <span> Node </span>
        <span> Express </span>
        <span> PosgreSQL </span>
      </div>
      <div className="code">
       <a target='_blank' rel="noreferrer" href="https://github.com/Adnan1O/Ecomm">
         <span>Code <SiGithub/></span>
         </a>
        <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1u07ZqHIchC9466MwUVlihFTZGL2zbK1h/view?usp=drivesdk">
          <span>Live Demo <LuExternalLink/></span>
          </a>
      </div>
  </div>

</div>
  )
}

export default ProD
