import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { AccordionToggle, AccordionCollapse } from 'react-bootstrap'
import ModalComponent from './ModalComponent'





const ServicesContainer = () => {
    return (
        <Container fluid>
                    <Accordion >
                        <Card>
                            <Card.Header className="d-flex justify-content-center">
                                <AccordionToggle as={Button} variant="primary" size="lg" eventKey="0">
                                    Training
                                </AccordionToggle>
                            </Card.Header>
                            <AccordionCollapse eventKey="0">
                                <Card.Body className="mb text-muted">
                                    <h4>One on One: <br/></h4> 
                                    <p> 
                                        I offer personal training in a private or semi-private space depending on
                                        your comfort level. Available in 30, 45 or 60 minute blocks, a one on one
                                        ensures all eyes are on you and your goals. Available online &amp; in person.
                                    </p> 
                                    <Button variant="primary" size="sm">Schedule a one on one appointment today!</Button> 
                                    <hr class="my-4"></hr>
                                    <h4>Small Group Training: <br/></h4> 
                                    <p>
                                        Available for groups of 2 to 6 people. A great way to reach goals with like-minded friends and hold one another accountable.
                                    </p>
                                    <ModalComponent/>
                                </Card.Body>
                            </AccordionCollapse>
                        </Card>
                    </Accordion>
                <Accordion>
                        <Card>
                            <Card.Header className="d-flex justify-content-center">
                                <AccordionToggle as={Button} variant="success" size="lg" eventKey="1">
                                    Kinstretch
                                </AccordionToggle>
                            </Card.Header>
                            <AccordionCollapse eventKey="1">
                                <Card.Body className="mb text-muted">
                                    <h4>What it is: <br/></h4> 
                                    <p>
                                        A movement class centered on active mobility rather than flexibility . Explore the
                                        outer limits of your current range of motion. Appropriate for anyone comfortable
                                        sitting on the floor.
                                    </p>
                                    <Button variant="success" size="sm">Schedule an appointment today!</Button>
                                    <hr class="my-4"></hr>
                                    <h4>Coffee &amp; CARs: <br/></h4>
                                    <p>
                                        a great way to spice up your daily routine and hold yourself
                                        accountable. Nourish every joint in your body while you sip your morning coffee.
                                        Available online &amp; in person.
                                    </p> 
                                    <Button variant="success" size="sm">Schedule an appointment today!</Button>
                                </Card.Body>
                            </AccordionCollapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header className="d-flex justify-content-center">
                                <AccordionToggle as={Button} variant="secondary" size="lg" eventKey="2">
                                    Little Brother Run Club
                                </AccordionToggle>
                            </Card.Header>
                            <AccordionCollapse eventKey="2">
                                <Card.Body>
                                    <p>
                                        Join me every Tuesday at 6p rain or shine for the only FREE run club with a
                                        coach in town. Incentives include free beer &amp; LBB swag for members.
                                    </p>
                                    <Button variant="secondary" size="sm">Click here for more details</Button>
                                </Card.Body>
                            </AccordionCollapse>
                        </Card>
                    </Accordion>
        </Container>
    )
}
export default ServicesContainer

