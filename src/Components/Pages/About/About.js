import React from "react";
import Card from "react-bootstrap/Card";
import './About.scss';

import abt1 from "../../images/about-img-1.jpg";
import abt2 from "../../images/about-img-2.jpg";
import abt3 from "../../images/about-img-3.jpg";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <>
      <Container className="wrappers">
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img variant="top" src={abt1} />
          <Card.Body>
            <Card.Title
              style={{ textAlign: "center", color: "rgb(39, 156, 245)" }}
            >
              Our Vision
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore magna aliqua consectetur
              adipisicing.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img variant="top" src={abt2} />
          <Card.Body>
            <Card.Title
              style={{ textAlign: "center", color: "rgb(39, 156, 245)" }}
            >
              What We Do
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore magna aliqua consectetur
              adipisicing.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img variant="top" src={abt3} />
          <Card.Body>
            <Card.Title
              style={{ textAlign: "center", color: "rgb(39, 156, 245)" }}
            >
              Company History
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore magna aliqua consectetur
              adipisicing.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container fluid className="staff">
        <Container>
          <h3>Happy Customers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquim ad minim
            veniam, quis nostrud
          </p>

          <Container className="testimony">
            <Card  className ="card" style={{ width: "18rem", border: "none", height: "180px" }}>
              <Card.Body>
                <Card.Text style={{ textAlign: "justify", paddingTop: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua
                  consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "18rem", border: "none",}}
            >
              <Card.Body>
                <Card.Text style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua
                  consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "18rem", border: "none" }}
            >
              <Card.Body>
                <Card.Text style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua
                  consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default About;
