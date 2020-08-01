import React from 'react'
import { Carousel } from 'react-bootstrap'

function CustomCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../public/imgs/01.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../public/imgs/02.jpg"
                alt="second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default CustomCarousel
