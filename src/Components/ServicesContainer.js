import React from 'react'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'




const ServicesContainer = () => {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-between">
                <Col sm={1}>
                    <Button variant="secondary" size="lg">Training</Button>
                </Col>
                <Col sm={1}>
                    <Button variant="success" size="lg">Kinstretch</Button>
                </Col>
                <Col sm={1}>
                    <Button variant="secondary" size="sm">Little Brother Run Club</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default ServicesContainer
