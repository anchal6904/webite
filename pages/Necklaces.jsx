import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pendants from '../jewelry/pendants';
import jewels from '../jewelry/JEWELS';
import lockets from '../jewelry/lockets';
import mangalsutras from '../jewelry/mangalsutra';

const Necklaces = () => {
  const navigate=useNavigate();
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-2 clothes">
            <h5>Shop by category</h5>
            <Link to='/pendants'>Pendants</Link><br />
            <Link to='/jewel'>Jewel Sets</Link><br />
            <Link to='/lockets'>Lockets</Link><br />
            <Link to='/mangalsutra'>Mangalsutra</Link><br /><br /><br />

            <h5>Brands</h5>
            <Link>Sukkhi</Link><br />
            <Link>FASHOW</Link><br />
            <Link>RUBANS</Link><br />
            <Link>Haniya</Link><br />
            <Link>AMAAL</Link><br />
            <Link className='see'>See more...</Link><br />
            <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
            </div>
            <div className="col-md-10 makesup">
              <h1 className='kurtihead handHead'>Pendants</h1><br />
              <div className="container kurtiWrapper">
                <div className="row">
                {pendants.map((pendant, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                     <div className="card kurticard">
                       <img src={pendant.img} className="card-img-top" alt={pendant.name} />
                       <div className="card-body kurtibody">
                         <p className="card-text comp">{pendant.brand}{pendant.key}</p>
                         <p className="card-title">{pendant.name}</p>
                         <h5 className="card-text">{pendant.price}</h5>

                         <Link to="/" className="btn btn-primary kurtibtn">Add to cart</Link>
                        </div>
                     </div>
                 </div>
                ))}
                </div>
              </div>


              <h1 className='kurtihead'>Jewel Set</h1><br />
              <div className="container kurtiWrapper">
                <div className="row">
                {jewels.map((jewel, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                     <div className="card kurticard">
                       <img src={jewel.img} className="card-img-top" alt={jewel.name} />
                       <div className="card-body kurtibody">
                         <p className="card-text comp">{jewel.brand}{jewel.key}</p>
                         <p className="card-title">{jewel.name}</p>
                         <h5 className="card-text">{jewel.price}</h5>

                         <Link to="/" className="btn btn-primary kurtibtn">Add to cart</Link>
                        </div>
                     </div>
                 </div>
                ))}
                </div>
              </div>


              <h1 className='kurtihead'>Lockets</h1><br />
              <div className="container kurtiWrapper">
                <div className="row">
                {lockets.map((locket, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                     <div className="card kurticard">
                       <img src={locket.img} className="card-img-top" alt={locket.name} />
                       <div className="card-body kurtibody">
                         <p className="card-text comp">{locket.brand}{locket.key}</p>
                         <p className="card-title">{locket.name}</p>
                         <h5 className="card-text">{locket.price}</h5>

                         <Link to="/" className="btn btn-primary kurtibtn">Add to cart</Link>
                        </div>
                     </div>
                 </div>
                ))}
                </div>
              </div>


              <h1 className='kurtihead'>Mangalsutra</h1><br />
              <div className="container kurtiWrapper">
                <div className="row">
                {mangalsutras.map((mangalsutra, index) => (
                  <div className="col-md-3 kurticol" key={index}>
                     <div className="card kurticard">
                       <img src={mangalsutra.img} className="card-img-top" alt={mangalsutra.name} />
                       <div className="card-body kurtibody">
                         <p className="card-text comp">{mangalsutra.brand}{mangalsutra.key}</p>
                         <p className="card-title">{mangalsutra.name}</p>
                         <h5 className="card-text">{mangalsutra.price}</h5>

                         <Link to="/" className="btn btn-primary kurtibtn">Add to cart</Link>
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

export default Necklaces
