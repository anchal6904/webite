import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navvbarr">
        <span className='companyName'>FASHIONZA</span>
        <div className="inputWrapper">
          <input type="text" className='inputSearch'  placeholder='Search for anything'/>
        </div>
      </div>
      <ul className="listnav">
        <li className='iconss navicon'><FontAwesomeIcon icon={faUser} /></li>
        <li className='navli'><span><Link to='/loginPage'>Login</Link></span></li>
        <li className='iconss navicons'><FontAwesomeIcon icon={faCartShopping}/></li>
        <li className='navli'><span><Link to='/cart'>Cart</Link></span></li>
        <li className='navli seller'><span><Link to='/loginpage'>Become a Seller</Link></span></li>
        <li><button className='download'>Download app</button></li> 
      </ul>
    </nav>
  )
}

export default Navbar
