import React from  'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BethCaroimg from '../Images/BethCaroimg.jpg'
import BethCaroLBBShirt from '../Images/BethCaroLBBShirt.jpg'
import BethCaroGroupPhoto from '../Images/BethCaroGroupPhoto.jpg'
// import BethLogo from '../Images/BethLogo.png'
import HighResBethLogo from '../Images/HighResBethLogo.png'



const WelcomeSection = () => {
    return (
    <Container fluid>
        <Row className="d-flex justify-content-around align-items-center">
            <Col md={1}>
            <Card border="light" style={{ width: '25em'}} className="text-lg-center">
                <Card.Img variant="top" src={HighResBethLogo}/>
                <Card.Body >
                        <Card.Title as="h1">Simple Movement. Lasting Change.</Card.Title>
                        <Card.Text>
                            Discover the difference having a coach makes. Movement is nutrition for the body, mind &amp; spirit.<br></br> <br/> I prescribe movements that benefit your individual needs the most.<br></br> <br/> I am committed to helping normal people and their bodies navigate life effectively and free of pain through implementation of scientifically sound programming and assessments.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={BethCaroimg}
                        alt="First slide"
                        />
                        <Carousel.Caption text="muted" >
                            <h3>One on One Training</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={BethCaroLBBShirt}
                        alt="Second slide"
                        />
                        <Carousel.Caption text="muted">
                            <h3>LBB Run Club</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={BethCaroGroupPhoto}
                        alt="third slide"
                        />
                        <Carousel.Caption>
                            <h3>Group training available</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
    )
}

export default WelcomeSection