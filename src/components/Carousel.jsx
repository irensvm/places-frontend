import React from 'react'
import { Carousel } from 'react-bootstrap'

function CustomCarousel() {
    return (
        <div className="container">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/imgs/01.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/imgs/02.jpg"
                alt="second slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        
    )
}
export default CustomCarousel
