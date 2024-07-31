import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <ul>
                    <li className='lihead'><b>ABOUT</b></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Link>Fashionza Stories</Link></li>
                    <li><Link>Careers</Link></li>
                    <li><Link>Corporate Information</Link></li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul>
                    <li className='lihead'><b>CONNECT WITH US</b></li>
                    <li><Link>Facebook</Link></li>
                    <li><Link>Instagram</Link></li>
                    <li><Link>Twitter</Link></li>
                    <li></li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul>
                    <li className='lihead'><b>HELP</b></li>
                    <li><Link>Payments</Link></li>
                    <li><Link>Shipping</Link></li>
                    <li><Link>Cancellations & Return</Link></li>
                    <li><Link>FAQ</Link></li>
                    <li>Report Infringement</li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul>
                    <li className='lihead'><b>CONSUMER POLICY</b></li>
                    <li><Link>Cancellations & Returns</Link></li>
                    <li><Link>Terms Of Use</Link></li>
                    <li><Link>Security</Link></li>
                    <li><Link>Privacy</Link></li>
                </ul>
            </div>
        </div>
      </div>
      <hr />
      <span className='callfoot'>Call us: 03338393 / 03337383</span>
      <div className="footbtnWrap">
        <button onClick={()=>navigate('/message')} className='footbtn'>Message Us</button>
      </div>
    </div>
  )
}

export default Footer
