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
      <Row className='m-5' style={{ marginTop: "100px",justifyContent:"space-around",display:"flex" }}>
        {data?.length > 0 &&
          data.map((product, index) => 
          ( 
            <Col key={index} className='m-3'>
              <Card style={{ width: '20rem',height:'', 
              border: '1px solid #e0e0e0',borderRadius: '10px',
             }}>
                <Card.Img className='p-2' height={"160px"} variant="top" src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title  className='w-100'>{product.title}</Card.Title>
                  <Card.Text style={{textAlign:"justify",height:"50px"}}>{product.description.slice(0,65)}</Card.Text>
                  <Button className='me-2' variant="warning" onClick={()=>{
                    dispatch(addToCart(product));
                   }}>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Button>
                  <Button variant="danger"onClick={()=>{
                    
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
