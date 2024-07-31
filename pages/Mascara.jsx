import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mascaras from '../cosmetics/mascara';
import { CartContext } from '../pages/CartContext';

const Mascaras = () => {
  const navigate=useNavigate();
  const { addToCart } = useContext(CartContext);

  const [filteredBrand, setFilteredBrand] = useState('');
  const [sortType, setSortType] = useState('');
  const [displayedmascaras, setDisplayedmascaras] = useState(mascaras);

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
    let filteredmascaras = filteredBrand
      ? mascaras.filter((mascara) => mascara.brand === filteredBrand)
      : mascaras;
  
    filteredmascaras = filteredmascaras.map(mascara => ({
      ...mascara,
      price: Number(mascara.price) 
    }));
  
    if (sortType === 'low-to-high') {
      filteredmascaras.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      filteredmascaras.sort((a, b) => b.price - a.price);
    }
  
    setDisplayedmascaras(filteredmascaras);
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
          <br /><br /><h1 className='pendantHead liphead jewells'>Mascaras</h1><br />
          <div className="container kurtiWrapper shirtWrapper">
            <div className="row">
              {displayedmascaras.map((mascara, index) => (
                <div className="col-md-3 kurticol" key={index}>
                  <div className="card kurticard">
                    <img src={mascara.img} className="card-img-top" alt={mascara.name} />
                    <div className="card-body kurtibody">
                      <p className="card-text lipp">{mascara.brand}</p>
                      <p className="card-title">{mascara.name}</p>
                      <h5 className="card-text">₹{mascara.price}</h5>
                      <button onClick={() => addToCart(mascara)} className="btn btn-primary kurtibtn">Add to cart</button>
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

export default Mascaras;
