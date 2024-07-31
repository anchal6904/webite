import React from 'react';
import { Link } from 'react-router-dom';
import clogs from '../Shoes/clogs';
import sneakers from '../Shoes/Sneakers';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Mensfoot = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
      <div className="row rowclass">
        <div className="col-md-2 clothes">
          <h5>Shop by category</h5>
          <Link to='/clogs'>Clogs</Link><br />
          <Link to='/sneakers'>Sneakers</Link><br />
          <Link>Slippers</Link><br />
          <Link>Boots</Link><br />
          <Link className='more'>see more...</Link><br />
          <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        
        <div className="col-md-10">

              <div className="container kurtiWrapper">
                 <div className="row">
                  {clogs.map((clog, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={clog.img} className="card-img-top" alt={clog.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text comp">{clog.brand}</p>
                        <p className="card-title">{clog.name}</p>
                        <h5 className="card-text">₹{clog.price}</h5>

                        <button onClick={() => addToCart(clog)} className="btn btn-primary kurtibtn">Add to cart</button>
                      </div>
                   </div>
                  </div>
                  ))}
                </div>
              </div>

              <div className="container kurtiWrapper">
                 <div className="row">
                  {sneakers.map((sneaker, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={sneaker.img} className="card-img-top" alt={sneaker.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text comp">{sneaker.brand}{sneaker.key}</p>
                        <p className="card-title">{sneaker.name}</p>
                        <h5 className="card-text">₹{sneaker.price}</h5>

                        <button onClick={() => addToCart(sneaker)} className="btn btn-primary kurtibtn">Add to cart</button>
                      </div>
                   </div>
                  </div>
                  ))}
                </div>
              </div>


              




        </div>
      </div>
    </div>
  )
}

export default Mensfoot
