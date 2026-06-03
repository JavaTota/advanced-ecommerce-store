import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import {
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { createOrder } from "../services/orderService";
import { useAuth } from "../context/AuthContext";

function Cart() {
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (!user) {
      setCheckoutMessage("Please login before checking out.");
      return;
    }

    try {
      await createOrder(user.uid, cartItems);
      dispatch(clearCart());
      setCheckoutMessage("Order placed successfully!");
    } catch (error) {
      console.error(error);
      setCheckoutMessage("Failed to place order.");
    }
  };

  if (cartItems.length === 0) {
    return (
      <main style={{ padding: "1rem" }}>
        <h1>Your Cart</h1>
        <p>{checkoutMessage || "Your cart is empty."}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Your Cart</h1>

      {checkoutMessage && <p>{checkoutMessage}</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            padding: "1rem 0",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />

          <div>
            <h3>{item.title}</h3>

            <div>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>

              <span style={{ margin: "0 0.75rem" }}>{item.quantity}</span>

              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>
            </div>

            <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total items: {totalItems}</h2>
      <h2>Total price: ${totalPrice.toFixed(2)}</h2>

      <button onClick={handleCheckout}>Checkout</button>
    </main>
  );
}

export default Cart;