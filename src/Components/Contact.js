import React from 'react'
import Card from 'react-bootstrap/Card'
import ModalComponent from './ModalComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card className="text-center" border="light">
                        <Card.Body>
                            <Card.Text>
                                I’m proud to train at DownTown Fitness on Elm at 610 N. Elm St. A private studio located in
                                downtown Greensboro, DTF has been my home since 2014. I offer both private and group
                                training out of this location (up to 6 people).<br/>

                                In addition to my downtown location, I am also available for both private and group classes at
                                Aspire Sports Therapies located in historic Revolution Mill at 1175-L Revolution Mill Dr. Suite
                                38.<br/>

                                In home &amp; online training is available. No equipment necessary.
                            </Card.Text>
                            <ModalComponent/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact