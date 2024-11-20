import React from 'react'
import { ShopContext } from '../context/shop-context'

const CartItem = ({ id, productName, productImage, price}) => {
    return (
        <div className='cartItem'>
            <img className='product-image' src={productImage} />
            <div className='description'>
                <p>{productName}</p>
                <p style={{ fontStyle: 'italic', fontWeight: 'normal' }}>${price}</p>
            </div>
        </div>
    )
}

export default CartItem