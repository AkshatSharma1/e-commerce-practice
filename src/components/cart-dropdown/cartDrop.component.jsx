import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import Button from "../buttonComponent/button.component";
import CartItem from "../cart-items/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartDrop.styles.jsx";

import "./cartDrop.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const checkOutPage = () => {
    navigate("/Checkout");
  };

  return (
    // <div className='cart-dropdown-container'>
    //   <div className='cart-items'>
    //     {cartItems.length ? (
    //       cartItems.map((cartItem) => (
    //         <CartItem key={cartItem.id} cartItem={cartItem} />
    //       ))
    //     ) : (
    //       <span className='empty-message'>Your cart is empty</span>
    //     )}
    //   </div>
    //   {/* now we need to navigate when clicked on checkout, useNavigate */}
    //   <Button onClick={checkOutPage}>GO TO CHECKOUT</Button>
    // </div>

    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkOutPage}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
