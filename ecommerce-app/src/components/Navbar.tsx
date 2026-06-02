import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useAuth } from "../context/AuthContext.tsx";

function Navbar() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const { user } = useAuth();

  return (
    <nav
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
      }}>
      <Link to="/">
        <h2>FakeStore</h2>
      </Link>
      {user ?
      (
        <>
          <Link to="/profile">
            <h2>Profile</h2>
          </Link>
          <Link to="/logout">
            <h2>Logout</h2>
          </Link>
        </>
      ) : (
      <>
        <Link to="/register">
          <h2>Register</h2>
        </Link>
        <Link to="/login">
          <h2>Login</h2>
        </Link>
      </>
    )}

    
      <Link to="/cart">
        Cart ({totalQuantity})
      </Link>
    </nav>
  );
}

export default Navbar;