import React, { Component } from 'react'
import Highlights from './Highlights'
import CustomCarousel from './Carousel'


export class Homepage extends Component {
    render() {
        return (
            <div>
                <CustomCarousel />
                <Highlights />
            </div>
        )
    }
}

export default Homepage
