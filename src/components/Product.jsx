import React from 'react'


const Product = ({ id, productName, productImage, price }) => {
    return (
        <div className='product'>
            <img className='product-image' src={productImage} />
            <div className='description'>
                <p>{productName}</p>
                <p style={{ fontStyle: 'italic', fontWeight: 'normal' }}>${price}</p>
            </div>
        </div>

    )
}

export default Product