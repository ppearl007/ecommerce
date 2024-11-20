import React, { useContext } from 'react'
import { PRODUCTS } from '../../data/products'
import { ShopContext } from '../../context/shop-context'
import CartItem from '../../components/CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount().toFixed(2)

  const navigate = useNavigate()

  const addedProducts = PRODUCTS.map(product => {
    if (cartItems[product.id] > 0) {
      return <CartItem key={product.id} {...product} />
    }
  }
  )

  return (
    <div>
      <div className='shop'>
        <h1>Cart items</h1>
      </div>
      {totalAmount > 0 ? <>
        <div className='products'>
          {addedProducts}
        </div>
        <div>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Check out</button>
        </div>
      </> : <h2>Your Cart is Empty</h2>}
    </div>
  )
}

export default Cart
