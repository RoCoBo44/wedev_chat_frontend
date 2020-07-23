import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

import CURRENT_USER from '../apollo/queries/currentUser'
import { useQuery } from '@apollo/react-hooks'

function Home (props){
    let firstName,lastName = ""
    const{ loading, error, data }= useQuery(CURRENT_USER)
    if (!loading & !error){
        firstName= data.currentUser.firstName
        lastName= data.currentUser.lastName
    }
    return (
        <Container >
            <h1>Home</h1>
            <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col >
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="/images/dewi.png"
                    />
                </Figure>
                </Col>
                <Col >
                    <h4> Hello, nice to see you again {firstName} {lastName} </h4>
                </Col>
            </Row>
            </Container>
        </Container>
    );
}


export default Home
