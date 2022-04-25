import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";

import React from "react";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        // const { id, name, quantity } = item;
        //   <div key={id}>
        //     <h2>{name}</h2>
        //     <span>{quantity}</span>
        //     <br />
        //     <span>Dec</span>
        //     <br />
        //     <span>Inc</span>
        //   </div>
        <CheckoutItemComponent key={item.id} cartItem = {item} />
      ))}
      <div className="total">
          Total Value: ${cartTotal}
      </div>
    </div>
  );
};

export default Checkout;
