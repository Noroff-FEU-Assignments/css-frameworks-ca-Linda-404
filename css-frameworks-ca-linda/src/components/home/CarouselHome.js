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
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageTwo}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imageThree}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
  )
}

export default CarouselHome
