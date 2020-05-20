import React from 'react'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import GreenDot from '../Images/GreenDot.png'


const ServicesContainer = () => {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-between">
                <Col sm={1}>
                    <img alt="one on one" src={GreenDot}/>
                </Col>
                <Col sm={1}>
                    <img alt="kinstretch" src={GreenDot}/>
                </Col>
                <Col sm={1}>
                    <img alt="run club" src={GreenDot}/>
                </Col>
            </Row>
        </Container>
    )
}
export default ServicesContainer
