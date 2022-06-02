import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { proId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${proId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.results));
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem", marginLeft: "450px", marginTop: "20px" }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price} $</Card.Text>
          <Card.Text>Description: {product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
