import React, { useState, createContext } from 'react'
import { PRODUCTS } from '../data/products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length+1; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]-1}))
    }

    const updateCart = (event, itemId) => {
        const qty = Number(event.target.value)
        setCartItems(prevState => ({...prevState, [itemId]: qty}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCart}
    
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider