import React from 'react';
import ringbs from '../jewelry/ringbrace';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../pages/CartContext';
import { useContext,useEffect } from 'react';

const Ringbracelet = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);
  const [filteredBrand, setFilteredBrand] = useState(''); 
  const [sortType, setSortType] = useState('');
  const [displayedringbs, setDisplayedringbs] = useState(ringbs);

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
    console.log('Filtered Brand:', filteredBrand);
    console.log('Sort Type:', sortType);

    let filteredsets = filteredBrand
      ? ringbs.filter((ringb) => ringb.brand === filteredBrand)
      : ringbs;


    filteredsets = filteredsets.map(set => ({
      ...set,
      price: Number(set.price) // Convert price to a number
    }));

    if (sortType === 'low-to-high') {
      filteredsets.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      filteredsets.sort((a, b) => b.price - a.price);
    }

    console.log('Filtered sets after sorting:', filteredsets);
    setDisplayedringbs(filteredsets);
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
                <Link onClick={() => filterByBrand('Sukkhi')}>Sukkhi</Link><br />
                <Link onClick={() => filterByBrand('FASHOW')}>FASHOW</Link><br />
                <Link onClick={() => filterByBrand('RUBANS')}>RUBANS</Link><br />
                <Link onClick={() => filterByBrand('Haniya')}>Haniya</Link><br />
                <Link onClick={() => filterByBrand('AMAAL')}>AMAAL</Link><br />
                <Link className='more'>See more...</Link><br />
                <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        <div className="col-md-10 makesup">
        <br /><br /><h1 className='pendantHead jewells liphead'>Ring Bracelets</h1><br />
    <div className="container kurtiWrapper shirtWrapper">
       <div className="row">
          {displayedringbs.map((ringb, index) => (
          <div className="col-md-3 kurticol" key={index}>
            <div className="card kurticard">
              <img src={ringb.img} className="card-img-top" alt={ringb.name} />
              <div className="card-body kurtibody">
                 <p className="card-text lipp">{ringb.brand}</p>
                 <p className="card-title">{ringb.name}</p>
                 <h5 className="card-text">{ringb.price}</h5>

                 <button onClick={() => addToCart(ringb)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Ringbracelet
