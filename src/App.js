import "./App.css";
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CartProvider from "./Providers/CartProdvicer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/ChekcoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthProvider from "./Providers/AuthProvider";
import SingleCategoyPage from "./pages/SingleCategoyPage";

function App() {
  return (
      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <Routes>
            <Route
              path="/products/category/:categoryName"
              element={<SingleCategoyPage/>}
            />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </CartProvider>
      </AuthProvider>
  );
}

export default App;
