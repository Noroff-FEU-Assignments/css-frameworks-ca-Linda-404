import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import imageOne from "./Carouselimages/carousel-1.jpg"
import imageTwo from "./Carouselimages/carousel-2.jpg"
import imageThree from "./Carouselimages/carousel-3.jpg"

function CarouselHome() {
  return (
    <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageOne}
                    alt="First slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageTwo}
                alt="Second slide"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageThree}
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
  )
}

export default CarouselHome
