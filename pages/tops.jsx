import React, { useContext } from 'react';
import tops from '../Fashion/tops';
import { CartContext } from '../pages/CartContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Tops = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);

  const [filteredBrand, setFilteredBrand] = useState('');
  const [sortType, setSortType] = useState('');
  const [displayedtops, setDisplayedtops] = useState(tops); 

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
    let filteredtops = filteredBrand
      ? tops.filter((top) => top.brand === filteredBrand)
      : tops;
  
    // Ensure that `price` is a number for proper sorting
    filteredtops = filteredtops.map(top => ({
      ...top,
      price: Number(top.price) // Convert price to a number
    }));
  
    if (sortType === 'low-to-high') {
      filteredtops.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      filteredtops.sort((a, b) => b.price - a.price);
    }
  
    setDisplayedtops(filteredtops);
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
          <br /><br /><h1 className='shirtHead handHead'>Tops</h1><br />
          <div className="container kurtiWrapper shirtWrapper">
            <div className="row">
              {displayedtops.map((top, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Tops;
