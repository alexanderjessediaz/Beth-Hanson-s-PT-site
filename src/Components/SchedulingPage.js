import React from 'react'
import Container from 'react-bootstrap/Container'


function SchedulingPage(){

    return (
        <Container className="d-flex justify-content-center">
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=15308119" title="Schedule Appointment" width="75%" height="800" frameBorder="0"></iframe>
        </Container>
    )
}

export default SchedulingPage