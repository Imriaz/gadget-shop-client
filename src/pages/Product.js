import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product, removeProduct }) => {
  const { id, title, description, price, imageUrl } = product;
  return (
    <div className="col-6 my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price} $</Card.Text>
          <Card.Text>Description: {description}</Card.Text>
          <Link to={`/products/${id}`}>
            <Button variant="success">View</Button>
          </Link>
          <br />
          <div>
            <Link to={`/products/update/${id}`}>
              <Button variant="primary">Update</Button>
            </Link>
            <Button onClick={() => removeProduct(id)} variant="danger">
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
