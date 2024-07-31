import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sweats from '../Fashion/sweatshirt';
import { useState } from 'react';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Sweats = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  const [filteredBrand, setFilteredBrand] = useState(''); 
  const [sortType, setSortType] = useState('');
  const [displayedsweats, setDisplayedsweats] = useState(sweats);


  const filterByBrand = (brand) => {
    setFilteredBrand(brand);
  };

const resetFilter = () => {
  setFilteredBrand('');
};

const handleSort = (e) => {
  setSortType(e.target.value);
};

useEffect(() => {
  let filteredsweats = filteredBrand
    ? sweats.filter((sweat) => sweat.brand === filteredBrand)
    : sweats;

  // Ensure that `price` is a number for proper sorting
  filteredsweats = filteredsweats.map(sweat => ({
    ...sweat,
    price: Number(sweat.price) // Convert price to a number
  }));

  if (sortType === 'low-to-high') {
    filteredsweats.sort((a, b) => a.price - b.price);
  } else if (sortType === 'high-to-low') {
    filteredsweats.sort((a, b) => b.price - a.price);
  }

  setDisplayedsweats(filteredsweats);
}, [filteredBrand, sortType]);

  return (

    <div className='container'>
        <div className="row">
            <div className="col-md-2 clothes">
            <h5>Sort By</h5>
            <select className="select" onChange={handleSort}>
              <option value="">No sort</option>
              <option value="low-to-high">Price low to high</option>
              <option value="high-to-low">Price high to low</option>
            </select><br /><br /><br /><br /><br />
                <h5>Brands</h5>
                <Link onClick={() => resetFilter()}>All</Link><br />
                <Link onClick={() => filterByBrand('VAN HUESEN')}>VAN HUESEN</Link><br />
                <Link onClick={() => filterByBrand('EthnicBasket')}>EthnicBasket</Link><br />
                <Link onClick={() => filterByBrand('ARVESA')}>ARVESA</Link><br />
                <Link onClick={() => filterByBrand('IRK Fashion')}>IRK Fashion</Link><br />
                <Link onClick={() => filterByBrand('1 Stop Fashion')}>1 Stop Fashion</Link><br />
                <Link className='more'>See more...</Link><br />
                <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button><br /><br />
            </div>
            
            <div className="col-md-10 sweatss">
            <br /><br /><h1 className='pendantHead sweathead'>Sweatshirts</h1><br />
        <div className="container kurtiWrapper shirtWrapper sweatwrap">
           <div className="row sweatrow">
              {displayedsweats.map((sweat, index) => (
              <div className="col-md-3 kurticol sweatcol" key={index}>
                <div className="card kurticard">
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
        </div>
        
        </div>
    </div>
  )
}

export default Sweats
