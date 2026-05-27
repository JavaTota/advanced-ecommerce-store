import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;