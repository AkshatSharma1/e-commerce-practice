import React from 'react';
import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItemComponent = ({cartItem}) => {

    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, removeCartItem} = useContext(CartContext);

    const clearItem = () => clearItemFromCart(cartItem);
    const addItemHandler = ()=>{addItemToCart(cartItem)};
    const removeItemHandler = ()=> removeCartItem(cartItem);
    
    return (
        <div className='checkout-item-container'>
            <div className='image-conatiner'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={clearItem}>&#10005</span>
        </div>
    );
}

export default CheckoutItemComponent;
