import React, { Component } from 'react'
import axios from 'axios'

export class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            places: []
        }
    }
    componentDidMount = () => {
        this.getAllPlaces()
    }
    getAllPlaces = () => {
        axios.get('http://localhost:5000/api/places/')
        .then(({data}) => {
            this.setState({places: data})
        })    
    }
    render() {
        const placesList = this.state.places.map(place => (
            <div>
                <h4>{place.description}</h4>
            </div>
        ))
        return (
            <div>
                <h2>Manage your places</h2>
                {placesList}
            </div>
        )
    }
}

export default Admin
