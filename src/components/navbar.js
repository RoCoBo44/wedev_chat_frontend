import React from 'react' 
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom' 

function NavbarComp (props){
  const { location } = props

  return (
    <Navbar className='navbar' collapseOnSelect expand='sm' bg='dark' variant='dark'>
      <Navbar.Brand id='home_link' > <Link to= '/'> Home </Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto' activeKey={location.pathname}>
          <Link to= '/signIn'> Sign in </Link> 
          <Link to= '/signUp'> Sign up </Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) 
}

export default NavbarComp 
