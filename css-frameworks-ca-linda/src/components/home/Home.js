import React from 'react'
import imageOne from "./Carouselimages/carousel-1.jpg"
import imageTwo from "./Carouselimages/carousel-2.jpg"
import imageThree from "./Carouselimages/carousel-3.jpg"
import tabImageOne from "./tabimages/tab-1.jpg"
import tabImageTwo from "./tabimages/tab-2.jpg"
import tabImageThree from "./tabimages/tab-3.jpg"
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


function Home() {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageOne}
                    alt="First slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageTwo}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageThree}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <h1>we do yay things</h1>
        <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. 
            Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. 
            Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
        </p>

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
        
        <div className="d-none d-md-block">
            <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
                <Tab eventKey="one" title="First">
                    <img
                        className="d-block w-10"
                        src={tabImageOne}
                        alt="Third slide"
                        />
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    <div style={{ backgroundImage: "url(~/Tabimages/tab-1.jpg)"}}></div>
                    <div>share 
                        <i class="fab fa-facebook-f"></i> 
                        <i class="fab fa-twitter"></i>
                    </div>
                </Tab>
                <Tab eventKey="two" title="Second">
                    <img
                        className="d-block w-10"
                        src={tabImageTwo}
                        alt="Third slide"
                        />
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    <div>share 
                        <i class="fab fa-facebook-f"></i> 
                        <i class="fab fa-twitter"></i>
                    </div>
                </Tab>
                <Tab eventKey="three" title="Third">
                    <img
                        className="d-block w-10"
                        src={tabImageThree}
                        alt="Third slide"
                        />
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    <div>share 
                        <i class="fab fa-facebook-f"></i> 
                        <i class="fab fa-twitter"></i>
                    </div>
                </Tab>
            </Tabs>
        </div>

        <footer>
            <div>social</div>
            <div>email@email.com</div>
            <div>copyright</div>
        </footer>
    </>
  )
}

export default Home
