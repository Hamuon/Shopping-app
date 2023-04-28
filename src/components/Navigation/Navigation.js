import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProdvicer";
import Cart from "./../../Assets/Icons/Cart.png";
import "./Navigation.css";
const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  return (
    <header className="mainNavigation">
      <nav>
        <Link to="/">
          <img alt="Logo" className="h-12" src={Cart} />
        </Link>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={userData ? "/profile" : "/login"}>
              {userData ? "Profile" : "Login / SignUp"}
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink to="/cart">Cart</NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
