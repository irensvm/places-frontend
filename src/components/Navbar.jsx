import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CustomNavbar = props => {
    
    return (

        <Navbar bg="light" variant="light" expand="lg">
            <Link to="/">
            <Navbar.Brand>Places</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/list">List</Link>
                    <Link to="/addplace">Add</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/admin">Admin</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}


export default CustomNavbar
