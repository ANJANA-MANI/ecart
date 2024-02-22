import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {


  const wishlist = useSelector((state) => state.wishlistslice) || [];
 const cart=useSelector((state)=>state.cartReducer)
  console.log('wishlist',wishlist);
  return (
    <>
       <Navbar >
        <Container>
         
          <Navbar.Brand href="/">
            <img
              src="cart2.gif"
              width="90"
              height="90"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand><Link to={'/'} style={{textDecoration:"none",fontWeight:"bold",fontSize:"40px",color:"#52BE80"}}> E-cart</Link></Navbar.Brand>
          
          <Nav className="ms-auto" style={{}}>
            <Nav.Link ><Link to={'/'} style={{textDecoration:"none",fontWeight:"bold",color:"#52BE80"}}>Home</Link></Nav.Link>
            
            <Nav.Link ><Link to={'/Wishlist'} style={{textDecoration:"none",fontWeight:"bold",color:"#52BE80"}}>
                
            Wishlist <i className="fa-solid fa-heart fa-beat-fade text-danger fs-5"></i> <Badge className='rounder bg-dark' style={{width:"fit-content",height:"20px",padding:"5px",backgroundColor:"#52BE80"}}>{wishlist.length}</Badge>
                </Link></Nav.Link>
           
            <Nav.Link ><Link to={'/Cart'} style={{textDecoration:"none",fontWeight:"bold",color:"#52BE80"}}>Cart<i class="fa-solid fa-cart-shopping fa-beat-fade"></i> <Badge className='rounder bg-dark' style={{width:"fit-content",height:"20px",padding:"5px"}}>{cart.length}</Badge></Link></Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header