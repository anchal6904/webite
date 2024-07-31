import React from 'react';
import { Link } from 'react-router-dom';
import shirts from '../Fashion/shirts';
import tshirts from '../Fashion/tshirts';
import jeans from '../Fashion/jeans';
import coats from '../Fashion/coat';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Menspage = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
      <div className="row rowclass">
        <div className="col-md-2 clothes">
          <h5>Shop by category</h5>
          <Link to='/shirts'>Shirts</Link><br />
          <Link to='/tshirts'>T-shirts</Link><br />
          <Link to='/jeans'>Jeans</Link><br />
          <Link to='/coats'>Coats</Link><br />
          <Link>Trousers</Link><br />
          <Link className='more'>see more...</Link><br />
          <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        
        <div className="col-md-10 makesup">
              <div className="container kurtiWrapper">
                 <div className="row">
                  {shirts.map((shirt, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={shirt.img} className="card-img-top" alt={shirt.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text comp">{shirt.brand}</p>
                        <p className="card-title">{shirt.name}</p>
                        <h5 className="card-text">₹{shirt.price}</h5>

                        <button onClick={() => addToCart(shirt)} className="btn btn-primary kurtibtn">Add to cart</button>
                      </div>
                   </div>
                  </div>
                  ))}
                </div>
              </div>

              <div className="container kurtiWrapper">
                 <div className="row">
                  {tshirts.map((tshirt, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={tshirt.img} className="card-img-top" alt={tshirt.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text comp">{tshirt.brand}{tshirt.key}</p>
                        <p className="card-title">{tshirt.name}</p>
                        <h5 className="card-text">₹{tshirt.price}</h5>

                        <button onClick={() => addToCart(tshirt)} className="btn btn-primary kurtibtn">Add to cart</button>
                      </div>
                   </div>
                  </div>
                  ))}
                </div>
              </div>

              <div className="container kurtiWrapper">
                 <div className="row">
                  {jeans.map((jean, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={jean.img} className="card-img-top" alt={jean.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text comp">{jean.brand}{jean.key}</p>
                        <p className="card-title">{jean.name}</p>
                        <h5 className="card-text">₹{jean.price}</h5>

                        <button onClick={() => addToCart(jean)} className="btn btn-primary kurtibtn">Add to cart</button>
                      </div>
                   </div>
                  </div>
                  ))}
                </div>
              </div>

              <div className="container kurtiWrapper">
                 <div className="row">
                  {coats.map((coat, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                    <div className="card kurticard">
                      <img src={coat.img} className="card-img-top" alt={coat.name} />
                      <div className="card-body kurtibody">
                        <p className="card-text comp">{coat.brand}{coat.key}</p>
                        <p className="card-title">{coat.name}</p>
                        <h5 className="card-text">₹{coat.price}</h5>

                        <button onClick={() => addToCart(coat)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Menspage
