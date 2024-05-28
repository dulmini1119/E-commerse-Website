import React from 'react'
import Marquee from "react-fast-marquee";
import display from '../images/display.jpg';
import makup from '../images/makup.jpg';
import frag from '../images/frag.jpg';
import skincare from '../images/skincare.png';
import men from '../images/men.jpg';
import service from '../images/service.png';
import service2 from '../images/service2.png'
import service3 from '../images/service3.png';
import service4 from '../images/service4.png';
import service5 from '../images/service5.png';
import fragrance from '../images/fragrance.jpg'
import facecare from '../images/facecare.jpg';
import vitamins from '../images/vitamins.jpg'
import skincaremen from '../images/skincaremen.jpg'
import ColorCosmetics from '../images/ColorCosmetics.jpg';
import motherbaby from '../images/motherbaby.jpg';
import Gifts from '../images/Gifts.jpg';
import feature1 from '../images/feature1.jpg'
import feature2 from '../images/feature2.webp'
import feature3 from '../images/feature3.jpg'
import feature4 from '../images/feature4.jpg'
import feature5 from '../images/feature5.jpg'
import feature6 from '../images/feature6.jpg'
import feature7 from '../images/feature7.jpg'
import feature8 from '../images/feature8.jpg'
import feature9 from '../images/feature9.jpg'
import { Link } from 'react-router-dom';
import BlogCard from '../componenets/BlogCard';
import ProductCard from '../componenets/ProductCard';
import SpecialProduct from '../componenets/SpecialProduct';

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative '>
            <img src={display} alt='main' className='img-fluid rounded-3'/>
            <div className='main-banner-content position-absolute'>
              <h4>Beauty Madness</h4>
              <h5>15% off</h5>
              <p>FOR ALL ORDER ABOVE  RS.7500/=</p>
             <Link className='button'>SHOP NOW</Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
          <div className='small-banner position-relative '>
            <img src={makup} alt='main' className='img-fluid rounded-3'/>
            <div className='small-banner-content position-absolute'>
              <h4>Cosmetics</h4>
             <Link className='button'>SHOP NOW </Link>
            </div>
          </div>

          <div className='small-banner position-relative '>
            <img src={frag} alt='main' className='img-fluid rounded-3'/>
            <div className='small-banner-content position-absolute'>
              <h4>Fragrance</h4>
             <Link className='button'>SHOP NOW </Link>
            </div>
          </div>

          <div className='small-banner position-relative '>
            <img src={skincare} alt='main' className='img-fluid rounded-3'/>
            <div className='small-banner-content position-absolute'>
              <h4>Skin Care</h4>
             <Link className='button'>SHOP NOW </Link>
            </div>
          </div>

          <div className='small-banner position-relative '>
            <img src={men} alt='main' className='img-fluid rounded-3'/>
            <div className='small-banner-content position-absolute'>
              <h4>Men</h4>
             <Link className='button'>SHOP NOW </Link>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>

              <div className='d-flex align-items-center gap-15'>
                <img src={service} alt='services'/>
                <div>
                  <h6>Free and Quick Delivery</h6>
                  <p className='mb-0'>Adding more speed to your packages</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-15'>
              <img src={service2} alt='services'/>
              <div>
                  <h6>Daily Suprise Offers</h6>
                  <p className='mb-0'>Save up to 25% off</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-15'>
              <img src={service3} alt='services'/>
              <div>
                  <h6>Support 24/7</h6>
                  <p className='mb-0'>Shop with an expert</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-15'>
              <img src={service4} alt='services'/>
              <div>
                  <h6>Affordable Price</h6>
                  <p className='mb-0'>Get Factory direct price</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-15'>
              <img src={service5} alt='services'/>
              <div>
                  <h6>Secure Payments</h6>
                  <p className='mb-0'>100% Protected Payments</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <img src={fragrance} alt='fragrance' style={{width:'50%', height: 'auto', borderRadius:'50%'}}/>
                <h6>Fragrance</h6>
                <p>34 products</p>
              </div>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div className='align-items-center'>
                <img src={facecare} alt='fragrance' style={{width:'50%', height: 'auto', borderRadius:'50%'}}/>
                <h6>Face Care</h6>
                <p>45 products</p>
              </div>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <img src={ColorCosmetics} alt='fragrance' style={{width:'50%', height: 'auto', borderRadius:'50%'}}/>
                <h6>Color Cosmetics</h6>
                <p>148 products</p>
              </div>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <img src={vitamins} alt='fragrance' style={{width:'50%', height: 'auto', borderRadius:'50%'}}/>
                <h6>Vitamins & Supplyments</h6>
                <p>85 products</p>
              </div>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <img src={skincaremen} alt='fragrance' style={{width:'50%', height: 'auto', borderRadius:'50%'}}/>
                <h6>Skin Care</h6>
                <p>31 products</p>
              </div>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <img src={motherbaby} alt='fragrance' style={{width:'50%', height: 'auto', borderRadius:'50%'}}/>
                <h6>Mother & Baby</h6>
                <p>31 products</p>
              </div>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <img src={Gifts} alt='fragrance' style={{width:'50%', height: 'auto', borderRadius:'50%'}}/>
                <h6>Gifts</h6>
                <p>7 products</p>
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='marque-wrapper py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
      <h3 className='section-heading'>Featured Brands</h3>

          <div className='marquee inner-wrapper card-wrapper'>
          <Marquee className='d-flex'>
           
            <div className='mx-4 w-25'>
              <img src={feature1} alt='brand'/>
            </div>

            <div className='mx-4 w-25'>
              <img src={feature2} alt='brand'/>
            </div>

            <div className='mx-4 w-25'>
              <img src={feature3} alt='brand'/>
            </div>

            <div className='mx-4 w-25'>
              <img src={feature4} alt='brand'/>
            </div>

            <div className='mx-4 w-25'>
              <img src={feature5} alt='brand'/>
            </div>

            <div className='mx-4 w-25'>
              <img src={feature6} alt='brand'/>
            </div>

            <div className='mx-4 w-25'>
              <img src={feature7} alt='brand'/>
            </div>

            <div className='mx-4 w-25'>
              <img src={feature8} alt='brand'/>
            </div>

            <div className='mx-4 w-25'>
              <img src={feature9} alt='brand'/>
            </div>

          </Marquee>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section className='featured-wrapper py-5 home-wrapper-2'>

    <div className='container-xxl'>
    <div className='row'>

    <div className='col-12'>
    <h3 className='section-heading'>Selected Products</h3>
    </div>
    <ProductCard/>
    </div>
    </div>
    </section>

    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Offers</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct/>
        </div>
      </div>
    </section>

    <section className='blog-wrapper py-5 home-wrapper-2'>

      <div className='container-xxl'>
        <div className='row'>

        <div className='col-12'>
          <h3 className='section-heading'>The Beauty Blog</h3>
        </div>
          <BlogCard/>
          </div>
        </div>
     </section>

 
    
    </>
  )
}

export default Home