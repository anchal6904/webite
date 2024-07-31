import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
import sweats from '../Fashion/sweatshirt';
import indowests from '../Fashion/indowest';
import frocks from '../Fashion/frock';
import ethnics from '../Fashion/ethnic';


const Ladiespage = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
      <div className="container">
       <div className="row rowclass">
        <div className="col-md-2 ladiesleft clothes">
          <h5>Shop by category</h5>
          <Link to='/sweatshirts'>Sweatshirts</Link><br />
          <Link to='/Frock'>Frocks</Link><br />
          <Link to='/Ethnic'>Ethnic Wear</Link><br />
          <Link to='/indowest'>Indo western wear</Link><br />
          <Link>Lehenga</Link><br />
          <Link>Gowns</Link><br />
          <Link>Bottom wear</Link><br />
          <Link className='see'>See more...</Link><br />
          <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        <div className="col-md-10 makesup">


        <div className="container kurtiWrapper">
           <div className="row">
              {sweats.map((sweat, index) => (
              <div className="col-md-3 kurticol kidcol" key={index}>
                <div className="card kurticard kicard">
                  <img src={sweat.img} className="card-img-top" alt={sweat.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text lipp">{sweat.brand}</p>
                     <p className="card-title">{sweat.name}</p>
                     <h5 className="card-text">₹{sweat.price}</h5>

                     <button onClick={() => addToCart(sweat)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
                </div>
              </div>
             ))}
            </div>
        </div>


           <div className="container kurtiWrapper frockwrap">
           <div className="row">
              {frocks.map((frock, index) => (
              <div className="col-md-3 kurticol frockcol" key={index}>
                <div className="card kurticard frockcard">
                  <img src={frock.img} className="card-img-top" alt={frock.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text comp">{frock.brand}</p>
                     <p className="card-title">{frock.name}</p>
                     <h5 className="card-text">₹{frock.price}</h5>

                     <button onClick={() => addToCart(frock)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
                </div>
              </div>
             ))}
            </div>
        </div>

          <div className="container kurtiWrapper frockwrap">
           <div className="row">
              {ethnics.map((ethnic, index) => (
              <div className="col-md-3 kurticol frockcol" key={index}>
                <div className="card kurticard frockcard">
                  <img src={ethnic.img} className="card-img-top" alt={ethnic.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text comp">{ethnic.brand}</p>
                     <p className="card-title">{ethnic.name}</p>
                     <h5 className="card-text">₹{ethnic.price}</h5>

                     <button onClick={() => addToCart(ethnic)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
                </div>
              </div>
             ))}
            </div>
        </div>


        <div className="container kurtiWrapper frockwrap">
           <div className="row">
              {indowests.map((indowest, index) => (
              <div className="col-md-3 kurticol frockcol" key={index}>
                <div className="card kurticard frockcard">
                  <img src={indowest.img} className="card-img-top" alt={indowest.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text comp">{indowest.brand}</p>
                     <p className="card-title">{indowest.name}</p>
                     <h5 className="card-text">₹{indowest.price}</h5>

                     <button onClick={() => addToCart(indowest)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Ladiespage;
