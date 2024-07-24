import React from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SignIn from './SignIn';
import SearchBar from './SearchBar';


function Navbar() {
  return (
    <div className="Navbar-container">
      <img src='simple-round-icon-of-coffee-cup-with-drop-shadow-vector-18036911.png' alt='icon' id="mainicon"></img>
      <h1 id="heading"> Roast & Relax</h1>
      <div className='icons'>
      <HomeIcon id='home'/> 
      <MenuBookIcon id='menu'/>
      <CurrencyRupeeIcon id='order'/>
      <CardGiftcardIcon id='gift'/>
      <a id="homee">Home</a>
      <a id="menuu">Catalogue</a>
      <a id="orderr">Order</a>
      <a id="giftt">Gift</a>
      </div>
      <SearchBar/>
      <div>
        <SignIn/>
      </div>


    </div>
  )
}

export default Navbar
