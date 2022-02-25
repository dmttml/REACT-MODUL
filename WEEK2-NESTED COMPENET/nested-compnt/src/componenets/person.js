import React from "react"
import {Card} from "react-bootstrap"
const Person = (props) => {
    const person = props.map((person) => {

    return (
        <div> 
            <Card.Title className="baslik" style={{width:'16rem'}}>PERSON :{person.id}</Card.Title>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Text>Firstname: {person.first_name}</Card.Text>
                <Card.Text>Lastname: {person.last_name}</Card.Text>
                <Card.Text>Adress:{person.address}</Card.Text>
                <Card.Text>Salary:{person.salary}</Card.Text>
                <Card.Text>Gender:{person.gender}</Card.Text>
                <Card.Text>Email:{person.email}</Card.Text>
                  
            </Card.Body>
        </Card>
        </div>
    )
    return person
})
}
export default Person