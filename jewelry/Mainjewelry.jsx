import React from 'react'
import jew1 from '../images/Shop Now (3).png';
import jewels from '../jewelry/jewelSet';
import ears from '../jewelry/earrings';
import jew2 from '../images/bracelets.jpg';
import bracelets from '../jewelry/bracelets';
import rings from '../jewelry/rings';
import jew3 from '../images/SP N (2).png';
import jew4 from '../images/1.png';
import jew5 from '../images/Untitled design (4).png';
import bests from '../jewelry/bestSellJew';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Mainjewelry = () => {
  const navigate=useNavigate();
  return (
    <div className="container">
        <div className="row">
            <div className="row">
                <div className="col-md-2 clothes">
                  <h5>Shop by category</h5>
                  <Link to='/pendants'>Pendants</Link><br />
                  <Link to='/JEWELS'>Jewel Set</Link><br />
                  <Link to='/rings'>Rings</Link><br />
                  <Link to='/bracelet'>Bracelets</Link><br />
                  <Link to='/bangles'>Bangles</Link><br />
                  <Link to='/watch'>Watches</Link><br />
                  <Link to='/mangalsutra'>Mangalsutra</Link><br />
                  <Link to='/earings'>Earrings</Link><br />
                  <Link className='more'>See more...</Link><br />
                  <h5 className='jewelhead'>Accessories</h5>
                  <Link>Maang Teeka</Link><br />
                  <Link>Brooches</Link><br />
                  <Link>Safety pin</Link><br />
                  <Link>Hair pins</Link><br />
                  <Link>Charms</Link><br />
                  <Link className='more'>See more...</Link><br />
                  <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
                  
                </div>
                <div className="col-md-10">
                  <div className='mainImgWrapper'> 
                    <img src={jew1} alt="" className='jewelImg'/>
                  </div>

                  <div className="necklace">
                    <h2 className='ladiesSection'>Necklaces</h2>
                    <div className="neckWrapper">
                      {jewels.map(jewel=>(
                      <div class="card coss">
                          <img src={jewel.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{jewel.name}</h6>
                            <p class="card-text">{jewel.price}</p>
                            <Link to={jewel.Linkto} class="btn btn-primary homebtn jewelbtn">Buy Now</Link>
                          </div>
                      </div>
                      ))}
                      <Link to='/necklaces' className='arrowfashion arrowneck'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                    
                  </div>

                  <div className="earrings">
                    <h2 className='ladiesSection'>Earrings</h2>
                    <div className="neckWrapper">
                      {ears.map(ear=>(
                        <div class="card coss">
                          <img src={ear.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{ear.name}</h6>
                            <p class="card-text">{ear.price}</p>
                            <Link to={ear.Linkto} class="btn btn-primary homebtn jewelbtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/earings' className='arrowfashion arrowneck'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>  
                  </div>

                  <div className="braceletsAd mainImgWrapper">
                    <img src={jew2} alt="" className='braceletAd' />
                  </div>

                  <div className="bracelets">
                    <h2 className='ladiesSection'>Bangles and Watches</h2>
                    <div className="neckWrapper">
                      {bracelets.map(bracelet=>(
                        <div class="card coss">
                          <img src={bracelet.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{bracelet.name}</h6>
                            <p class="card-text">{bracelet.price}</p>
                            <Link to={bracelet.Linkto} class="btn btn-primary homebtn jewelbtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/hands' className='arrowfashion arrowneck'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                    
                  </div>

                  <div className="ring">
                    <h2 className='ladiesSection'>Rings and Solitaires</h2>
                    <div className="neckWrapper">
                      {rings.map(ring=>(
                        <div class="card coss">
                          <img src={ring.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{ring.name}</h6>
                            <p class="card-text">{ring.price}</p>
                            <Link to={ring.Linkto} class="btn btn-primary homebtn jewelbtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/rings' className='arrowfashion arrowneck'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                  </div>

                  <div id="carouselExampleAutoplaying" class="carousel slide ringAd" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={jew5} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={jew4} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={jew3} class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>

                  <div className="bestSelling ladiesCards">
                    <h2 className='ladiesSection'>Best Selling</h2>
                    <div className="bestWrapper ladWrapper">
                      {bests.map(best=>(
                        <div class="card lads">
                          <img src={best.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{best.name}</h6>
                            <p class="card-text">{best.price}</p>
                            <a href="/" class="btn btn-primary homebtn bestbtn">Buy Now</a>
                          </div>
                        </div>
                      ))}
                    </div>
                    

                  </div>

                  <div className="aboutJewel">
                    <h4>About Our Jewelry</h4><br />
                    <p><b>Elegant Adornments</b></p>
                    <p>Our jewelry collection epitomizes elegance and sophistication. Each piece is meticulously crafted to enhance your natural beauty, making a statement of timeless grace.</p>
                    <p><b>Precious Gems</b></p>
                    <p>We source the finest precious gems, ensuring every piece of jewelry shines with unmatched brilliance. From diamonds to emeralds, our gemstones are selected for their exceptional quality and allure.</p>
                    <p><b>Luxury Accessories</b></p>
                    <p>Our range of luxury accessories offers something for every occasion. Whether it's a dazzling necklace for a gala or a simple yet elegant bracelet for everyday wear, our designs cater to all tastes and styles.</p>
                    <p><b>Timeless Beauty</b></p>
                    <p>Jewelry is more than just an accessory; it’s a symbol of timeless beauty. Our designs blend classic and contemporary elements, ensuring that each piece remains stylish and relevant across generations.</p>
                    <h4>Why Choose Us?</h4>
                    <ul>
                      <li><b>Craftsmanship: </b>Our artisans are skilled in the traditional techniques of jewelry making, ensuring each piece is a work of art.</li>
                      <li><b>Quality</b>We use only the highest quality materials, from precious metals to exquisite gemstones.</li>
                      <li><b>Customer Service:</b>Our commitment to customer satisfaction means we offer personalized service and a guarantee of excellence.</li>
                    </ul>
                    <h4>Explore Our Collection</h4>
                    <p>Discover the perfect piece to complement your style and celebrate life's special moments. Visit our store or browse our collection online to find your next cherished treasure.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mainjewelry
