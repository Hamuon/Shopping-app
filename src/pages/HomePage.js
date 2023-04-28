import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import http from "../services/httpService";
import Card from "../components/Card/Card";
import { useCart } from "../Providers/CartProdvicer";
const HomePage = () => {
  const { cart } = useCart();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product")
      .then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    http.get("/product").then((res) => {});
  }, []);

  const clickHandler = (e) => {
    const id = e.target.id;
    const allProducts = [...products];
    const index = allProducts.findIndex((p) => p._id === id);
    cart.push({ ...allProducts[index], quantity: 1 });
  };

  return (
    <Layout>
      <div className="flex flex-wrap justify-around items-center mt-9">
        {products.map((product) => (
          <Card
            addToCartHandler={clickHandler}
            id={product._id}
            key={product._id}
            name={product.name}
            price={product.price}
            background={product.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
