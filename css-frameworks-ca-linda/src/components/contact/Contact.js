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
      <Container>
        <h1>Submit your details</h1>
      </Container>
   
      <Container>
        <Row>
          <Col md={{ order: 2 }}>
            <ContactInfo />
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
