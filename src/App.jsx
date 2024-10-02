import React, { useState } from 'react'
import { FaBluetoothB, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaSchool } from 'react-icons/fa'
import { FaHandsHelping } from 'react-icons/fa'
import { FaBrain } from 'react-icons/fa'
import { FaLightbulb } from 'react-icons/fa'
import { FaEmpire } from 'react-icons/fa'
import photo1 from './assets/photo1.jpg'
import { FaBars } from 'react-icons/fa'

// import Contact from './Contact.jsx'
function App() {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const toggleMenu=()=>
  {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
      <div className="navbar">
        <div className="logo">Live life</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="bars" onClick={toggleMenu}>
          <FaBars/>
        </div>
      </div>
       <div className={`hamburger-list ${isMenuOpen?'show':''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div> 
      <div className="main-section">
            <h1>Spread Happiness Everywhere.</h1>
      </div>
     <div className="info-wrapper">
     <div className="info-section">
        <p>At Live Life Foundation, we are dedicated to creating a brighter future for underprivileged communities through education, empowerment, and sustainable development. Our mission is to uplift lives by providing access to quality education, promoting better livelihood opportunities, and fostering social awareness. We believe that every individual has the potential to make a difference, and through our various programs, we strive to unlock that potential. From educational initiatives to health and wellness campaigns, we work tirelessly to bridge the gap between privilege and poverty. By fostering a spirit of compassion and collective responsibility, we aim to create a world where no one is left behind. Join us on this journey to spread happiness, build resilient communities, and empower individuals to lead a dignified and fulfilling life. Together, we can create a ripple effect of positive change that transforms lives for generations to come.</p>
      </div>
     </div>
      <div className="social-section">
        <div className="social-icon">
          <div className="icons">
            <FaSchool/>
            
            <h6>Education & learning</h6>
          </div>
          <div className="icons">
            <FaHandsHelping/>
            <h6>A better livehood</h6>
          </div>
          <div className="icons">
            <FaBrain/>
            <h6>Appropriate social behaviour</h6>
          </div>
          <div className="icons">
            <FaLightbulb/>
            <h6>Better understanding</h6>
          </div>
          <div className="icons">
            <FaEmpire/>
            <h6>Aware citizen</h6>
          </div>
        </div>
      </div>
      <div className="contact-heading">
          <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-wrapper">
          <div className="leftcontact">
          <h5>All GENERAL QUERIES</h5>
          <p>livelife@abcdfondation.org</p>
          <h5>DONATION RELATED QUERIES</h5>
          <h5>FOR NEW DONARS</h5>
          <p>xyx comminicator - 8438979839</p>
          <p>donationorder@gmail.com</p>
          <h5>FOR EXISTING DONARS</h5>
          <p>abc accepter - 8892093243</p>
          <p>careforlivelifeatservice@gmail.com</p>
          <h5>FOR MEDIA-RELATED QUERIES</h5>
          <p>Write to our member at </p>
          <p>pqrsmemberoflivelife@gmail.com</p>
          </div>
          <div className="rightcontact">
          <h4>HELPDESK</h4>
          <p>For any support or queries write to us.</p>
          <div className="formsection">
            <span>Name : </span><br />
            <input type="text" className="text" placeholder="Name"/><br />
            <span>Phone : </span> <br />
            <input type="tel" name="" id="" /><br />
            <span>Email : </span> <br />
            <input type="email" name="" id="" placeholder="Email" /><br />
            <span>Message  : </span><br />
            <textarea name="" id="" placeholder="Message"></textarea>
          </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="toppart">
        <p>Don't miss anything,To know about our new products visit <br />out below social media plateforms.</p>
          <ul className="Social_media">
            <li><FaInstagram/></li>
            <li><FaTwitter/></li>
            <li><FaWhatsapp/></li>
            <li><FaFacebook/></li>
            <li></li>
          </ul>
        </div>
        <div className="parts">
          <h1>Services</h1>
          <ul>
            <li>About Us </li>
            <li>Wholesale and buy bulk</li>
            <li>Terms of service</li>
            <li>Return and Refund policy</li>
            <li>Shopping policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="parts">
          <h1>Reach us out</h1>
          <ul>
            <li>Instagram</li>
            <li>Whatsapp</li>
            <li>Email</li>
            <li>Twiter</li>
            <li>Contact</li>
            <li>Chat </li>
          </ul>
        </div>
      </footer>
      
    </div>
  )
}

export default App