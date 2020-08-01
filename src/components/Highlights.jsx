import React, { Component } from 'react'
import axios from 'axios'

class Highlights extends Component {
    constructor(props){
        super(props)
        this.state = {
            places: []
        }
    }

    async fetchData () {
        const response = await axios.get("http://localhost:5000/api/places/highlights?quantity=3")
        this.setState({
            places: response.data
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    
    render() {
        if(this.state.places.length > 0) {
            const highlistsImgs = this.state.places.map(place => <div></div>)
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default Highlights

