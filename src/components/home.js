
import React from 'react';
import Container from 'react-bootstrap/Container';

function Home (props){
    const {username, firstName, lastName} = JSON.parse(localStorage.getItem("currentUser"));
    console.log (username, firstName, lastName);
    return (
        <Container className='home-wrapper'>
            <h1>Home</h1>
    <h2>Hello {firstName} {lastName}</h2>
        </Container>
    );
}

export default Home;