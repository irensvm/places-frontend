import React, { Component } from 'react'
import Highlights from './Highlights'
import CustomCarousel from './Carousel'


export class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>homepage</h1>
                <CustomCarousel />
                <Highlights />
            </div>
        )
    }
}

export default Homepage
