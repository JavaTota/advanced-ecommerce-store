import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext.tsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;