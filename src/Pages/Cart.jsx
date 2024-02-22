import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { removeFromWishlist } from '../Hooks/Slice/Whishlistslice';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../Hooks/Slice/CartSlice';

function Cart() {
  const [Price, setPrice] = useState(0);
  const navigate = useNavigate();
  const cartArray = useSelector((state) => state.cartReducer) || [];
  const dispatch = useDispatch();
  console.log('cart', cartArray);

  useEffect(() => {
    price();
  }, [cartArray]);

  const price = () => {
    if (cartArray.length > 0) {
      setPrice(cartArray.map((i) => i.price).reduce((p1, p2) => p1 + p2));
    } else {
      setPrice(0);
    }
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCart = () => {
    dispatch(emptyCart());
    alert('Thank you for purchasing');
    navigate('/');
  };

  return (
    <>
      <Header />
      {cartArray.length > 0 ? (
        <div className="row m-4 d-flex text-center justify-content-center">
          <div className="col-lg-8">
            <table className="table shadow rounded">
              <thead>
                <tr>
                  <th>#</th>
                  <th>product</th>
                  <th>product image</th>
                  <th>price</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>
                      <img width={'100px'} height={'100px'} src={product.thumbnail} alt="" />
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <Button className="btn btn-light" onClick={() => handleDelete(product.id)}>
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-3">
            <div className="border mt-3 rounded shadow p-2 w-100">
              <h1 className="text-primary p-2">Cart Summary</h1>
              <h4>Total Products: <span>{cartArray.length}</span></h4>
              <h4>Total: <span className="text-danger fw-bolder fs-2">${Price}</span></h4>
              <div className="d-grid">
                <button className="btn btn-success mt-5 rounded" onClick={handleCart}>
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif"
            alt=""
          />
          <Link to={'/'}>
            <img src="https://t3.ftcdn.net/jpg/02/22/82/06/360_F_222820631_WRuNhAnUV3N8V78LYAo2SYaPY8bVqvbD.jpg" alt="" width={'350px'} />
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
