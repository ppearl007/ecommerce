import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../pages/cart/Cart'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart"> <ShoppingCart size={24} /> </Link>
        </div>
    </div>
  )
}

export default Navbar