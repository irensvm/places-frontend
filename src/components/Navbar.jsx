import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CustomNavbar = props => {
    
    return (

        <Navbar bg="light" variant="light" expand="lg">
            <Nav.Link to="/">
            <Navbar.Brand>Places</Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="/list">List</Nav.Link>
                    <Nav.Link to="/addplace">Add</Nav.Link>
                    <Nav.Link to="/search">Search</Nav.Link>
                    <Nav.Link to="/projects">Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}


export default CustomNavbar
