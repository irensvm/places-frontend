import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    handleDelete = () => {
        
    }
    render() {
        const placesList = this.state.places.map(place => (
            <div key={place._id}>
                <h4>{place.name} - {place.description}</h4>
                <Link className='btn btn-primary' to={'/edit/' + place._id}>Edit</Link>
                <button className='btn btn-danger' onClick={this.handleDelete}>Delete placce</button>
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
