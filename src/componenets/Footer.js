import React from 'react'
import newsletter from '../images/newsletter.png'
import { Link } from 'react-router-dom';

import { FaInstagram,FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src={newsletter} alt='newsletter'/>
              <h2 className='text-white mb-0'>Sign Up for Newsletter</h2>
            </div>
          </div>

          <div className='col-7'>
          <div className='input-group'>
              <input
              type='text'
              className='form-control py-1'
              placeholder='Your Email Address'
              aria-label='Your Email Address'
              aria-describedby='basic-addon2'/>
              <span className='input-group-text p-2' id='basic-addon2'>
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>


    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white nb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 nb-1'>Privacy Policy</Link>
            <Link className='text-white py-2 nb-1'>Refund Policy</Link>
            <Link className='text-white py-2 nb-1'>Terms & Conditions</Link>
            <Link className='text-white py-2 nb-1'>Blogs</Link>
          </div>
          </div>

          <div className='col-3'>
          <h4 className='text-white nb-4'>Contact Us</h4>
          <div>
            <address className='text-white'>
              130/2A, <br/> Colombo Road, <br/>Galle
            </address>
            <a href='tel:+94712345678' className='text-white mt-3 d-block mb-1'>+94712345678</a>
            <a href='mailto:yelz&blizz@gmail.com' className='mt-2 d-block mb-0 text-white'>
              yelz&blizz@gmail.com
            </a>
            <div className='social_icons text-white d-flex align-items-center gap-30 mt-4'>
             <a href='instagram.com' className='text-white'><FaInstagram  className='fs-4'/></a>
             <a href='facebook.com' className='text-white'><FaFacebook className='fs-4'/></a>
             <a href='twitter.com' className='text-white'><FaTwitter className='fs-4'/></a>
             <a href='linkedin.com' className='text-white'><FaLinkedin className='fs-4'/></a>
            </div>
          </div>
          </div>

          <div className='col-3'>
          <h4 className='text-white nb-4'>Accounts</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 nb-1'>Delivery Information</Link>
            <Link className='text-white py-2 nb-1'>About Us</Link>
            <Link className='text-white py-2 nb-1'>FAQs</Link>
            <Link className='text-white py-2 nb-1'>Contact Us</Link>
          </div>
          </div>

          <div className='col-2'>
          <h4 className='text-white nb-4'>Quick Links</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 nb-1'>Makup</Link>
            <Link className='text-white py-2 nb-1'>Skin Care</Link>
            <Link className='text-white py-2 nb-1'>Hair Care</Link>
            <Link className='text-white py-2 nb-1'>Sun & Tan</Link>
            <Link className='text-white py-2 nb-1'>Gift Sets</Link>
          </div>
          </div>
        </div>
      </div>
    </footer>


    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; powered by y&b </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer