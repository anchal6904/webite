import React from 'react'
import lips from '../cosmetics/lips';
import cos1 from '../images/makeupImg.png';
import faces from '../cosmetics/face';
import cos2 from '../images/cosmetic page.avif';
import cos3 from '../images/makeup2.avif';
import cos4 from '../images/makeup3.avif';
import cos5 from '../images/makeup4.avif';
import eyes from '../cosmetics/eyes';
import nails from '../cosmetics/nails';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MainCosmetics = () => {
  const navigate=useNavigate();
  return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col-md-2 clothes">
              <h5 className='cosHeads'>Shop by category</h5>
              <Link to='/lips'>Lips</Link><br />
              <Link to='/eyes'>Eyes</Link><br />
              <Link to='/face'>Skincare</Link><br />
              <Link to='/nails'>Nails</Link><br />
              <Link>Hair</Link><br />
              <Link className='more'>See more...</Link><br />
              <button onClick={()=>navigate('/cart')} className='cartbtn'>View Cart</button>
            </div>
            <div className="col-md-10">
                <div className="lips">
                    <h2 className='ladiesSection pendantHead'>Lips</h2>
                    <div className="cosWrapper">
                      {lips.map(lip=>(
                        <div class="card coss">
                          <img src={lip.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{lip.name}</h6>
                            <p class="card-text">{lip.price}</p>
                            <Link to={lip.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/lips' className='arrowfashion arrowcos'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                </div>

                <div className="makeupImg mainImgWrapper">
                    <img src={cos2} alt="" className='cosmetImg' />
                </div>

                <div className="makeupgif mainImgWrapper">
                    <img src="https://images-static.nykaa.com/uploads/2f529c2e-67bc-4e8d-a14a-673f3532bb33.gif" alt="" className='gifImg'/>
                </div>
                
                <div className="face">
                    <h2 className='ladiesSection pendantHead'>Skin</h2>
                    <div className="cosWrapper">
                      {faces.map(face=>(
                        <div class="card coss" >
                          <img src={face.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{face.name}</h6>
                            <p class="card-text">{face.price}</p>
                            <Link to={face.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/face' className='arrowfashion arrowcos'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>   
                </div>

                <div id="carouselExampleFade" class="carousel slide cosCar">
                   <div class="carousel-inner">
                       <div class="carousel-item active">
                           <img src={cos1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                           <img src={cos3} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                          <img src={cos4} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                          <img src={cos5} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="eyes">
                    <h2 className='ladiesSection pendantHead'>Eyes</h2>
                    <div className="cosWrapper">
                      {eyes.map(eye=>(
                        <div class="card coss" >
                          <img src={eye.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{eye.name}</h6>
                            <p class="card-text">{eye.price}</p>
                            <Link to={eye.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      <Link to='/eyes' className='arrowfashion arrowcos'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                </div>

                <div className="nails">
                    <h2 className='ladiesSection pendantHead'>Nails</h2>
                    <div className="nailWrapper">
                      {nails.map(nail=>(
                        <div class="card lads">
                          <img src={nail.img} class="card-img-top" alt="..."/>
                          <div class="card-body ladContent">
                            <h6 class="card-title">{nail.name}</h6>
                            <p class="card-text">{nail.price}</p>
                            <Link to={nail.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                          </div>
                        </div>
                      ))}
                      
                    </div>
                    <div className="arrowContainer">
                      <Link to='/nails' className='arrowfashion arrownail'><FontAwesomeIcon icon={faArrowRight} className='arrowfash'/> </Link>
                    </div>
                   
                </div>

                <div className="cosAbout">
                    <h4>Cosmetics</h4>
                    <p>Welcome to the Cosmetics section of Fashionza, where beauty meets excellence. Discover our wide range of high-quality cosmetics designed to enhance your natural beauty and help you express yourself confidently. From everyday essentials to glamorous must-haves, we have everything you need to create the perfect look.</p>
                    <h4>Our Collection</h4>
                    <ul>
                        <li><b>Face:</b> Achieve a flawless complexion with our selection of foundations, concealers, powders, and primers. Our products cater to all skin types and tones, ensuring you find the perfect match for a radiant finish.</li>
                        <li><b>Eyes:</b> Make your eyes stand out with our range of eyeshadows, mascaras, eyeliners, and brow products. Whether you prefer a natural look or bold, dramatic eyes, our cosmetics will help you create stunning eye makeup effortlessly.</li>
                        <li><b>Lips: </b>Discover a variety of lipsticks, glosses, and liners in vibrant colors and luxurious textures. From classic reds to trendy nudes, our lip products will keep your lips looking fabulous.</li>
                        <li><b>Skincare: </b>Maintain healthy and glowing skin with our skincare essentials, including cleansers, moisturizers, serums, and masks. Our products are formulated with the finest ingredients to nourish and protect your skin.</li>
                    </ul>
                    <h4>Why Choose Fashionza Cosmetics?</h4>
                    <ul>
                        <li><b>Quality Ingredients:</b> We prioritize using high-quality, skin-friendly ingredients in all our products to ensure your skin stays healthy and beautiful.</li>
                        <li><b>Wide Variety: </b>Our extensive range of cosmetics means you’ll find everything you need to create any look, from natural to glamorous.</li>
                        <li><b>Affordability: </b>Enjoy premium quality cosmetics at prices that won’t break the bank, making beauty accessible to everyone.</li>
                        <li><b>Cruelty-Free: </b>We are committed to offering cruelty-free products, ensuring no animals are harmed in the making of our cosmetics.</li>
                    </ul>
                    <h4>Join the Fashionza Beauty Community</h4>
                    <p>Follow us on social media and subscribe to our newsletter to get the latest updates on new arrivals, exclusive offers, and beauty tips. Be a part of our vibrant community and share your beauty journey with us.</p>
                    <p>Thank you for choosing Fashionza for your cosmetic needs. We’re excited to help you look and feel your best every day.</p>
                </div>

            </div>
        </div>
       </div>
    </div>
  )
}

export default MainCosmetics
