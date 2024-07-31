import React, { useContext } from 'react';
import { CartContext } from '../pages/CartContext';// Importing CartContext

const Cart = () => {
  const { cart } = useContext(CartContext);// Using useContext hook to get cart from CartContext

  return (
    <div className="container">
      <br /><br /><h1 className='pendantHead cartHead'>Cart</h1><br />
      <div className="row">
        {cart.map((item, index) => ( // Mapping over the cart array to display each item
          <div className="col-md-3 kurticol cartcol" key={index}>
            <div className="card kurticard">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body kurtibody">
                <p className="card-text lipp">{item.brand}</p>
                <p className="card-title">{item.name}</p>
                <h5 className="card-text">₹{item.price}</h5>
                <button className="btn btn-primary kurtibtn">Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
