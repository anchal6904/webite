import React from 'react'
import fash1 from '../images/fashionImg.webp';
import ladies from '../Fashion/ladies';
import men from '../Fashion/men';
import fash2 from '../images/fashionad.webp';
import kids from '../Fashion/kids';
import brands from './sale';
import fash3 from '../images/Untitled design (3).png';
import caps from '../Fashion/caps';
import bests from '../Fashion/bestSell';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MainFashion = () => {
  const navigate=useNavigate();
  return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col-md-2">
              <div className="clothes">
                <h5>Shop by category</h5>
                <Link to='/menspage'>Men</Link><br />
                <Link to='/LadiesPage'>Ladies</Link><br />
                <Link to='/Kidspage'>Kids</Link><br />
              </div>
              <div className="accessories clothes">
                <h5>Buy Accessories</h5>
                <Link>Bagpacks & Bags</Link><br />
                <Link>Purses</Link><br />
                <Link>Socks & Stockings</Link><br />
                <Link>Caps & hats</Link><br />
                <Link>Belts</Link><br />
              </div> 
              <div className="fashcart">
                <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
              </div>
              
            </div>
            <div className="col-md-10">
                <div className='fashImgWrapper'>
                  <img src={fash1} alt="" className='fash1' />
                </div>

                <div className="ladiesCards">
                  <h2 className='ladiesSection'>Shop Ladies</h2>
                  <div className="ladWrapper">
                    {ladies.map(lady=>(
                      <div class="card lads">
                        <img src={lady.img} class="card-img-top" alt="..."/>
                        <div class="card-body ladContent">
                          <h6 class="card-title">{lady.name}</h6>
                          <p class="card-text">{lady.price}</p>
                          <Link to={lady.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                        </div>
                      </div>
                    ))}
                    
                    <Link to='/ladiespage' className='arrowfashion arrowlad' title='View more'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    
                  </div>
                  
                </div>

                <div className="menCards">
                    <h2 className='ladiesSection'>Shop Men</h2>
                    <div className="ladWrapper">
                      {men.map(man=>(
                      <div class="card lads" >
                        <img src={man.img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h6 class="card-title ladContent">{man.name}</h6>
                          <p class="card-text">{man.price}</p>
                          <Link to={man.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                        </div>
                      </div>
                      ))}
                      <Link to='/menspage' className='arrowfashion arrowlad'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                    

                </div>

                <div className="fashionPageAd mainImgWrapper">
                    <img src={fash2} alt="" className='fashAd'/>
                </div>

                <div className="kidsCards">
                    <h2 className='ladiesSection'>Shop Kids</h2>
                    <div className="ladWrapper">
                      {kids.map(kid=>(
                        <div class="card lads">
                          <img src={kid.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{kid.name}</h6>
                            <p class="card-text">{kid.price}</p>
                            <Link to={kid.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/kidspage' className='arrowfashion arrowlad'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>

                </div>

                <div className="kidsCards">
                    <h2 className='ladiesSection'>Hot Deals</h2>
                    <div className="ladWrapper">
                      {brands.map(brand=>(
                        <div class="card lads">
                          <img src={brand.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{brand.name}</h6>
                            <p class="card-text">{brand.price}</p>
                            <a href="/" class="btn btn-primary homebtn">Buy Now</a>
                          </div>
                        </div>
                      ))}
                      <Link to='/' className='arrowfashion arrowlad'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>

                </div>



                <div className='mainImgWrapper'>
                    <img src={fash3} alt="" className='fashionImg' />
                </div>

              <div className="capsCards">
                  <h2 className='ladiesSection'>Accessories</h2>
                  <div className="ladWrapper">
                    {caps.map(cap=>(
                      <div class="card lads">
                        <img src={cap.img} class="card-img-top" alt="..."/>
                        <div class="card-body ladContent">
                          <h6 class="card-title">{cap.name}</h6>
                          <p class="card-text">{cap.price}</p>
                          <a href="/" class="btn btn-primary homebtn">Buy Now</a>
                        </div>
                      </div>
                   ))}
                   <Link to='/' className='arrowfashion arrowlad'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                  </div>
              </div>

              <div className="capsCards">
                  <h2 className='ladiesSection'>Accessories</h2>
                  <div className="ladWrapper">
                    {bests.map(best=>(
                      <div class="card lads">
                        <img src={best.img} class="card-img-top" alt="..."/>
                        <div class="card-body ladContent">
                          <h6 class="card-title">{best.name}</h6>
                          <p class="card-text">{best.price}</p>
                          <a href="/" class="btn btn-primary homebtn">Buy Now</a>
                        </div>
                      </div>
                   ))}
                   <Link to='/' className='arrowfashion arrowlad'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                  </div>
              </div>

              <div className="aboutFash">
                <h5>Fashion</h5>
                <p>Welcome to the Fashion section of Fashionza, where style meets sophistication. Here, you'll find an extensive collection of the latest trends, timeless classics, and everything in between. Our curated selection is designed to cater to your unique sense of style, ensuring you always look and feel your best.</p>
                <h5>Discover Your Style</h5>
                <p>At Fashionza, we believe that fashion is an expression of individuality. That's why we offer a diverse range of clothing options to suit every taste and occasion. Whether you're dressing up for a special event or looking for casual everyday wear, our collection has something for everyone.</p>
                <h5>Our Collection</h5>
                <ul>
                  <li><b>Women's Fashion:</b> Explore our chic and trendy women’s fashion, featuring dresses, tops, skirts, and more. From elegant evening wear to casual daywear, we have pieces that will make you stand out.</li>
                  <li><b>Men's Fashion:</b> Discover our stylish men’s fashion, including shirts, trousers, jackets, and accessories. Our range combines classic cuts with modern trends to keep you looking sharp.</li>
                  <li><b>Kids' Fashion:</b> Keep your little ones looking adorable with our selection of kids’ fashion. From playful prints to comfortable everyday outfits, our collection is perfect for every adventure.</li>
                  <li><b>Accessories:</b> No outfit is complete without the right accessories. Browse our range of bags, belts, hats, and more to add the perfect finishing touch to your look.</li>
                </ul>
                <h5>Fashion Trends</h5>
                <p>Stay ahead of the fashion curve with our trend insights and style tips. Our fashion experts keep you updated on the latest trends, seasonal must-haves, and how to style them. Whether it's bold prints, minimalist chic, or vintage-inspired looks, you'll find all the inspiration you need right here.</p>
                <h5>Why Choose Fashionza?</h5>
                <ul>
                  <li><b>Quality:</b> We source high-quality materials to ensure our products are durable and stylish.</li>
                  <li><b>Variety:</b> Our extensive range of fashion items means you'll always find something that suits your style.</li>
                  <li><b>Affordability: </b>Enjoy fashionable clothing at prices that won't break the bank.</li>
                  <li><b>Customer Service: </b>Our dedicated team is here to assist you with any queries and ensure a seamless shopping experience.</li>
                </ul>
                <h5>Join the Fashionza Community</h5>
                <p>Be part of our fashion-forward community by following us on social media and subscribing to our newsletter. Get the latest updates on new arrivals, exclusive sales, and fashion tips straight to your inbox.</p>
                <p>Thank you for choosing Fashionza for all your fashion needs. We’re excited to help you discover your style and elevate your wardrobe.</p>
              </div>
            </div>
        </div>
       </div>

    </div>
  )
}

export default MainFashion;
