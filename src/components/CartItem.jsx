import { useContext } from 'react'
import { ShopContext } from '../context/shop-context'

const CartItem = ({ id, productName, productImage, price }) => {

    const { cartItems, addToCart, removeFromCart, updateCart } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]


    // const updateCart = (itemId, e) => {
    //     // setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]-1}))
    //     console.log(e.target)
    // }


    return (
        <div className='cartItem'>
            <img className='product-image' src={productImage} />
            <div className='description'>
                <p>{productName}</p>
                <p style={{ fontStyle: 'italic', fontWeight: 'normal' }}>${price}</p>
            </div>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItemAmount} onChange={(e) => updateCart(e, id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    )
}

export default CartItem