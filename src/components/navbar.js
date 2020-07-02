import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavbarComp (props){

    const handleSignoutClick = e => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("currentUser");
    }

    const handleStopLink = e => {
        if (!localStorage.getItem("jwt")){
            document.getElementById("home_link").setAttribute("href", "/");
        }
    }


    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand id="home_link" href="home" onClick={handleStopLink} > Home </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="signin" onClick={handleSignoutClick} > Sign In </Nav.Link>
                    <Nav.Link href="signup" onClick={handleSignoutClick} > Sign Up </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComp;
