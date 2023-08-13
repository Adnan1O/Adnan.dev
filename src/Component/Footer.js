import React from 'react'
import "./Footer.css"
import { BsLinkedin } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
function Footer() {
  return (
    <footer>
        <h3>Copyright © 2023. All rights are reserved</h3>
    <div className="icons">
        <a target='_blank' rel="noreferrer" href="www.linkedin.com/in/adnan-shaikh-5b7b9723a"><BsLinkedin/></a>
       <a target='_blank' rel="noreferrer" href="https://github.com/Adnan1O"><SiGithub/></a>
    </div>
    
    </footer>
      
    
  )
}

export default Footer
