import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  viewCartDetails,
} from "../../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleCartDetials = (cardId) => {
    dispatch(viewCartDetails(cardId));
  };

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
  
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>shoping cart</h2>
      {cart?.cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>your cart is curently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product Title</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart?.cartItems?.map((cart) => (
              <div className="cart-item" key={cart.id}>
                <div className="cart-product">
                  <img src={cart.image} alt={cart.title} />
                  <div>
                    <h3>{cart.title}</h3>
                    <p>{cart.sex}</p>
                    <button onClick={() => handleRemove(cart)}>Remove</button>
                    <button onClick={() => handleCartDetials(cart)}>
                      Details
                    </button>
                  </div>
                </div>
                <div className="card-product-price">$ {cart.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cart)}>-</button>
                  <div className="count">{cart.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cart)}> +</button>
                </div>
                <div className="cart-total-price">
                  $ {cart.price * cart.cartQuantity}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>
              clear cart
            </button>

            <div className="cart-checkout">
              <div className="subtotal">
                <span>subtotal </span>
                <span className="amount"> {cart.cartTotalAmount}</span>
              </div>

              <p>taxes and shipping are calculated at checkout</p>
              <button>check out</button>
              <div className="empty-cart">
                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>continue shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
