import React from 'react'
import Navbar from '../Home/Navbar';
import Options from '../Home/options';
import image1 from '../images/home carousel1.jpeg';
import image2 from '../images/Untitled design.png';
import image3 from '../images/SHOP now.png';
import image4 from '../images/BUY ONE GET 1 FREE (1).png';
import image5 from '../images/shoes.jpg';
import image6 from '../images/Shop Now (1).png';
import data from '../Home/fashionData';
import jewelleries from '../Home/jewelry';
import image7 from '../images/Untitled design (1).png';
import cosmetics from '../Home/cosmeticData';
import image8 from '../images/makeup offer.webp';
import shoes from '../Home/shoes';
import { Link } from 'react-router-dom';
import image9 from '../images/dressOffer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../pages/Footer';


const mainHome = () => {
  return (
    <div>
      <Navbar/>
      <Options/>
      <div className='mainImgWrapper'>
         <img src={image6} alt="" className='image6'/>
      </div>

        <div id="carouselExample" class="carousel slide homeCar">
           <div class="carousel-inner">
              <div class="carousel-item active">
                 <a href="/"><img src={image3} class="d-block w-100" alt="..."/></a>
              </div>
              <div class="carousel-item">
                 <a href="/"><img src={image1} class="d-block w-100" alt="..."/></a>
              </div>
              <div class="carousel-item">
                 <a href="/"><img src={image2} class="d-block w-100" alt="..."/></a>
              </div>
              <div class="carousel-item">
                 <a href="/"><img src={image4} class="d-block w-100" alt="..."/></a>
              </div>
              <div class="carousel-item">
                 <a href="/"><img src={image5} class="d-block w-100" alt="..."/></a>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
            </button>
        </div>

        <section classname='dealsFashion'>
            <h2 className='topDeals'>Top Deals on Fashion</h2>
            <div className='fashionCards'>
               {data.map((item,index)=>(
                   <div class="card fashions" key={index}>
                   <img src={item.img} class="card-img-top" alt="..."/>
                   <div class="card-body fashionContent">
                     <h6 class="card-text">{item.price}</h6>
                     <p class="card-title">{item.name}</p>
                     <Link to={item.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                   </div>
                 </div>
               ))} 
               <Link to='/fashion' className='arrowicon'><FontAwesomeIcon icon={faArrowRight} className='arrows'/> </Link>  
            </div>
           
        </section>

        <section className='dealsFashion'>
            <h2 className='topDeals'>Stylish Branded Jewelry</h2>
            <div className="fashionCards">
               {jewelleries.map((index,jewelry)=>(
                  <div class="card fashions" key={index}>
                  <img src={jewelry.img} class="card-img-top" alt="..."/>
                  <div class="card-body fashionContent">
                    <h6 class="card-title">{jewelry.name}</h6>
                    <p class="card-text">{jewelry.price}</p>
                    <Link to={jewelry.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                  </div>
                </div>
               ))}
               <Link to='/hands' className='arrowicon'><FontAwesomeIcon icon={faArrowRight} className='arrows'/> </Link>
            </div>
        </section>

        <div className="shoesAd mainImgWrapper">
         <img src={image7} alt=""  className='image7'/>
        </div>

        <section>
         <h2 className='homeMakeup'>Makeup Specials</h2>
         <div className="container makes">
            <div className="row">
               <div className="col-md-6">
                 <div className="cosmeticCards">
                   {cosmetics.map((cosmetic,index)=>(
                    <div className='card fashions cosm' key={index}>
                       <img src={cosmetic.img} class="card-img-top" alt="..."/>
                       <div class="card-body fashionContent">
                         <h6 class="card-title">{cosmetic.name}</h6>
                         <p class="card-text">{cosmetic.price}</p>
                         <Link to={cosmetic.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                       </div>
                    </div>
                   ))}
                   <Link to='/face' className='arrowmakeicon'><FontAwesomeIcon icon={faArrowRight} className='arrowmake'/> </Link>
                  </div>
               </div>
               <div className="col-md-6 makeImgWrapper">
                  <img src={image8} alt="" className='image8' />
               </div>
            </div>
         </div> 
        </section>
       
       <section>
       <h2 className='footwearHead'>Footwear</h2>
         <div className="fashionCards">
            {shoes.map((index,shoe)=>(
                  <div class="card fashions" key={index}>
                  <img src={shoe.img} class="card-img-top" alt="..."/>
                  <div class="card-body fashionContent">
                    <h6 class="card-title">{shoe.name}</h6>
                    <p class="card-text">{shoe.price}</p>
                    <Link to={shoe.Linkto} class="btn btn-primary homebtn">Buy Now</Link>
                  </div>
                </div>
             ))}
             <Link to='/footwear' className='arrowicon'><FontAwesomeIcon icon={faArrowRight} className='arrows'/></Link>
         </div>
       </section>

       <div className='mainImgWrapper'>
         <img src={image9} alt="" className='image6'/>
       </div>

       <div className='about'>
          <h5>About Us</h5>
          <p>Welcome to Fashionza, your ultimate destination for the latest trends in fashion and style. At Fashionza, we believe that fashion is not just about clothes; it's a way of expressing who you are. We are dedicated to bringing you the best in fashionable attire, chic accessories, and must-have beauty products, all at unbeatable prices.</p>
          <h5>Our Mission</h5>
          <p>Our mission is to empower you to feel confident and stylish every day. We curate a wide range of products from top brands and emerging designers to ensure that you have access to the latest trends and timeless classics. Whether you're looking for the perfect outfit for a special occasion or everyday essentials, Fashionza has got you covered.</p>
          <h5>What We Offer</h5>
          <ul>
            <li><b>Trendsetting Fashion:</b> Stay ahead of the curve with our handpicked selection of clothing, from elegant dresses to casual wear.</li>
            <li><b>Accessories & Jewelry:</b> Complete your look with our stylish accessories and jewelry, including branded and fashionable pieces.</li>
            <li><b>Beauty & Cosmetics:</b> Discover our range of beauty products and cosmetic deals to enhance your natural beauty.</li>
            <li><b>Exclusive Deals:</b> Enjoy great savings with our exclusive deals and offers on a variety of products.</li>
          </ul>
          <h5>Our Commitment</h5>
          <p>At Fashionza, we are committed to providing you with a seamless shopping experience. Our team is passionate about fashion and dedicated to helping you find what you need. We strive to offer high-quality products and exceptional customer service. Your satisfaction is our top priority.</p>
          <h5>Join Us</h5>
          <p>Join the Fashionza community and stay updated with the latest trends, special offers, and style tips. Follow us on social media and subscribe to our newsletter for the latest updates.</p>
          <p>Thank you for choosing Fashionza as your go-to fashion destination. We look forward to helping you look and feel your best!</p>  
      
       </div>
        <Footer/>

    </div>
  )
}

export default mainHome
