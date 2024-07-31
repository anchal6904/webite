import React from 'react';
import { Link } from 'react-router-dom';
import kidshoes from '../Shoes/kidsneakers';
import slippings from '../Shoes/sliiperkids'
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Kidsfoot = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
      <div className="row rowclass">
        <div className="col-md-2 clothes">
          <h5>Shop by category</h5>
          <Link to='/kidsneakers'>Shoes</Link><br />
          <Link to='/slipperkids'>Slippers</Link><br />
          <Link>Sandals</Link><br />
          <Link>Ballerinas</Link><br />
          <Link>Boots</Link><br />
          <Link className='more'>see more...</Link><br />
          <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        
        <div className="col-md-10 makesup">
              <div className="container kurtiWrapper">
                 <div className="row">
                  {kidshoes.map((kidshoe, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={kidshoe.img} className="card-img-top" alt={kidshoe.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text lipp">{kidshoe.brand}</p>
                        <p className="card-title">{kidshoe.name}</p>
                        <h5 className="card-text">₹{kidshoe.price}</h5>

                        <button onClick={() => addToCart(kidshoe)} className="btn btn-primary kurtibtn">Add to cart</button>
                      </div>
                   </div>
                  </div>
                  ))}
                </div>
              </div>


              <div className="container kurtiWrapper">
                 <div className="row">
                  {slippings.map((slipping, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={slipping.img} className="card-img-top" alt={slipping.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text lipp">{slipping.brand}{slipping.key}</p>
                        <p className="card-title">{slipping.name}</p>
                        <h5 className="card-text">₹{slipping.price}</h5>

                        <button onClick={() => addToCart(slipping)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Kidsfoot
