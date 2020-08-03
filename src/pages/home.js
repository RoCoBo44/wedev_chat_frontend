import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import useCurrentUserQuery from '../hooks/useCurrentUserQuery'


function Home (props){
  const {loading, error, currentUser} = useCurrentUserQuery()

  if (loading) return null
  if (error) return  'error '

  return (
    <Container >
      <h1>Home</h1>
      <Container className= 'd-flex justify-content-center align-items-center '>
      <Row>
        <Col >
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt= '171x180 '
            src= '/images/dewi.png '
          />
        </Figure>
        </Col>
        <Col >
          <h4> Hello, nice to see you again {currentUser.firstName} {currentUser.lastName} </h4>
        </Col>
      </Row>
      </Container>
    </Container>
  ) 
}


export default Home
