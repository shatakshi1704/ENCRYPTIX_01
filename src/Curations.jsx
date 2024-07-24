import React from 'react'
import "./Curations.css"

function Curations() {
  return (
    <div className='Curations'>
      <h2 >Handcrafted Curations </h2>
      <div className='Curations-images'>
      <img src='bestseller.jpeg' id="bestseller-image"></img>
      <img src='drinks.avif' id="drinks-image"></img>
      <img src='food.webp' id="food-image"></img>
      <img src='merch.jpeg' id="merchandise-image"></img>
      </div>
      <p id="bestseller-text">Bestseller</p>
      <p id="Drinks-text">Drinks</p>
      <p id="Food-text">Food</p>
      <p id="Merchandise-text">Merchandise</p>
      
    </div>
  )
}

export default Curations
