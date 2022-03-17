import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import Form from './form'
import Person from './person'
function PersonList() {
    return (
       <div>
            <Container  >
                <Row className='content'>
                    <Col  className="col"  >
                        <Form></Form>
                    </Col>

                    <Col className="col">
                        <Person></Person>
                    </Col>
                </Row>
            </Container>
         </div>
    )
}

export default PersonList