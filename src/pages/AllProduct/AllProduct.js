import React from "react";
import { Button, Card } from "react-bootstrap";

const AllProduct = ({ product }) => {
  const { id, title, description, price, imageUrl } = product;
  return (
    <div className="col-6 border border-info my-1">
      <Card>
        <Card.Img variant="top" height="250px" width="250px" src={imageUrl} />
        <Card.Body>
          <Card.Title>Product Title: {title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>Price: {price}$</Card.Title>
          <Button type="button" class="btn btn-outline-info m-2">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllProduct;
