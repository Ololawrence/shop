import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./Fashion.scss";
import FashionNav from "./fashionNav";
import { FashionCards } from './fashionCard';
import { femaleWear } from "./FashionData";

const Women = () => {
    let femaleCards = femaleWear.map((data, index) => (
    <FashionCards
      key={index}
      data={data}
      title={data.title}
      img={data.image}
      sex={data.sex}
      brand={data.brand}
      size={data.size}
      price={data.price}
    />
  ));
  return (
    <>
      <FashionNav />
 
      <Container className="conts">
        <Container className="women-grid">{femaleCards}</Container>
      </Container>
    </>
  );
};

export default Women;
