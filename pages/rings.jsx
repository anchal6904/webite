import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gemstones from '../jewelry/gemstone';
import menrings from '../jewelry/menring';
import solitaires from '../jewelry/solitaires';
import dailys from '../jewelry/dailyRings';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';

const Rings = () => {
  const navigate= useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2 clothes">
        <h5>Shop by category</h5>
        <Link to='/dailyring'>Daily rings</Link><br />
        <Link to='/studs'>Studs</Link><br />
        <Link to='/golds'>Gold Earrings</Link><br />
        <Link to='/drops'>Drops</Link><br />
        <Link className='more'>See more...</Link><br />
        <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        <div className="col-md-10 makesup">

          <div className="container kurtiWrapper">
            <div className="row">
            {dailys.map((daily, index) => (
              <div className="col-md-3 kurticol" key={index}>
                 <div className="card kurticard">
                   <img src={daily.img} className="card-img-top" alt={daily.name} />
                   <div className="card-body kurtibody">
                     <p className="card-text comp">{daily.brand}{daily.key}</p>
                     <p className="card-title">{daily.name}</p>
                     <h5 className="card-text">{daily.price}</h5>

                     <button onClick={() => addToCart(daily)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                 </div>
             </div>
            ))}
            </div>
          </div>



          <div className="container kurtiWrapper">
            <div className="row">
            {solitaires.map((solitaire, index) => (
              <div className="col-md-3 kurticol" key={index}>
                 <div className="card kurticard">
                   <img src={solitaire.img} className="card-img-top" alt={solitaire.name} />
                   <div className="card-body kurtibody">
                     <p className="card-text comp">{solitaire.brand}{solitaire.key}</p>
                     <p className="card-title">{solitaire.name}</p>
                     <h5 className="card-text">{solitaire.price}</h5>

                     <button onClick={() => addToCart(solitaire)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                 </div>
             </div>
            ))}
            </div>
          </div>



          <div className="container kurtiWrapper">
            <div className="row">
            {menrings.map((menring, index) => (
              <div className="col-md-3 kurticol" key={index}>
                 <div className="card kurticard">
                   <img src={menring.img} className="card-img-top" alt={menring.name} />
                   <div className="card-body kurtibody">
                     <p className="card-text comp">{menring.brand}{menring.key}</p>
                     <p className="card-title">{menring.name}</p>
                     <h5 className="card-text">{menring.price}</h5>

                     <button onClick={() => addToCart(menring)} className="btn btn-primary kurtibtn">Add to cart</button>
                    </div>
                 </div>
             </div>
            ))}
            </div>
          </div>


          <div className="container kurtiWrapper">
            <div className="row">
            {gemstones.map((gemstone, index) => (
              <div className="col-md-3 kurticol" key={index}>
                 <div className="card kurticard">
                   <img src={gemstone.img} className="card-img-top" alt={gemstone.name} />
                   <div className="card-body kurtibody">
                     <p className="card-text comp">{gemstone.brand}{gemstone.key}</p>
                     <p className="card-title">{gemstone.name}</p>
                     <h5 className="card-text">{gemstone.price}</h5>

                     <button onClick={() => addToCart(gemstone)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Rings
