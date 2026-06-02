import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile.tsx";
import Logout from "./pages/Logout.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;