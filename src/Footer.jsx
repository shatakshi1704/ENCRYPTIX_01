import React from 'react'
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-part'>
      <img src="simple-round-icon-of-coffee-cup-with-drop-shadow-vector-18036911.png" id="footer-image"></img>
      <div className='AboutUs'>
        <h4>About Us</h4>
        <p>Our Heritage</p>
        <p>Coffeehouse</p>
        <p>Our Company</p>
      </div>

      <div className='Responsibility'>
        <h4>Responsibility</h4>
        <p>Diversity</p>
        <p>Community</p>
        <p>Ethical Sourcing</p>
        <p>Environmental Stewardship</p>
        <p>Learn More</p>
      </div>

      <div className='QuickLinks'>
        <h4>Quick Links</h4>
        <p>Privacy Policy</p>
        <p>FAQs</p>
        <p>Terms and Conditions</p>
        <p>Terms of Use</p>
        <p>Customer Service</p>
      </div>

      <div>
        <h4>SOCIAL MEDIA</h4>
        <InstagramIcon id="ig"/>
        <FacebookIcon id="fb"/>
        <XIcon id="x"/>

      </div>

      <div>
        <img src="apple.png" id="apple"></img>
        <img src="android.webp" id="android"></img>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <p id="mini-footer">Web Accessibility | Privacy Statement | Terms of Use | Contact Us</p>
    <p id="copyright">© 2024 Starbucks Coffee Company. All rights reserved.</p>
    <br></br>
    </div>
    

  )
}

export default Footer
