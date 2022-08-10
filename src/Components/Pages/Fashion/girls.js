import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./Fashion.scss";
import FashionNav from "./fashionNav";
import { FashionCards } from './fashionCard';
import { femalTankTop } from "./FashionData";

const Girls = () => {
    let girlscard = femalTankTop.map((data, index) => (
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
        <Container className="girls-grid">{girlscard}</Container>
      </Container>
    </>
  );
};

export default Girls;
