import React from 'react'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Figure from 'react-bootstrap/Figure'

const ServicesContainer = () => {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-between">
                <Col>
                    <Image src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fr%2FM%2FL%2Fo%2FR%2Fi%2Fgreen-dot.svg.thumb.png&f=1&nofb=1" roundedCircle />
                </Col>
                <Col>
                    <Image src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fr%2FM%2FL%2Fo%2FR%2Fi%2Fgreen-dot.svg.thumb.png&f=1&nofb=1" roundedCircle />
                </Col>
                <Col>
                    <Image src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fr%2FM%2FL%2Fo%2FR%2Fi%2Fgreen-dot.svg.thumb.png&f=1&nofb=1" alt="Run Club"roundedCircle />
                </Col>
            </Row>
            <Row className="d-flex justify-content-between">
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticmapmaker.com%2Fimg%2Fgoogle.png&f=1&nofb=1"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{<h3>Beth Contact information</h3>}</ListGroup.Item>
                            <ListGroup.Item>Email</ListGroup.Item>
                            <ListGroup.Item>Phone Number</ListGroup.Item>
                            <ListGroup.Item>Twitter</ListGroup.Item>
                            <ListGroup.Item>Facebook</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default ServicesContainer
