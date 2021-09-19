import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Footer from '../Footer';

function Contact() {
  return (
    <>
      <Container className="d-none d-md-block">
        <h1>Submit your details</h1>
      </Container>
   
      <Container>
        <Row>
          <Col md={{ order: 2 }}>
            <ContactInfo />
          </Col>
          <Col className="d-md-none">
            <h1 className="header">Submit your details</h1>
          </Col>
          <Col md={{ order: 1 }}>
            <ContactForm />
          </Col>  
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Contact
