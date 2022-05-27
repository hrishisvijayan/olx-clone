import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <Container>
        <Row>
          <Col>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul style={{listStyle:'none'}}>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul style={{listStyle:'none'}}>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul style={{listStyle:'none'}}>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </Col>
        </Row>
        </Container>
      </div>
      <div className="footer">
        <Container className='d-flex justify-content-between'>
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
