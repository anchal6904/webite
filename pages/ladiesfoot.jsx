import React from 'react';
import { Link } from 'react-router-dom';
import sandals from '../Shoes/sandals';
import slips from '../Shoes/Slipperwomen';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Ladiesfoot = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
      <div className="row rowclass">
        <div className="col-md-2 clothes">
          <h5>Shop by category</h5>
          <Link to='/sandals'>Sandals</Link><br />
          <Link to='/slipperwomen'>Slippers</Link><br />
          <Link>Heels</Link><br />
          <Link>Boots</Link><br />
          <Link>Bellies</Link><br />
          <Link className='more'>see more...</Link><br />
          <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        
        <div className="col-md-10 ladyfoot">

              <div className="container kurtiWrapper sandalwrap">
                 <div className="row">
                  {sandals.map((sandal, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={sandal.img} className="card-img-top" alt={sandal.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text lipp">{sandal.brand}</p>
                        <p className="card-title">{sandal.name}</p>
                        <h5 className="card-text">₹{sandal.price}</h5>

                        <button onClick={() => addToCart(sandal)} className="btn btn-primary kurtibtn">Add to cart</button>
                      </div>
                   </div>
                  </div>
                  ))}
                </div>
              </div>

              <div className="container kurtiWrapper slipwrap">
                 <div className="row">
                  {slips.map((slip, index) => (
                  <div className="col-md-3 kurticol slipcol" key={index}>
                    <div className="card kurticard">
                      <img src={slip.img} className="card-img-top" alt={slip.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text lipp">{slip.brand}{slip.key}</p>
                        <p className="card-title">{slip.name}</p>
                        <h5 className="card-text">₹{slip.price}</h5>

                        <button onClick={() => addToCart(slip)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Ladiesfoot
