import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'

const Product = ({ id, productName, productImage, price }) => {
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return (
        <div className='product'>
            <img className='product-image' src={productImage} />
            <div className='description'>
                <p>{productName}</p>
                <p style={{ fontStyle: 'italic', fontWeight: 'normal' }}>${price}</p>
            </div>
            <button onClick={() => addToCart(id)}>Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>} </button>
        </div>

    )
}

export default Product