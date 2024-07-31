import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import frocks from '../Fashion/frock';
import { useState } from 'react';
import { CartContext } from '../pages/CartContext';
import { useContext,useEffect } from 'react';


const Frock = () => {
  const navigate=useNavigate();
   const { addToCart } = useContext(CartContext); 
   const [filteredBrand, setFilteredBrand] = useState(''); 
   const [sortType, setSortType] = useState('');
   const [displayedfrocks, setDisplayedfrocks] = useState(frocks);

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
    let filteredfrocks = filteredBrand
      ? frocks.filter((frock) => frock.brand === filteredBrand)
      : frocks;

    // Ensure that `price` is a number for proper sorting
    filteredfrocks = filteredfrocks.map(frock => ({
      ...frock,
      price: Number(frock.price) // Convert price to a number
    }));

    if (sortType === 'low-to-high') {
      filteredfrocks.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      filteredfrocks.sort((a, b) => b.price - a.price);
    }

    setDisplayedfrocks(filteredfrocks);
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
        <div className="col-md-10">
        <br /><br /><h1 className='shirtHead'>Frocks</h1><br />
    <div className="container kurtiWrapper shirtWrapper">
       <div className="row">
          {displayedfrocks.map((frock, index) => (
          <div className="col-md-3 kurticol mainfcol" key={index}>
            <div className="card kurticard">
              <img src={frock.img} className="card-img-top" alt={frock.name} />
              <div className="card-body kurtibody">
                 <p className="card-text comp">{frock.brand}</p>
                 <p className="card-title">{frock.name}</p>
                 <h5 className="card-text">₹{frock.price}</h5>

                 <button onClick={() => addToCart(frock)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Frock;
