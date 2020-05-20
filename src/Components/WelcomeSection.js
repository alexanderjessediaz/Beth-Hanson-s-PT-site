import React from  'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BethLogo from '../Images/BethLogo.png'
import { Media } from 'react-bootstrap'


const WelcomeSection = () => {
    return (
        <Container>
            <Row className="d-flex align-items-center">
                <Col>
                    <Media>
                        <img alt="" src={BethLogo}/>
                    </Media>
                </Col>
                <Col>
                    <Carousel >
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://instagram.fapa1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/80373606_163548198211357_3677959916380993678_n.jpg?_nc_ht=instagram.fapa1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ph9kX9DzaJoAX_rCVwy&oh=1f03e4acb54a25d5ee4dcde8ae724e09&oe=5EE79FD4"
                            fluid
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
                            fluid
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