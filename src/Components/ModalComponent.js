import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

class ModalComponent extends Component {

state = {
  showHide: false,
  name:"",
  email:"",
  message:""

}

handleModalShowHide() {
  this.setState({ showHide: !this.state.showHide })
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

render(){
  return(
      <div>
          <Button variant="primary" onClick={() => this.handleModalShowHide()}>
              Contact Me
          </Button>

          <Modal show={this.state.showHide}>
              <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
              <Modal.Title>Can't wait to hear from you</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      name="name"
                      label="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      label="email" 
                      value={this.state.email}
                      onChange={this.handleChange}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                    name="message" 
                    as="textarea"
                    rows="5"
                    label="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                  Close
              </Button>
              <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                  Send Message
              </Button>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default ModalComponent;