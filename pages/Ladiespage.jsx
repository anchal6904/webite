import React from 'react';
import kurtis from '../Fashion/kurtis';
import suits from '../Fashion/suits';
import sarees from '../Fashion/sarees';
import tops from '../Fashion/tops';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';

const Ladiespage = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
      <div className="container">
       <div className="row rowclass">
        <div className="col-md-2 ladiesleft clothes">
          <h5>Shop by category</h5>
          <Link to='/Kurties'>Kurti</Link><br />
          <Link to='/suits'>Suits</Link><br />
          <Link to='/tops'>Tops</Link><br />
          <Link to='/sarees'>Sarees</Link><br />
          <Link>Lehenga</Link><br />
          <Link>Gowns</Link><br />
          <Link>Bottom wear</Link><br />
          <Link className='see'>See more...</Link><br />
          <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>

        <div className="col-md-10 kurtiup">
          <div className="container kurtiWrapper">
           <div className="row">
              {kurtis.map((kurti, index) => (
              <div className="col-md-3 kurticol" key={index}>
                <div className="card kurticard">
                  <img src={kurti.img} className="card-img-top" alt={kurti.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text comp">{kurti.brand}</p>
                     <p className="card-title">{kurti.name}</p>
                     <h5 className="card-text">₹{kurti.price}</h5>

                     <button onClick={() => addToCart(kurti)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
                </div>
              </div>
             ))}
            </div>
        </div>


        <div className="container kurtiWrapper suitWrapper">
           <div className="row">
              {suits.map((suit, index) => (
              <div className="col-md-3 kurticol suitcol" key={index}>
                <div className="card kurticard">
                  <img src={suit.img} className="card-img-top" alt={suit.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text comp">{suit.brand}</p>
                     <p className="card-title">{suit.name}</p>
                     <h5 className="card-text">₹{suit.price}</h5>

                     <button onClick={() => addToCart(suit)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
                </div>
              </div>
             ))}
            </div>
        </div>

        <div className="container kurtiWrapper">
           <div className="row">
              {tops.map((top, index) => (
              <div className="col-md-3 kurticol" key={index}>
                <div className="card kurticard">
                  <img src={top.img} className="card-img-top" alt={top.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text comp">{top.brand}</p>
                     <p className="card-title">{top.name}</p>
                     <h5 className="card-text">₹{top.price}</h5>

                     <button onClick={() => addToCart(top)} className="btn btn-primary kurtibtn">Add to cart</button>
                  </div>
                </div>
              </div>
             ))}
            </div>
        </div>

        <div className="container kurtiWrapper">
           <div className="row">
              {sarees.map((saree, index) => (
              <div className="col-md-3 kurticol" key={index}>
                <div className="card kurticard">
                  <img src={saree.img} className="card-img-top" alt={saree.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text comp">{saree.brand}</p>
                     <p className="card-title">{saree.name}</p>
                     <h5 className="card-text">₹{saree.price}</h5>

                     <button onClick={() => addToCart(saree)} className="btn btn-primary kurtibtn">Add to cart</button>
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
