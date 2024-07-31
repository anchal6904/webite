import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import creams from '../cosmetics/cream';
import cleans from '../cosmetics/cleansers';
import masks from '../cosmetics/facemask';
import serums from '../cosmetics/serums';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';

const Eyes = () => {
    const navigate=useNavigate();
    const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2 clothes">
        <h5>Shop by category</h5><br />
        <Link to='/cream'>Face Cream</Link><br /><br />
        <Link to='/mask'>Face Mask</Link><br /><br />
        <Link to='/serums'>Serums & Essence</Link><br /><br />
        <Link to='/cleansers'>Face Wash & Cleansers</Link><br />
        <Link className='more'>See more...</Link><br />
        <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>

        <div className="col-md-10 makesup">
          <div className="container kurtiWrapper">
            <div className="row">
            {creams.map((cream, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={cream.img} className="card-img-top" alt={cream.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{cream.brand}</p>
                      <p className="card-title">{cream.name}</p>
                      <h5 className="card-text">₹{cream.price}</h5>
                      <button onClick={() => addToCart(cream)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container kurtiWrapper">
            <div className="row">
            {cleans.map((clean, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={clean.img} className="card-img-top" alt={clean.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{clean.brand}</p>
                      <p className="card-title">{clean.name}</p>
                      <h5 className="card-text">₹{clean.price}</h5>
                      <button onClick={() => addToCart(clean)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container kurtiWrapper">
            <div className="row">
            {masks.map((mask, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={mask.img} className="card-img-top" alt={mask.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{mask.brand}</p>
                      <p className="card-title">{mask.name}</p>
                      <h5 className="card-text">₹{mask.price}</h5>
                      <button onClick={() => addToCart(mask)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="container kurtiWrapper">
            <div className="row">
            {serums.map((serum, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={serum.img} className="card-img-top" alt={serum.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{serum.brand}</p>
                      <p className="card-title">{serum.name}</p>
                      <h5 className="card-text">₹{serum.price}</h5>
                      <button onClick={() => addToCart(serum)} className="btn btn-primary kurtibtn">Add to cart</button>

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

export default Eyes
