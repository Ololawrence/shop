import React from "react";
import "./Fashion.scss";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { femaleWear } from "./FashionData";
import { FashionCards } from "./fashionCard";
import banners from "../../images/fashion3.jpg";
import banners1 from "../../images/fashion1.jpg";
import banners2 from "../../images/fashion2.jpg";
import prod1 from "../../images/product1.jpg";
import prod2 from "../../images/product2.jpg";
import prod3 from "../../images/product3.jpg";
import prod4 from "../../images/product4.jpg";
import SideNav from "./sideNav";





const Fashion = () => {
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
      <Container className="cont">
        <Container style={{ flex: "0.5" }} className ='wrapper'>
          <SideNav />

          {/* second filter menu */}
        </Container>
        <Container style={{ flex: "1.50" }}>
          <Container className="cont-1">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 img"
                  src={banners}
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/* <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100  img"
                  src={banners1}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img"
                  src={banners2}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>

          <div className="product-section">
            <h2>New products</h2>
            <div className="section-header">
              <span> featured products</span>
              <span> special products</span>
            </div>
          </div>
          <Container fluid className="conts">
            <Container className="cont-2">{femaleCards}</Container>
          </Container>

          <Container className="last-section">
            <Container>
              <h5>BEST SELLER</h5>
              <Container className="product">
                <Card style={{ width: "11rem", marginBottom: "3rem" }}>
                  <Card.Img variant="top" src={prod1} />
                </Card>
                <Container className="product-info">
                  <li>Leather belt</li>
                  <li>Leather belt</li>
                  <li>$180</li>
                </Container>
              </Container>
              <Container className="product">
                <Card style={{ width: "11rem", marginBottom: "3rem" }}>
                  <Card.Img variant="top" src={prod2} />
                </Card>
                <Container className="product-info">
                  <li>Leather belt</li>
                  <li>Leather belt</li>
                  <li>$180</li>
                </Container>
              </Container>
            </Container>
            <Container>
              <h5>SALES</h5>
              <Container className="product">
                <Card style={{ width: "11rem", marginBottom: "3rem" }}>
                  <Card.Img variant="top" src={prod3} />
                </Card>
                <Container className="product-info">
                  <li>Leather belt</li>
                  <li>Leather belt</li>
                  <li>$180</li>
                </Container>
              </Container>
              <Container className="product">
                <Card style={{ width: "11rem", marginBottom: "3rem" }}>
                  <Card.Img variant="top" src={prod4} />
                </Card>
                <Container className="product-info">
                  <li>Leather belt</li>
                  <li>Leather belt</li>
                  <li>$180</li>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Fashion;
