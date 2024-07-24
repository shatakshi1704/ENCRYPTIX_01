import React from 'react'
import "./Advertisement.css"

function Advertisement() {
  return (
    <div className="ad-container">
         <img src="ad-pic.jpeg" id="ad-pic"></img>
         <div className="words">
         <p>Now Brewing</p>
      <h4 id="head">Roast & Relax Menu</h4>
      <p>Indulge in season's feasting! Make your sip extra special. Explore the Catalogue.</p>
      <p>Starting From <b>Rs. 250</b></p>
      <button id="check-menu">The Catalogue</button>
      
     
         </div>
        
    </div>
  )
}

export default Advertisement
