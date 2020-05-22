import React from 'react'
import Card from 'react-bootstrap/Card'
import ModalComponent from './ModalComponent'

const Contact = () => {
    return (
        <Card className="text-center">
            <Card.Header as="h2">Contact Me</Card.Header>
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
                <ModalComponent></ModalComponent>
            </Card.Body>
        </Card>
    )
}
export default Contact