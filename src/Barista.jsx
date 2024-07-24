import React from 'react'
import "./Barista.css"

function Barista() {
  return (
    <div className='Barista'>
      <h2>Barista's Recommendations</h2>
      <div className='Barista-items'>
        <div className='Items'>
        <img src="cappuccino.webp" id="Items"></img>
        <img src="veg.png" id="veg"></img>
        <p> &#x20b9; 283.50 </p>
        <p id='Items-text'>Cappuccino</p>
        <p id="Items-info">SHORT (273ml) 284 kcal</p>
        <button id="Items-order">Buy Now</button>
        
      </div>

      <div className='Items'>
        <img src="hotchoco.jpeg" id="Items"></img>
        <img src="veg.png" id="veg"></img>
        <p> &#x20b9; 294.00 </p>
        <p id='Items-text'>Signature Hot Chocolate</p>
        <p id="Items-info">SHORT (273ml) 290 kcal</p>
        <button id="Items-order">Buy Now</button>
        
      </div>

      <div className='Items'>
        <img src="vanilla.jpeg" id="Items"></img>
        <img src="veg.png" id="veg"></img>
        <p> &#x20b9; 367.50 </p>
        <p id='Items-text'>Vanilla Milkshake</p>
        <p id="Items-info">TALL (354ml) 531 kcal</p>
        <button id="Items-order">Buy Now</button>
        
      </div>
      </div>
      
    </div>
  )
}

export default Barista
