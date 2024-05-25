import React from 'react'
import display from '../images/display.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative p-3'>
            <img src={display} alt='main' className='img-fluid rounded-3'/>
            <div className='main-banner-content position-absolute'>
              <h4>Beauty Madness</h4>
              <h5>15% off</h5>
              <p>FOR ALL ORDER ABOVE RS.7500/=</p>
             <Link className='button'>SHOP NOW</Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
          <div className='small-banner position-relative p-3'>
            <img src={display} alt='main' className='img-fluid rounded-3'/>
            <div className='small-banner-content position-absolute'>
              <h4>Beauty Madness</h4>
              <h5>15% off</h5>
              <p>FOR ALL ORDER ABOVE RS.7500/=</p>
             <Link className='button'>SHOP NOW</Link>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home