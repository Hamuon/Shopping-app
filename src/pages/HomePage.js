import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import http from "../services/httpService";
import Card from "../components/Card/Card";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product")
      .then((res) => setProducts(res.data));
  }, []);
  useEffect(() => {
    http.get("/product").then((res) => console.log(res.data));
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap justify-around items-center mt-9">
        {products.map((product) => (
          <Card
            key={product.id}
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
