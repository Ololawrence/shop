import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cartSlice";
import Button from "react-bootstrap/Button";

export const FashionCards = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddtoCart = (user) => {
    dispatch(addToCart(user));
    navigate("/cart");
  };

  return (
    <Card style={{ width: "15rem", height: "19rem", paddingTop: "1rem", marginBottom:'10px' }}>
      <Card.Img variant="top" src={props.img} style = {{width:'10rem', height:'7rem', alignSelf: 'center', cursor:'pointer', marginBottom:'2rem'}} />
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

export default FashionCards;
