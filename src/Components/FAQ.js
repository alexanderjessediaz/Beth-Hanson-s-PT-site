import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ModalComponent from './ModalComponent'

const FAQ = () => {
    return (
        <CardDeck>
            <Card bg="secondary" text="light">
                <Card.Header >Q: "I’ve never worked with a personal trainer before. What should I expect?"</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        A:<br/>
                            {''}
                                Every new client starts with a complete assessment &amp; is given a daily routine.
                                This allows me to personalize your program and ensure your goals are within
                                reach. Expect to be appropriately challenged and explore new movements.
                            {''}
                        </p>     
                    </blockquote> 
                </Card.Body>
            </Card>
            <Card bg="success" text="light">
                <Card.Header>Q:<br/> "What is your movement philosophy?"</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        A:<br/>
                            {''}
                                Change is the only constant. Our body is constantly shifting and adapting to new
                                stimuli; age, environment, activity, etc... My goal is to provide your body with as
                                many safe options for movement as possible. More options means less chance
                            {''}
                        </p>     
                    </blockquote> 
                </Card.Body>
            </Card>
            <Card bg="secondary" text="light">
                <Card.Header>Q:<br/> "What is Kinstretch?"</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        A:<br/>
                            {''}
                                A movement class centered on active mobility. Explore the outer limits of your
                                current range of motion. Appropriate for anyone comfortable sitting on the floor.
                                <br/>
                                <Button variant="success" size="sm">FIND OUT MORE</Button>
                                
                            {''}
                        </p>    
                    </blockquote> 
                </Card.Body>
            </Card>
            <Card bg="success" text="light">
                <Card.Header>Q:<br/> "How much do you charge?"</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        A:<br/>
                            {''}
                            to see where I am currently accepting clients &amp; for rate information:
                            <ModalComponent/>
                            {''}
                        </p>     
                    </blockquote> 
                </Card.Body>
            </Card>
        </CardDeck>
    )
}

export default FAQ