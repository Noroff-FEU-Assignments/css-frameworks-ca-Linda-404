import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import tabImageOne from "./tabimages/tab-1.jpg"
import tabImageTwo from "./tabimages/tab-2.jpg"
import tabImageThree from "./tabimages/tab-3.jpg"

function ContentAccordion() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
        <Card>
            <Card.Header className="accordion__header">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    First
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body className="accordion__body">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    <img
                        className="d-block w-10 tab-image"
                        src={tabImageOne}
                        alt="First slide"
                        />
                    <div className="accordion__social">
                        <div className="accordion__social__item">SHARE</div> 
                        <div className="accordion__social__item"><i class="fab fa-facebook-f"></i></div> 
                        <div className="accordion__social__item"><i class="fab fa-twitter"></i></div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header className="accordion__header">
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Second
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body className="accordion__body">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    <img
                        className="d-block w-10 tab-image"
                        src={tabImageTwo}
                        alt="Third slide"
                        />
                    <div className="accordion__social">
                        <div className="accordion__social__item">SHARE</div> 
                        <div className="accordion__social__item"><i class="fab fa-facebook-f"></i></div> 
                        <div className="accordion__social__item"><i class="fab fa-twitter"></i></div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header className="accordion__header">
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Third
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
                <Card.Body className="accordion__body">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    <img
                        className="d-block w-10 tab-image"
                        src={tabImageThree}
                        alt="Third slide"
                        />
                    <div className="accordion-social">
                        <div className="accordion__social__item">SHARE</div> 
                        <div className="accordion__social__item"><i class="fab fa-facebook-f"></i></div> 
                        <div className="accordion__social__item"><i class="fab fa-twitter"></i></div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
  )
}

export default ContentAccordion
