import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Contact = () => {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridfirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridlastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Email"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="Phone Number"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Greensboro"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>
            <Button variant="secondary" type="submit" block>
                Submit
            </Button>
        </Form>
    )
}
export default Contact