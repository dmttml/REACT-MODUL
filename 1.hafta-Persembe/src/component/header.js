import React from 'react'
import { Container,Nav,Navbar,} from 'react-bootstrap'



function Header()  {
    return(
      
        <div>
          <>
          <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Nav className="justify-content-end" >
                  <Nav.Link  href='#Home'>Home</Nav.Link>
                  <Nav.Link  href='#About'>About</Nav.Link>
                  <Nav.Link  href='#Contact'>Contact</Nav.Link>
                </Nav>
           </Container>
         </Navbar>
         </>
         
        </div>
     
    )

    
}
export default Header;