import React from "react";
import { Card} from "react-bootstrap";

const Child = (props) => {
    const child = props.data.map((child) => {    
    return (
        <div>
            <Card.Title className="baslik"  >CHILDREN</Card.Title>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={child.avatar} />
                <Card.Body>
                    <Card.Text>Firstname:{child.firstName}</Card.Text>
                    <Card.Text>Gender:{child.gender}</Card.Text>
                    <Card.Text>Birthday:{child.birthday}</Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
    return child
})
}
export default Child