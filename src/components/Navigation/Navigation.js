import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProdvicer";
import "./Navigation.css";
const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div>Shopping App</div>
          <li>
            <NavLink to="/" >
              home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="cartLink">
            <NavLink to="/cart">
              Cart
            </NavLink>
            <span>{cart.length}</span>
          </li>
          <li>
            <NavLink
              to={userData ? "/profile" : "/login"}
             
            >
              {userData ? "profile" : "login / signup"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
