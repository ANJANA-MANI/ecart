import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';  // Import necessary components from react-bootstrap
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Whishlistslice from '../Hooks/Slice/Whishlistslice';
import Header from './Header';
import Footer from './Footer';
import {removeFromWishlist } from '../Hooks/Slice/Whishlistslice';
import { addToCart } from '../Hooks/Slice/CartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistslice) || [];
 console.log(wishlistArray);
 
 const dispatch=useDispatch();
const handlewishlistCart=(product)=>{
dispatch(addToCart(product))
dispatch(removeFromWishlist(product.id))

}
 return (
    <>
    <Header/>
    
      <Row>
        {wishlistArray.length > 0 ?
          wishlistArray.map((product, index) => (
          
              <Card className='m-3' key={index} style={{ width: '20rem' }}>
                <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{ textAlign: 'justify', height: '100px' }}>
                    {product.description.slice(0, 60)}
                  </Card.Text>
                  <Button className='me-3' variant="warning" onClick={()=>dispatch(removeFromWishlist(product.id))}>
                  <i class="fa-solid fa-trash"></i>
                  </Button>
                  <Button variant="danger" onClick={()=>{handlewishlistCart(product)}}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  </Button>
                </Card.Body>
              </Card>
          
          )):
          
          <div>
            <img src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
            <Link to={'/'}>
            <img src="https://t3.ftcdn.net/jpg/02/22/82/06/360_F_222820631_WRuNhAnUV3N8V78LYAo2SYaPY8bVqvbD.jpg" alt="" width={'350px'} />
            </Link>
            </div>
            
            }
      </Row>
      <Footer/>
      </>
  );
}

export default Wishlist;
