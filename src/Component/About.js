import React from 'react'
import "./About.css"
import about from "./img/about.png"
function About() {
  return (
    <div className='about'>
      <img src={about}  title='Dev' alt="" />
      <div className="aboutme">
        <h3>ABOUT ME</h3>
        <h4>A dedicated Fullstack developer based in Hyderabad, India 📍</h4>
        <p>I am a proficient full stack web developer
           with a diverse skill set encompassing
            HTML, CSS, and JavaScript, and I specialize
             in harnessing the power of React to create
              dynamic and responsive user interfaces.
               My expertise extends to the backend as well,
                utilizing Node.js and Express to develop 
                robust server-side applications and RESTful
                 APIs. I am experienced in working with 
                 databases like MongoDB and PostgreSQL,
                  enabling me to craft seamless and 
                  efficient web experiences from concept
                   to deployment.</p>
      </div>
    </div>
  )
}

export default About
