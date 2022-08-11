import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Landing.scss";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { cardData } from "./Mock.data";
import { Cards } from "./../Card.js/Card";
import { settings } from "./settings";
import Banner from "../images/banner-full.jpg";
import banners from "../images/banner-top.jpg";
import banners1 from "../images/item3.jpg";
import banners2 from "../images/item4.jpg";
import prod1 from "../images/product1.jpg";
import prod2 from "../images/product2.jpg";
import prod3 from "../images/product3.jpg";
import prod4 from "../images/product4.jpg";

const Landing = () => {
  let moreCards = cardData.map((data, index) => (
    <Cards
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
        <Container style={{ flex: "0.5" }} className="navs">
          <div className="side-nav">
            <h5>Category</h5>
            <p>
              <Link to="/fashion">fashion</Link>
            </p>
            <p>
              <Link to="/"> Electronics</Link>
            </p>
            <p>
              <Link to=''> home and garden</Link>
            </p>
        
          </div>

          {/* second filter menu */}
          
          <div className="side-nav1">
            <h5>filter by price</h5>
            <p>$100 -$250</p>
            <p>$250 -$500</p>
            <p>$500-$750</p>
            <p>$750-$1000</p>
          </div> 
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
          <Container className="cont">
            <Container className="cont-1">
              <Slider {...settings}>{moreCards}</Slider>
            </Container>
          </Container>

          <Container className="decor">
            <Card className="home-decor-left">
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ flex: "1.5", border: "none" }}>
              <Card.Img className="home-decor" src={Banner} />
            </Card>
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

export default Landing;
