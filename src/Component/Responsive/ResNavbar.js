import React from 'react'
import "./ResNavbar.css"
import cross from "../img/cross.png"
import { Link } from 'react-scroll';
function ResNavbar({close}) {

 const closer=()=>{
    close();
  }

  return (
    <div className='ResNavbar'  >
      <div className="container-res">
      <img src={cross} height={30} alt="" onClick={closer} />
  <div className="next" >
    <li ><strong ><Link to="Hero"  onClick={closer} smooth={true}>Home</Link></strong></li>
    <li><strong><Link to="About"  onClick={closer} smooth={true}>About</Link></strong></li>
    <li><strong><Link to="Projects"  onClick={closer} smooth={true}>Projects</Link></strong></li>
            <li><strong><Link to="Contact"  onClick={closer} smooth={true}>Contact</Link></strong></li>
  </div>
    </div>
    </div>
  )
}

export default ResNavbar
