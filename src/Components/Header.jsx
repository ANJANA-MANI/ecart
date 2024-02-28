import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlist = useSelector((state) => state.wishlistslice) || [];
  const cart = useSelector((state) => state.cartReducer);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="cart2.gif"
              width="90"
              height="90"
              className="d-inline-block align-top"
              alt="E-cart logo"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "40px",
                color: "#52BE80",
                fontFamily: "Kdam Thmor Pro",
              }}
            >
              E-cart
            </Link>
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#52BE80",
                }}
              >
                <i className="fa-solid fa-home"></i> Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/Wishlist"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#52BE80",
                }}
              >
                <i className="fa-solid fa-heart"></i> Wishlist
                <Badge
                  className="rounded"
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "#52BE80",
                  }}
                >
                  {wishlist.length}
                </Badge>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/Cart"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#52BE80",
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i> Cart
                <Badge
                  className="rounded "
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  {cart.length}
                </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;