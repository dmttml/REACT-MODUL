import React from 'react'
import{Card,Button, CardGroup} from 'react-bootstrap'
function Cards() {
    return(
        <div className='card-grup'>
             <CardGroup className="col-md-7 mx-auto m-4">
                    <Card className="card" style={{ width: '16rem' }} >
                      <Card.Img variant="top" src="http://uzmanimakademi.net/img/ice-age.jpg" alt='' />
                         <Card.Body>
                           <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                 Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                         </Card.Body>
                   </Card>
                   <Card className="card" style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="http://uzmanimakademi.net/img/ice-age.jpg" className='images' />
                         <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                               <Card.Text>
                                 Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                              </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://uzmanimakademi.net/img/ice-age.jpg" />
                         <Card.Body>
                           <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                 Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                               </Card.Text>
                               <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                   </Card>
               </CardGroup>
          
          </div>
    );

    
}
export default Cards