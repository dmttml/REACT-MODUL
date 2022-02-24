import React from "react"
import { Card } from "react-bootstrap"
export default function Person(props) {
    const person = props.person
    return (
        <div key={person.id}>
            <Card.Title className="baslik">PERSON</Card.Title>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={person.avatar} />
                <Card.Body>
                    <Card.Text></Card.Text>
                    <Card.Text>{person.first_name}</Card.Text>
                    <Card.Text>{person.last_name}</Card.Text>
                    <Card.Text>{person.salary}</Card.Text>
                    <Card.Text>{person.gender}</Card.Text>
                    <Card.Text>{person.email}</Card.Text>


                </Card.Body>
            </Card>


        </div>
    )
}
