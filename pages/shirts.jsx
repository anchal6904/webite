import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import shirts from '../Fashion/shirts';
import { useState } from 'react';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Shirts = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  const [filteredBrand, setFilteredBrand] = useState(''); 
  const [sortType, setSortType] = useState('');
  const [displayedshirts, setDisplayedshirts] = useState(shirts);


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
  let filteredshirts = filteredBrand
    ? shirts.filter((shirt) => shirt.brand === filteredBrand)
    : shirts;

  // Ensure that `price` is a number for proper sorting
  filteredshirts = filteredshirts.map(shirt => ({
    ...shirt,
    price: Number(shirt.price) // Convert price to a number
  }));

  if (sortType === 'low-to-high') {
    filteredshirts.sort((a, b) => a.price - b.price);
  } else if (sortType === 'high-to-low') {
    filteredshirts.sort((a, b) => b.price - a.price);
  }

  setDisplayedshirts(filteredshirts);
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
                <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
            </div>
            <div className="col-md-10 makesup">
            <br /><br /><h1 className='pendantHead shirtHead handHead'>Shirts</h1><br />
        <div className="container kurtiWrapper shirtWrapper">
           <div className="row">
              {displayedshirts.map((shirt, index) => (
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
        </div>
        
        </div>
    </div>
  )
}

export default Shirts
