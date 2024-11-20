import React, { useContext }from 'react'
import { PRODUCTS } from '../../data/products'
import { ShopContext } from '../../context/shop-context'
import CartItem from '../../components/CartItem'

const Cart = () => {
  const { cartItems } = useContext(ShopContext)
  // console.log(PRODUCTS[1].productName)

  const addedProducts = PRODUCTS.map(product => {
    if (cartItems[product.id] > 0) {
      console.log(cartItems[product.id])
      return <CartItem key={product.id} {...product} />
    }
  }
)

  return (
    <div>
      <div>
        <h1>Cart items</h1>
      </div>
      <div>
        {addedProducts}
      </div>
    </div>
  )
}

export default Cart