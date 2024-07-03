import React from "react";
import "./cart.css";
import EmptyCart from "../../images/cart/cart-empty.png";
const Cart = ({ cartItems, totalPrice }) => {
  return (
    <>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt="" />
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
        {totalPrice == 0 ? (
          <div className="cart-empty">
            <h3>Cart is empty</h3>
            <img src={EmptyCart} alt="cart" />
          </div>
        ) : (
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
