import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./Fashion.scss";
import FashionNav from "./fashionNav";
import { FashionCards } from "./fashionCard";
import { boysData } from "./FashionData";

const Boys = () => {
  let BoysCard = boysData.map((data, index) => (
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
        <Container className="boys-grid">{BoysCard}</Container>
      </Container>
    </>
  );
};

export default Boys;
