import React from "react";
// import "./cart-icon.styles.jsx";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartComponent = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsOpen = () => setIsCartOpen(!isCartOpen);

  return (
    // <div className='cart-icon-container' onClick={toggleIsOpen}>
    //     <ShoppingIcon className="shopping-icon" />
    //     <span className='item-count'>{cartCount}</span>
    // </div>
    <CartIconContainer onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartComponent;
