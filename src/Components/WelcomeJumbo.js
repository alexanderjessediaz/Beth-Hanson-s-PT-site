import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Media } from 'react-bootstrap'

const WelcomeJumbo = () => {
    return (
        <Container fluid>
            <Jumbotron>
                <Media>
                    <img
                        src="https://uploads-ssl.webflow.com/5e8f60e580e03809212616c0/5e8f9505fc7dbc4a875ba956_U1XtMKA%20-%20Imgur.jpg"
                        height={300}
                        width={450}
                        className="align-self-center mr-3"
                        alt="welcomepicture"
                        />
                <Media.Body>
                    <h2>About Beth</h2>
                    <p>
                        Movement is nutrition for the body, mind &amp; spirit. I prescribe movements that benefit your individual needs the most. I am committed to helping normal people and their bodies navigate life effectively and free of pain through implementation of scientifically sound programming and assessments.
                    </p>
                    <br/>
                    <h2>Bio</h2>
                    <p>
                        My professional interests include mobility &amp; joint health, endurance sports, general health &amp;
                        well-being, as well as promoting health and wellness at any size, age or ability. By combining
                        extensive knowledge of human physiology &amp; anatomy with common sense, I guarantee a safe
                        space for growing and trying new movements and habits.
                    </p>
                </Media.Body>
                </Media>
                
                
            </Jumbotron>
        </Container>
    )
}
export default WelcomeJumbo