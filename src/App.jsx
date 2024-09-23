import React from 'react'
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
  return (
    <div>
      <div className="navbar">
        <div className="logo">Live life</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="Contact.jsx">Contact</a></li>
        </ul>
        <div className="bars">
          <FaBars/>
        </div>
      </div>
      <div className="main-section">
        {/* <img src={photo1} alt="" /> */}
        <h1>Spread Happiness Everywhere.</h1>
      </div>
      <div className="info-section">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corrupti est, quos, vitae at dolore ipsum perferendis provident repellat ipsa voluptates animi dicta minima? Nisi nobis illum iste? Enim cumque mollitia, deleniti numquam exercitationem perferendis! Quos quasi hic ipsa sint omnis explicabo inventore voluptates non accusantium! Tempora exercitationem possimus, veritatis cum rem ipsa nisi, maxime officia, ipsam quo porro vel. Corrupti reprehenderit ullam est ab dolore, distinctio explicabo eum culpa quaerat nam. Dolorem officia aspernatur perspiciatis tenetur quidem, dolores natus?<br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, culpa. Quos nihil, maxime quia eaque quaerat natus animi inventore distinctio soluta tempora exercitationem fugiat cum consequuntur fuga autem? Accusamus minima quia aut impedit! Obcaecati nobis nostrum voluptatibus iste nam, quam fugit sed. Labore atque consectetur magnam suscipit? Nemo, blanditiis quaerat.
        </p>
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
      <div className="cycle"></div>
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