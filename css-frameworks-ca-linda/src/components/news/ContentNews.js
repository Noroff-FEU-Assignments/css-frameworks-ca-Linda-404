import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import newsImageOne from "./newsimages/news-1.jpg";
import newsImageTwo from "./newsimages/news-2.jpg";
import newsImageThree from "./newsimages/news-3.jpg";
import newsImageFour from "./newsimages/news-4.jpg";
import newsImageFive from "./newsimages/news-5.jpg";
import newsImageSix from "./newsimages/news-6.jpg";
import newsImageSeven from "./newsimages/news-7.jpg";
import newsImageEight from "./newsimages/news-8.jpg";

function ContentNews() {
  return (
    <Row xs={"auto"} md={4}>
        <Col>
            <Card className="card__content">
                <Card.Img variant="top" src={newsImageOne} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                    </Card.Text>
                    <Button variant="card-btn">MORE</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="card__content">
                <Card.Img variant="top" src={newsImageTwo} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                    </Card.Text>
                    <Button variant="card-btn">MORE</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="card__content">
                <Card.Img variant="top" src={newsImageThree} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                    </Card.Text>
                    <Button variant="card-btn">MORE</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="card__content">
                <Card.Img variant="top" src={newsImageFour} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                    </Card.Text>
                    <Button variant="card-btn">MORE</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="card__content">
                <Card.Img variant="top" src={newsImageFive} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                    </Card.Text>
                    <Button variant="card-btn">MORE</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="card__content">
                <Card.Img variant="top" src={newsImageSix} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                    </Card.Text>
                    <Button variant="card-btn">MORE</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="card__content">
                <Card.Img variant="top" src={newsImageSeven} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                    </Card.Text>
                    <Button variant="card-btn">MORE</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="card__content">
                <Card.Img variant="top" src={newsImageEight} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                    </Card.Text>
                    <Button variant="card-btn">MORE</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}

export default ContentNews
