import React, { useEffect, useState } from "react";
import Product from "../pages/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
  }, []);

  const removeProduct = (id) => {
    fetch(`http://localhost:5000/admin/delete-product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
      });
  };

  return (
    <div>
      <div className="shop__container">
        <h2>Product List</h2>
        <div className="product__list row m-2">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              removeProduct={removeProduct}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
