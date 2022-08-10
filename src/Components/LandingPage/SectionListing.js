import React from "react";
import mockData from "./Mock.data";
import Card from "../Card.js/Card";
import "./Landing.scss";

const sectionListing = () => {
  let SectionList = mockData.map((data, index) => (
    <div className="first-section" key={index}>
      <Card img={data.image} title={data.title} />
    </div>
  ));
  return <div className="section-list">{SectionList}</div>;
};

export default sectionListing;
