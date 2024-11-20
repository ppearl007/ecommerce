import React from 'react'
import { PRODUCTS } from '../../data/products'
import Product from '../../components/Product'
import './shop.css'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
    const navigate = useNavigate()
    const allProducts = PRODUCTS.map(product =>
        <Product key={product.id} {...product} />
    )

    return (
        <div className='shop'>
            <div className="shopTitle">
                Product Store
            </div>
            <div className='products'>
                {allProducts}
            </div>

            <div className='button-wrapper'>
                <button onClick={() => navigate('/cart')}> View Cart </button>
            </div>
        </div>
    )
}

export default Shop