import React from 'react'
import { PRODUCTS } from '../../data/products'
import Product from '../../components/Product'
import './shop.css'

const Shop = () => {
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

        </div>
    )
}

export default Shop