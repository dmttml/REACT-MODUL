import React from "react"
import Person from "./person"
import { Container, Row, Col } from "react-bootstrap"
import Children from "./child"
import Friends from "./friends"
const PersonList = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={4}>
                        <Person></Person>
                    </Col>
                    <Col xs={8}>
                        <Children ></Children>
                        <Friends ></Friends>
                    </Col>
                </Row>


            </Container>
        </div>
    )

}
export default PersonList