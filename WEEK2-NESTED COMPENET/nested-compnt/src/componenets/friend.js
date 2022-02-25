import React from "react";
import { } from "react-bootstrap";
const Friend = (props) => {
    const friend =props.data.map((friend) => {

    
    return (
        <div>
            <Card.Title className="baslik">FRIENDS</Card.Title>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={friend.avatar} />
                <Card.Body>
                    
                    <Card.Text>Firstname:{friend.firstName}</Card.Text>
                    <Card.Text>Gender:{friend.gender}</Card.Text>
                    <Card.Text>Birthday:{friend.birthday}</Card.Text>
                    <Card.Text>Phone:{friend.phone}</Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    )
    return friend
})
}
export default Friend