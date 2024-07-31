import React from 'react';
import sarees from '../Fashion/sarees';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Sarees = () => {
  const navigate=useNavigate();
   const { addToCart } = useContext(CartContext);
   const [filteredBrand, setFilteredBrand] = useState(''); 
   const [sortType, setSortType] = useState('');
   const [displayedsarees, setDisplayedsarees] = useState(sarees); 

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
    let filteredsarees = filteredBrand
      ? sarees.filter((saree) => saree.brand === filteredBrand)
      : sarees;
  
    // Ensure that `price` is a number for proper sorting
    filteredsarees = filteredsarees.map(saree => ({
      ...saree,
      price: Number(saree.price) // Convert price to a number
    }));
  
    if (sortType === 'low-to-high') {
      filteredsarees.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      filteredsarees.sort((a, b) => b.price - a.price);
    }
  
    setDisplayedsarees(filteredsarees);
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
              <Link onClick={() => filterByBrand('1 Ssaree Fashion')}>1 Ssaree Fashion</Link><br />
              <Link className='more'>see more...</Link><br />
              <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
            </div>
            <div className="col-md-10 makesup">
            <br /><br /><h1 className='shirtHead handHead'>Sarees</h1><br />
        <div className="container kurtiWrapper shirtWrapper">
           <div className="row">
              {displayedsarees.map((saree, index) => (
              <div className="col-md-3 kurticol" key={index}>
                <div className="card kurticard">
                  <img src={saree.img} className="card-img-saree" alt={saree.name} />
                  <div className="card-body kurtibody">
                     <p className="card-text comp">{saree.brand}</p>
                     <p className="card-title">{saree.name}</p>
                     <h5 className="card-text">₹{saree.price}</h5>

                     <button onClick={() => addToCart(saree)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Sarees
