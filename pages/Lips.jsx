import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import balms from '../cosmetics/lipbalm';
import gloss from '../cosmetics/gloss';
import lipliners from '../cosmetics/lipliner';
import lipsticks from '../cosmetics/lipsticks';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const Lips = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2 clothes">
        <h5>Shop by category</h5>
        <Link to='/lipstick'>Lipsticks</Link><br />
        <Link to='/lipliner'>Lip Liner</Link><br />
        <Link to='/Lipgloss'>Lip Gloss</Link><br />
        <Link to='/lipbalm'>Lip Balm</Link><br />
        <Link className='more'>See more...</Link><br />
        <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>


        <div className="col-md-10 makesup">
          <div className="container kurtiWrapper">
            <div className="row">
            {lipsticks.map((lipstick, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={lipstick.img} className="card-img-top" alt={lipstick.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text lipp">{lipstick.brand}</p>
                      <p className="card-title">{lipstick.name}</p>
                      <h5 className="card-text">₹{lipstick.price}</h5>
                      <button onClick={() => addToCart(lipstick)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container kurtiWrapper">
            <div className="row">
            {lipliners.map((lipliner, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={lipliner.img} className="card-img-top" alt={lipliner.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{lipliner.brand}</p>
                      <p className="card-title">{lipliner.name}</p>
                      <h5 className="card-text">₹{lipliner.price}</h5>
                      <button onClick={() => addToCart(lipliner)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="container kurtiWrapper lipwrap">
            <div className="row wraps">
            {gloss.map((glos, index) => (
                <div className="col-md-3 kurticol lipcol" key={index}>
                  <div className="card kurticard lipcard">
                    <img src={glos.img} className="card-img-top" alt={glos.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{glos.brand}</p>
                      <p className="card-title">{glos.name}</p>
                      <h5 className="card-text">₹{glos.price}</h5>
                      <button onClick={() => addToCart(glos)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container kurtiWrapper">
            <div className="row">
            {balms.map((balm, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={balm.img} className="card-img-top" alt={balm.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{balm.brand}</p>
                      <p className="card-title">{balm.name}</p>
                      <h5 className="card-text">₹{balm.price}</h5>
                      <div className="lipsb">
                        <button onClick={() => addToCart(balm)} className="btn btn-primary kurtibtn">Add to cart</button>
                      </div>
                      
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

export default Lips
