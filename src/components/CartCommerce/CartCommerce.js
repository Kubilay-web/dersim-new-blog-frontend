import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/products/cartSlice";
import "../NavbarCommerce/NavbarCommerce.css";
import "../../css/css-2.css";
import "../../css/css-1.css";

const CartCommerce = () => {
  const { currentUser } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
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
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.cartItems.length === 0 ? (
        <div className="cart-empty text-center">
          <p>Your cart is empty.</p>
          <div className="start-shopping">
            <Link to="/" className="btn btn-outline-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
              Start shopping
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="row mb-3">
            <div className="col-6">
              <h3>Product</h3>
            </div>
            <div className="col-2">
              <h3>Price</h3>
            </div>
            <div className="col-2">
              <h3>Quantity</h3>
            </div>
            <div className="col-2">
              <h3>Total</h3>
            </div>
          </div>

          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="row mb-4" key={cartItem.id}>
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="img-fluid"
                    style={{ maxWidth: "100px", marginRight: "15px" }}
                  />
                  <div>
                    <h5>{cartItem.name}</h5>
                    <p>{cartItem.desc}</p>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-2">{cartItem.price}TL</div>

                <div className="col-2 d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </button>
                  <div className="mx-2">{cartItem.cartQuantity}</div>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleIncreaseCart(cartItem)}
                  >
                    +
                  </button>
                </div>

                <div className="col-2">
                  {cartItem.price * cartItem.cartQuantity}TL
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary mt-4">
            <button
              onClick={() => handleClearCart()}
              className="btn btn-danger mb-3"
            >
              Clear Cart
            </button>

            <div className="cart-checkout">
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span className="fw-bold">{cart.cartTotalAmount}TL</span>
              </div>
              <p className="text-muted">
                Taxes and shipping calculated at checkout.
              </p>

              {currentUser ? (
                <Link to="/checkout">
                  <button className="btn btn-success w-100">Check Out</button>
                </Link>
              ) : (
                <button
                  onClick={() => navigate("/sign-in")}
                  className="btn btn-outline-primary w-100"
                >
                  Login to Check Out
                </button>
              )}

              <div className="mt-3 text-center">
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
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCommerce;
