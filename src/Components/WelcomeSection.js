import React from  'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BethLogo from '../Images/BethLogo.png'
import BethCaroP1 from '../Images/BethCaroP1.jpg'
import BethCaroP2 from '../Images/BethCaroP2.jpg'
import { Media } from 'react-bootstrap'


const WelcomeSection = () => {
    return (
    <Container fluid>
        <Row className="d-flex justify-content-around align-items-center">
            <Col xl={3}>
            <Card border="dark" style={{ width: '30rem'}}>
                <Card.Body>
                        <Card.Title as="h1">Simple Movement. Lasting Change.</Card.Title>
                        <Card.Text>
                            Discover the difference having a coach makes. Movement is nutrition for the body, mind & spirit. I prescribe movements that benefit your individual needs the most. I am committed to helping normal people and their bodies navigate life effectively and free of pain through implementation of scientifically sound programming and assessments.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://instagram.fapa1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/80373606_163548198211357_3677959916380993678_n.jpg?_nc_ht=instagram.fapa1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ph9kX9DzaJoAX_rCVwy&oh=1f03e4acb54a25d5ee4dcde8ae724e09&oe=5EE79FD4"
                        
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>optional caption</h3>
                            <p>text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://instagram.fapa1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/73455942_2313137928792383_2863290845105710515_n.jpg?_nc_ht=instagram.fapa1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=zjenkpAQ0VAAX85EIIw&oh=01cd050d23d095e5a987bcca3990f75e&oe=5EE8BB6B"
                        
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>optional caption</h3>
                            <p>text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
    )
}

export default WelcomeSection