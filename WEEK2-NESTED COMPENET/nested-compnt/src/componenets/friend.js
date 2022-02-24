import React from "react";
import { Card } from "react-bootstrap";

const Friends = () => {
    return(
        <div>
            <Card.Title className="baslik">FRIENDS</Card.Title>
            <Card style={{ width: '14rem' }}>
            
                <Card.Img variant="top" src="https://robohash.org/inventoredolorumest.png?size=250x250&set=set1" />
                <Card.Body>
                    <Card.Text>firstname</Card.Text>
                    <Card.Text>gender</Card.Text>
                    <Card.Text>birthday</Card.Text>
                    <Card.Text>phone</Card.Text>
                
                </Card.Body>
            </Card>
        </div>
    )
}
export default Friends