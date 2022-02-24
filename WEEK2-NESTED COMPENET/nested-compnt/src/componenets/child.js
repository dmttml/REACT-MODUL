import React from "react";
import {Card} from "react-bootstrap"
const Children = (props) => {
const child =props.children.map((child) =>{

    return(
     <div>
         <Card.Title className="baslik">CHILDREN</Card.Title>
            <Card style={{ width: '14rem' }}>
            
                <Card.Img variant="top" src={child.avatar}/>
                <Card.Body>
                    <Card.Text>{child.firstname}</Card.Text>
                    <Card.Text>{child.gender}</Card.Text>
                    <Card.Text>{child.birthday}</Card.Text>
                
                </Card.Body>
            </Card>
     </div>
    )
})
return child
}
export default Children
