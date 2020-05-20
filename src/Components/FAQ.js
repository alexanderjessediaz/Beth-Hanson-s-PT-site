import React from 'react'
import Card from 'react-bootstrap/Card'

const FAQ = () => {
    return (
        <Card>
            <Card.Header>Question: "something something something something something something"</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                    Answer:
                        {''}
                            "something something something something something something something something something"
                        {''}
                    </p>    
                    <footer className="blockquote-footer">
                        John smith
                    </footer>
                </blockquote> 
            </Card.Body>
        </Card>
    )
}

export default FAQ