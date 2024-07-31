import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import liners from '../cosmetics/eyeliner';
import primers from '../cosmetics/primer';
import shadows from '../cosmetics/eyeshadow';
import mascaras from '../cosmetics/mascara';

const Eyes = () => {
  const navigate=useNavigate();
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2 clothes">
        <h5>Shop by category</h5>
        <Link to='/eyeliner'>Eye Liner</Link><br />
        <Link to='/eyeshadow'>Eye Shadow</Link><br />
        <Link to='/mascara'>Mascara</Link><br />
        <Link to='/eyeprimer'>Eye Primer</Link><br />
        <Link className='more'>See more...</Link><br />
        <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>

        <div className="col-md-10 makesup">

          <div className="container kurtiWrapper">
            <div className="row">
            {liners.map((liner, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={liner.img} className="card-img-top" alt={liner.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{liner.brand}</p>
                      <p className="card-title">{liner.name}</p>
                      <h5 className="card-text">₹{liner.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="container kurtiWrapper">
            <div className="row">
            {shadows.map((shadow, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={shadow.img} className="card-img-top" alt={shadow.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{shadow.brand}</p>
                      <p className="card-title">{shadow.name}</p>
                      <h5 className="card-text">₹{shadow.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container kurtiWrapper">
            <div className="row">
            {primers.map((primer, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={primer.img} className="card-img-top" alt={primer.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{primer.brand}</p>
                      <p className="card-title">{primer.name}</p>
                      <h5 className="card-text">₹{primer.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container kurtiWrapper">
            <div className="row">
            {mascaras.map((mascara, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={mascara.img} className="card-img-top" alt={mascara.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text comp">{mascara.brand}</p>
                      <p className="card-title">{mascara.name}</p>
                      <h5 className="card-text">₹{mascara.price}</h5>
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
