import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jhumkes from '../jewelry/jhumke';
import studs from '../jewelry/studs';
import golds from '../jewelry/goldEar';
import drops from '../jewelry/drops';

const Earings = () => {
  const navigate=useNavigate();
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2 clothes">
        <h5>Shop by category</h5>
        <Link to='/jhumke'>Jhumke</Link><br />
        <Link to='/studs'>Studs</Link><br />
        <Link to='/golds'>Gold Earrings</Link><br />
        <Link to='/drops'>Drops</Link><br />
        <Link className='more'>See more...</Link><br />
        <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        <div className="col-md-10 makesup">

          <div className="container kurtiWrapper">
            <div className="row">
            {jhumkes.map((jhumke, index) => (
              <div className="col-md-3 kurticol" key={index}>
                 <div className="card kurticard">
                   <img src={jhumke.img} className="card-img-top" alt={jhumke.name} />
                   <div className="card-body kurtibody">
                     <p className="card-text comp">{jhumke.brand}{jhumke.key}</p>
                     <p className="card-title">{jhumke.name}</p>
                     <h5 className="card-text">{jhumke.price}</h5>

                     <Link to="/" className="btn btn-primary kurtibtn">Add to cart</Link>
                    </div>
                 </div>
             </div>
            ))}
            </div>
          </div>


          <div className="container kurtiWrapper">
            <div className="row">
            {studs.map((stud, index) => (
              <div className="col-md-3 kurticol" key={index}>
                 <div className="card kurticard">
                   <img src={stud.img} className="card-img-top" alt={stud.name} />
                   <div className="card-body kurtibody">
                     <p className="card-text comp">{stud.brand}{stud.key}</p>
                     <p className="card-title">{stud.name}</p>
                     <h5 className="card-text">{stud.price}</h5>

                     <Link to="/" className="btn btn-primary kurtibtn">Add to cart</Link>
                    </div>
                 </div>
             </div>
            ))}
            </div>
          </div>


          <div className="container kurtiWrapper">
            <div className="row">
            {golds.map((gold, index) => (
              <div className="col-md-3 kurticol" key={index}>
                 <div className="card kurticard">
                   <img src={gold.img} className="card-img-top" alt={gold.name} />
                   <div className="card-body kurtibody">
                     <p className="card-text comp">{gold.brand}{gold.key}</p>
                     <p className="card-title">{gold.name}</p>
                     <h5 className="card-text">{gold.price}</h5>

                     <Link to="/" className="btn btn-primary kurtibtn">Add to cart</Link>
                    </div>
                 </div>
             </div>
            ))}
            </div>
          </div>

          <div className="container kurtiWrapper">
            <div className="row">
            {drops.map((drop, index) => (
              <div className="col-md-3 kurticol" key={index}>
                 <div className="card kurticard">
                   <img src={drop.img} className="card-img-top" alt={drop.name} />
                   <div className="card-body kurtibody">
                     <p className="card-text comp">{drop.brand}{drop.key}</p>
                     <p className="card-title">{drop.name}</p>
                     <h5 className="card-text">{drop.price}</h5>

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

export default Earings
