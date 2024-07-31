import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bangles from '../jewelry/bangles';
import watches from '../jewelry/watches';
import bracelets from '../jewelry/bracelet';
import ringbs from '../jewelry/ringbrace';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';

const Hands = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
    <div className="row">
      <div className="col-md-2 clothes">
      <h5>Shop by category</h5>
      <Link to='/jhumkes'>Jhumke</Link><br />
      <Link to='/studs'>Studs</Link><br />
      <Link to='/golds'>Gold Earrings</Link><br />
      <Link to='/drops'>Drops</Link><br />
      <Link className='more'>See more...</Link><br />
      <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
      </div>
      <div className="col-md-10 makesup">

        <div className="container kurtiWrapper">
          <div className="row">
          {bracelets.map((bracelet, index) => (
            <div className="col-md-3 kurticol" key={index}>
               <div className="card kurticard">
                 <img src={bracelet.img} className="card-img-top" alt={bracelet.name} />
                 <div className="card-body kurtibody">
                   <p className="card-text comp">{bracelet.brand}{bracelet.key}</p>
                   <p className="card-title">{bracelet.name}</p>
                   <h5 className="card-text">{bracelet.price}</h5>

                   <button onClick={() => addToCart(bracelet)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
               </div>
           </div>
          ))}
          </div>
        </div>




        <div className="container kurtiWrapper">
          <div className="row">
          {watches.map((watch, index) => (
            <div className="col-md-3 kurticol" key={index}>
               <div className="card kurticard">
                 <img src={watch.img} className="card-img-top" alt={watch.name} />
                 <div className="card-body kurtibody">
                   <p className="card-text comp">{watch.brand}{watch.key}</p>
                   <p className="card-title">{watch.name}</p>
                   <h5 className="card-text">{watch.price}</h5>

                   <button onClick={() => addToCart(watch)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
               </div>
           </div>
          ))}
          </div>
        </div>



        <div className="container kurtiWrapper">
          <div className="row">
          {bangles.map((bangle, index) => (
            <div className="col-md-3 kurticol" key={index}>
               <div className="card kurticard">
                 <img src={bangle.img} className="card-img-top" alt={bangle.name} />
                 <div className="card-body kurtibody">
                   <p className="card-text comp">{bangle.brand}{bangle.key}</p>
                   <p className="card-title">{bangle.name}</p>
                   <h5 className="card-text">{bangle.price}</h5>

                   <button onClick={() => addToCart(bangle)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
               </div>
           </div>
          ))}
          </div>
        </div>

        <div className="container kurtiWrapper">
          <div className="row">
          {ringbs.map((ringb, index) => (
            <div className="col-md-3 kurticol" key={index}>
               <div className="card kurticard">
                 <img src={ringb.img} className="card-img-top" alt={ringb.name} />
                 <div className="card-body kurtibody">
                   <p className="card-text comp">{ringb.brand}{ringb.key}</p>
                   <p className="card-title">{ringb.name}</p>
                   <h5 className="card-text">{ringb.price}</h5>

                   <button onClick={() => addToCart(ringb)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Hands;
