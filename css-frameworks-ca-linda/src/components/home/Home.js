import React from 'react'
import tabImageOne from "./tabimages/tab-1.jpg"
import tabImageTwo from "./tabimages/tab-2.jpg"
import tabImageThree from "./tabimages/tab-3.jpg"
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CarouselHome from "./CarouselHome";
import ContentTabs from './ContentTabs';


function Home() {
  return (
    <>
        <CarouselHome />

        <Container>
            <h1>we do yay things</h1>
            <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. 
                Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. 
                Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
            </p>
        </Container>

        <Container>
            <Accordion defaultActiveKey="0" className="d-md-none">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            First
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <img
                                className="d-block w-10"
                                src={tabImageOne}
                                alt="Third slide"
                                />
                            <div>share 
                                <i class="fab fa-facebook-f"></i> 
                                <i class="fab fa-twitter"></i>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Second
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <img
                                className="d-block w-10"
                                src={tabImageTwo}
                                alt="Third slide"
                                />
                            <div>share 
                                <i class="fab fa-facebook-f"></i> 
                                <i class="fab fa-twitter"></i>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Third
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <img
                                className="d-block w-10"
                                src={tabImageThree}
                                alt="Third slide"
                                />
                            <div>share 
                                <i class="fab fa-facebook-f"></i> 
                                <i class="fab fa-twitter"></i>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
        
        <Container>
            <div className="d-none d-md-block">
                <ContentTabs />
            </div>
        </Container>

        <footer>
            <div>social</div>
            <div>email@email.com</div>
            <div>copyright</div>
        </footer>
    </>
  )
}

export default Home
