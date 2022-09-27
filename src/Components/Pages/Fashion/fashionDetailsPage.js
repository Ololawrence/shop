import React from 'react';
import { useSelector } from 'react-redux';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const FashionDetailsPage = () => {
    const CartDetails = useSelector(state => state.cart);

  return (
    <Container>
      <Row>
        <Col><img src= {CartDetails}  alt ='cart details'/></Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default FashionDetailsPage;