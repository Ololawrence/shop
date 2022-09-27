import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart,getUser} from "../../features/cartSlice";

import Button from "react-bootstrap/Button";

export const Cards = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddtoCart = (user) => {
    dispatch(addToCart(user));
    dispatch(getUser(props.userId));
    navigate("/cart");
  };

  return (
    <Card style={{ width: "15rem", height: "22rem", paddingTop: "1rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            handleAddtoCart(props.data);
          }}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Card;
