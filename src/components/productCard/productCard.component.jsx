import React from 'react';
import './productCard.styles.scss';

// import button component
import Button from '../buttonComponent/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { BUTTON_TYPE_CLASSES } from '../buttonComponent/button.component';

const ProductCardComponent = ({product}) => {

    // destructing product
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button bType={BUTTON_TYPE_CLASSES.inverted} onClick={()=>addItemToCart(product)}>Add to Cart</Button>
        </div>
    );
}

export default ProductCardComponent;
