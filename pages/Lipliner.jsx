import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lipliners from '../cosmetics/lipliner';
import { CartContext } from '../pages/CartContext';

const Lipliners = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);

  const [filteredBrand, setFilteredBrand] = useState('');
  const [sortType, setSortType] = useState('');
  const [displayedlipliners, setDisplayedlipliners] = useState(lipliners);

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
    let filteredlipliners = filteredBrand
      ? lipliners.filter((lipliner) => lipliner.brand === filteredBrand)
      : lipliners;
  
    // Ensure that `price` is a number for proper sorting
    filteredlipliners = filteredlipliners.map(lipliner => ({
      ...lipliner,
      price: Number(lipliner.price) // Convert price to a number
    }));
  
    if (sortType === 'low-to-high') {
      filteredlipliners.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      filteredlipliners.sort((a, b) => b.price - a.price);
    }
  
    setDisplayedlipliners(filteredlipliners);
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
          <Link onClick={resetFilter}>All</Link><br />
          <Link onClick={() => filterByBrand('LAKME')}>LAKME</Link><br />
          <Link onClick={() => filterByBrand('MARS')}>MARS</Link><br />
          <Link onClick={() => filterByBrand('NYKAA')}>NYKAA</Link><br />
          <Link onClick={() => filterByBrand('SWISS BEAUTY')}>SWISS BEAUTY</Link><br />
          <Link onClick={() => filterByBrand('BLUE HEAVEN')}>BLUE HEAVEN</Link><br />
          <Link className='more'>See more...</Link><br />
          <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
        </div>
        <div className="col-md-10 makesup">
          <br /><br /><h1 className='pendantHead liphead jewells'>Lip Liners</h1><br />
          <div className="container kurtiWrapper shirtWrapper">
            <div className="row">
              {displayedlipliners.map((lipliner, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={lipliner.img} className="card-img-top" alt={lipliner.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text lipp">{lipliner.brand}</p>
                      <p className="card-title">{lipliner.name}</p>
                      <h5 className="card-text">₹{lipliner.price}</h5>
                      <button onClick={() => addToCart(lipliner)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Lipliners;
