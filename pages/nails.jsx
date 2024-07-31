import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import removes from '../cosmetics/nailremover';
import polishs from '../cosmetics/nailpolish';
import cares from '../cosmetics/nailcare';
import { CartContext } from './CartContext';
import { useContext } from 'react';


const Eyes = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2 clothes">
        <h5>Shop by category</h5>
        <Link to='/nailpolish'>Nail Polish</Link><br />
        <Link to='/nailcare'>Nail Care</Link><br />
        <Link to='/nailremove'>Nail Remover</Link><br />
        <Link className='more'>See more...</Link><br />
        <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>

        <div className="col-md-10 makesup">

          <div className="container kurtiWrapper">
            <div className="row">
            {polishs.map((polish, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={polish.img} className="card-img-top" alt={polish.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{polish.brand}</p>
                      <p className="card-title">{polish.name}</p>
                      <h5 className="card-text">₹{polish.price}</h5>
                      <button onClick={() => addToCart(polish)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="container kurtiWrapper">
            <div className="row">
            {cares.map((care, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={care.img} className="card-img-top" alt={care.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{care.brand}</p>
                      <p className="card-title">{care.name}</p>
                      <h5 className="card-text">₹{care.price}</h5>
                      <button onClick={() => addToCart(care)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="container kurtiWrapper">
            <div className="row">
            {removes.map((remove, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={remove.img} className="card-img-top" alt={remove.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{remove.brand}</p>
                      <p className="card-title">{remove.name}</p>
                      <h5 className="card-text">₹{remove.price}</h5>
                      <button onClick={() => addToCart(remove)} className="btn btn-primary kurtibtn">Add to cart</button>
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
