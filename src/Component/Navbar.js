import React , {useState}from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll';
import menu from "./img/menu.png"
import ResNavbar from './Responsive/ResNavbar';
function Navbar() {

  const [responsive, setResponsive] = useState(false)

  const OpenNav=()=>{
    setResponsive(!responsive)
  }

  return (
    <div className='navbar'>
      <h3 className='Title'><Link to="Hero" smooth={true}>Adnan.dev</Link></h3>
  
        <ul className="list">
            <li><strong><Link to="Hero" smooth={true}>Home</Link></strong></li>
            <li><strong><Link to="About" smooth={true}>About</Link></strong></li>
            <li><strong><Link to="Projects" smooth={true}>Projects</Link></strong></li>
            <li><strong><Link to="Contact" smooth={true}>Contact</Link></strong></li>
        </ul>
       <img onClick={OpenNav} src={menu} 
       style={{display: responsive ? "none": "", cursor: "pointer"}} 
       className='menu' height={40} alt="" />
       {
        responsive && (
        <ResNavbar close={OpenNav}/>
        )
       }
      
    </div>
  )
}

export default Navbar
