import React from 'react'
import "./Contact.css"
import location from "./img/location.png"
import mail from "./img/email.png"
function Contact() {
  return (
    <div className="contactme">
    <div className='Contact'>       
      <h3 className='title'>CONTACT</h3>
      <h2>Don't be shy! Hit me up! 👇</h2>
      <div className="location-mail">
        <div className="location">
            <img src={location} alt="" height={60} />
            <div className="text">
                <h3>Location</h3>
                <a target='_blank' rel="noreferrer" href="https://goo.gl/maps/QePBzWQq31MkiNV7A"><p>Hyderabad, India</p></a>
            </div>
        </div>
        <div className="location">
            <img src={mail} alt="" height={60} />
            <div className="text">
                <h3>Mail</h3>
              <a href="mailto:adnn4u@gmail.com"><p>adnn4u@gmail.com</p></a> 
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
