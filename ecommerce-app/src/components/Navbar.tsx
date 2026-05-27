import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Navbar() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link to="/">
        <h2>FakeStore</h2>
      </Link>

      <Link to="/cart">
        Cart ({totalQuantity})
      </Link>
    </nav>
  );
}

export default Navbar;