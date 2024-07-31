import React from 'react'
import sho1 from '../images/slippersad.jpg';
import mens from '../Shoes/menShoes';
import womens from '../Shoes/ladiesShoes';
import sho2 from '../images/shoesAds.jpg';
import kids from '../Shoes/kidShoes';
import sells from '../Shoes/bestShoes';
import { Link,useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MainShoes = () => {
  const navigate=useNavigate();
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-2 clothes">
              <h5>Shop by category</h5>
              <Link to='/Menfoot'>Men</Link><br />
              <Link to='/ladiesfoot'>Ladies</Link><br />
              <Link to='/kidsfoot'>Kids</Link><br />
              <div className="fashcart">
                <button onClick={()=>navigate('/cart')} className='cartbtn shoecart'>View Cart</button>
              </div>
            </div>
            <div className="col-md-10">

                <div className="slipperAd mainImgWrapper">
                    <img src={sho1} alt="" className='slipper'/>
                </div>

                <div className="shopMen">
                    <h2 className='ladiesSection'>Shop Men</h2>
                    <div className="menShoesWrapper ladWrapper">
                      {mens.map(men=>(
                        <div class="card lads">
                          <img src={men.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{men.name}</h6>
                            <p class="card-text">{men.price}</p>
                            <Link to={men.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/Menfoot' className='arrowfashion arrowlad arrowfoot' title='View more'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>    
                </div>

                <div className="shopWomen">
                    <h2 className='ladiesSection'>Shop Ladies</h2>
                    <div className="ladyShoeWrapper ladWrapper">
                      {womens.map(women=>(
                        <div class="card lads">
                          <img src={women.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{women.name}</h6>
                            <p class="card-text">{women.price}</p>
                            <Link to={women.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/ladiesfoot' className='arrowfashion arrowlad arrowfoot'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                </div>


                <div className="shopKids">
                    <h2 className='ladiesSection'>Shop Kids</h2>
                    <div className="kidsWrapper ladWrapper">
                      {kids.map(kid=>(
                        <div class="card lads">
                          <img src={kid.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{kid.name}</h6>
                            <p class="card-text">{kid.price}</p>
                            <Link TO={kid.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/kidsfoot' className='arrowfashion arrowlad arrowfoot'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                </div>

                <div className="shoeAd mainImgWrapper">
                    <img src={sho2} alt="" className='shoeAd'/>
                </div>


                <div className="bestSellShoes">
                    <h2 className='ladiesShoes'>Best Selling</h2>
                    <div className="bestShoes ladWrapper">
                      {sells.map(sell=>(
                        <div class="card lads">
                          <img src={sell.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{sell.name}</h6>
                            <p class="card-text">{sell.price}</p>
                            <a href="/" class="btn btn-primary homebtn">Buy Now</a>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>

                <div className="aboutShoes">
                    <h4>Footwear</h4>
                    <p>Welcome to the Shoes & Sandals section of Fashionza, where comfort meets style. Our collection features an array of footwear options designed to keep you stepping out in confidence and elegance. From casual sandals to sophisticated shoes, we have the perfect pair for every occasion.</p>
                    <h4>Our Collection</h4>
                    <p><b>Women's Footwear:</b></p>
                    <p>Explore our selection of women’s footwear, crafted to combine fashion with function. Whether you’re looking for everyday flats, stylish heels, or comfortable sandals, we offer a variety of designs to match your personal style.</p>
                    <ul>
                        <li><b>Heels: </b>Elevate your look with our range of high heels, perfect for adding a touch of sophistication to any outfit.</li>
                        <li><b>Flats: </b>Enjoy all-day comfort with our stylish flats, ideal for both casual and formal settings.</li>
                        <li><b>Sandals: </b>Discover our trendy sandals, perfect for warm weather and relaxed outings.</li>
                    </ul>
                    <p><b>Men's Footwear:</b></p>
                    <p>Our men’s collection features versatile footwear that blends durability with style. From classic dress shoes to casual sandals, find the right pair to complement your wardrobe.</p>
                    <ul>
                        <li><b>Dress Shoes:</b> Make a statement with our sleek dress shoes, perfect for formal events and professional settings.</li>
                        <li><b>Casual Shoes: </b>Keep it laid-back with our casual shoes, designed for comfort and style in everyday wear.</li>
                        <li><b>Sandals:</b>Stay cool and comfortable with our range of men’s sandals, ideal for casual outings and beach days.</li>
                    </ul>
                    <p><b>Kids' Footwear:</b></p>
                    <p>Keep your little ones looking stylish and feeling comfortable with our range of kids’ shoes and sandals. Our collection includes playful designs and sturdy construction to support their active lifestyles.</p>
                    <h4>Why Choose Fashionza Footwear?</h4>
                    <ul>
                        <li><b>Quality Materials:</b>We use high-quality materials to ensure durability, comfort, and style in every pair.</li>
                        <li><b>Wide Variety:</b>Our extensive range of designs means you’ll always find the perfect fit for any occasion.</li>
                        <li><b>Affordable Prices: </b> Enjoy fashionable footwear at prices that fit your budget, without compromising on quality.</li>
                        <li><b>Comfort & Style: </b> Our shoes and sandals are designed to provide maximum comfort while keeping you stylish.</li>
                    </ul>
                    <h4>Style Tips & Trends</h4>
                    <p>Stay ahead in the fashion game with our latest style tips and trends. From pairing shoes with the perfect outfit to seasonal must-haves, our expert advice will help you make the right choice.</p>
                    <h4>Join the Fashionza Footwear Community</h4>
                    <p>Be part of our vibrant community by following us on social media and subscribing to our newsletter. Get the latest updates on new arrivals, exclusive deals, and styling tips straight to your inbox.</p>
                    <p>Thank you for choosing Fashionza for your footwear needs. We’re excited to help you find the perfect pair that combines style, comfort, and quality.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainShoes
