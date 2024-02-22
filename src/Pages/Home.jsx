import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Hooks/Slice/Whishlistslice';
import Wishlist from '../Components/Wishlist';
import { addToCart } from '../Hooks/Slice/CartSlice';
function Home() {
  const data = useFetch("https://dummyjson.com/products");
  const wishlist = useSelector((state) => state.wishlistslice) || [];
  const cart=useSelector((state)=>state.cartReducer)||[];
  console.log('wishlist', wishlist);
  const dispatch=useDispatch();
 ;

  return (
    <>
      <Header />
      <Row className='ms-5' style={{ marginTop: "100px" }}>
        {data?.length > 0 &&
          data.map((product, index) => 
          ( 
            <Col key={index}>
              <Card style={{ width: '20rem' }}>
                <Card.Img  height={"200px"} variant="top" src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{textAlign:"justify",height:"100px"}}>{product.description.slice(0,60)}</Card.Text>
                  <Button className='me-3' variant="warning" onClick={()=>{
                     console.log('Button clicked');
                    dispatch(addToCart(product));
                    console.log('Add to Cart',)}}>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Button>
                  <Button variant="danger"onClick={()=>{
                     console.log('Button clicked');
                    dispatch(addToWishlist(product));
                    console.log('WISHLIST',wishlist)}}>
                    <i className="fa-regular fa-heart"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

      </Row>
      <Footer />
    </>
  );
}

export default Home;
