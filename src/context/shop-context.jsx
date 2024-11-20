import React, { useState, createContext } from 'react'
import { PRODUCTS } from '../data/products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalPrice = 0
        for (let product of PRODUCTS) {
            if (cartItems[product.id] > 0) {
                const subTotal = product.price * cartItems[product.id]
                totalPrice += subTotal
            }
        }
        return totalPrice
    }

    const addToCart = (itemId) => {
            setCartItems(prevState => ({ ...prevState, [itemId]: prevState[itemId] + 1 }))
        }

        const removeFromCart = (itemId) => {
            setCartItems(prevState => ({ ...prevState, [itemId]: prevState[itemId] - 1 }))
        }

        const updateCart = (event, itemId) => {
            const qty = Number(event.target.value)
            setCartItems(prevState => ({ ...prevState, [itemId]: qty }))
        }

        const contextValue = { cartItems, addToCart, removeFromCart, updateCart, getTotalCartAmount }

        return (
            <ShopContext.Provider value={contextValue}>
                {children}
            </ShopContext.Provider>
        )
    }

    export default ShopContextProvider