import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import watches from '../jewelry/watches';
import { useState } from 'react';
import { CartContext } from '../pages/CartContext';
import { useContext,useEffect } from 'react';

const Watch = () => {
  const navigate=useNavigate();
  const [sortType, setSortType] = useState('');
  const [displayedwatches, setDisplayedwatches] = useState(watches);
  const { addToCart } = useContext(CartContext);
  const [filteredBrand, setFilteredBrand] = useState(''); 

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
    let filteredwatches = filteredBrand
      ? watches.filter((watch) => watch.brand === filteredBrand)
      : watches;
  
    // Ensure that `price` is a number for proper sorting
    filteredwatches = filteredwatches.map(watch => ({
      ...watch,
      price: Number(watch.price) // Convert price to a number
    }));
  
    if (sortType === 'low-to-high') {
      filteredwatches.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      filteredwatches.sort((a, b) => b.price - a.price);
    }
  
    setDisplayedwatches(filteredwatches);
  }, [filteredBrand, sortType]);
  
  return (
    <div className='container'>
    <div className="row">
        <div className="col-md-2 clothes">
        <select className="select" onChange={handleSort}>
              <option value="">No sort</option>
              <option value="low-to-high">Price low to high</option>
              <option value="high-to-low">Price high to low</option>
            </select><br /><br /><br /><br /><br />
            <h5>Brands</h5>
                <Link onClick={() => resetFilter()}>All</Link><br />
                <Link onClick={() => filterByBrand('Sukkhi')}>Sukkhi</Link><br />
                <Link onClick={() => filterByBrand('FASHOW')}>FASHOW</Link><br />
                <Link onClick={() => filterByBrand('RUBANS')}>RUBANS</Link><br />
                <Link onClick={() => filterByBrand('Haniya')}>Haniya</Link><br />
                <Link onClick={() => filterByBrand('AMAAL')}>AMAAL</Link><br />
                <Link className='more'>See more...</Link><br />
                <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        <div className="col-md-10 makesup">
        <br /><br /><h1 className='pendantHead jewells liphead'>Watches</h1><br />
    <div className="container kurtiWrapper shirtWrapper">
       <div className="row">
          {displayedwatches.map((watch, index) => (
          <div className="col-md-3 kurticol" key={index}>
            <div className="card kurticard">
              <img src={watch.img} className="card-img-top" alt={watch.name} />
              <div className="card-body kurtibody">
                 <p className="card-text lipp">{watch.brand}</p>
                 <p className="card-title">{watch.name}</p>
                 <h5 className="card-text">₹{watch.price}</h5>

                 <button onClick={() => addToCart(watch)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Watch
