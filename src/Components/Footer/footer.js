import React from 'react'
import './footer.scss';
import Container from 'react-bootstrap/Container';


const footer = () => {
  return (
    <>
      <Container fluid className="fluid">
        <Container>
          <h6>CONTACT INFORMATION</h6>
          <p>123 Shopo St Commerce Land, EC 12345</p>
          <p>+123 456 7890</p>
          <p>info@domain.com</p>
        </Container>
        <Container>
          <h6>COLLECTION</h6>
          <ul>
            <li>Fashion</li>
            <li>Electronics</li>
            <li>Home And GArden</li>
            <li>Music</li>
            <li>Fashion</li>
          </ul>
        </Container>
        <Container>
          <h6>MY ACCOUNT</h6>

          <ul>
            <li>Account</li>
            <li>Login</li>
            <li>My Cart</li>
            <li>Wishlist</li>
            <li>Checkout</li>
          </ul>
        </Container>
      </Container>
    </>
  );
}

export default footer