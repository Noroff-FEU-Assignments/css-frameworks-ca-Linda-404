import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Contact() {
  return (
    <>
      <h1>Submit your details</h1>

      <Container>
        <Row>
        <Col md={{ order: 2 }}>
            <ListGroup>
              <ListGroup.Item>email</ListGroup.Item>
              <ListGroup.Item>phone nr</ListGroup.Item>
              <ListGroup.Item>adress</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={{ order: 1 }}>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Label htmlFor="basic-url">Website</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    https://
                  </InputGroup.Text>
                  <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={6} />
                </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>  
        </Row>
      </Container>
    </>
  )
}

export default Contact
