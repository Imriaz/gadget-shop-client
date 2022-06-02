import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import AllProduct from "../AllProduct/AllProduct";

<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>;

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // fetch("https://warm-hollows-05894.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div>
        <h2 className="text-primary mt-5">Our Products</h2>
      </div>
        <div className="row m-2">
          {products.map((product) => (
            <AllProduct key={product.id} product={product}></AllProduct>
          ))}
      </div>
    </>
  );
};

export default AllProducts;
