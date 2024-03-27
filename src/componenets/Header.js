import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import { BsSearch } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faArrowsRotate,faUser, faCartShopping,faTh } from '@fortawesome/free-solid-svg-icons';




const Header = () => {
  return (
    <>
    <header className='header-top-stripe py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p className='text-white mb-0'>Free shipping over $7000</p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white mb-0'>
              Hotline : <a className='text-white'href='0000-0000-000'>0000-000-000</a>
            </p>
          </div>
        </div>
      </div>

    </header>
    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-2'>
          <h2 style={{ display: 'flex', alignItems: 'center',color:'white', fontSize:'14px' }}>
        <Link to='/' className='text-white'style={{  fontSize: '10px' }}>
        <img className='logo' src={logo} style={{ width: '50px', height: 'auto' }} alt='logo'/>
  </Link>
  <span>Yellz and Bliss</span>
</h2>

          </div>
          <div className='col-5'>
            <div className='input-group'>
              <input
              type='text'
              className='form-control py-2'
              placeholder='search'
              aria-label='search'
              aria-describedby='basic-addon2'/>
              <span className='input-group-text p-3' id='basic-addon2'>
                <BsSearch className='fs-6'/>
              </span>
            </div>
          </div>
          <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
              <Link className='text-white d-flex align-items-center gap-10'>
              <FontAwesomeIcon icon={faArrowsRotate} />
              <p className='mb-0'>
              Compare <br/> Products
              </p>
              </Link>

              </div>
              
              <div>
              <Link className='text-white d-flex align-items-center gap-10'>
              <FontAwesomeIcon icon={faHeart} />
              <p className='mb-0'>
              Favourite <br/> wishlist
              </p>
              </Link>
              </div>

              <div>
              <Link className='text-white d-flex align-items-center gap-10'>
              <FontAwesomeIcon icon={faUser} />
              <p className='mb-0'>
              Log in<br/> My Account
              </p>
              </Link>
              </div>

              <div>
              <Link className='text-white d-flex align-items-center gap-10'>
              <FontAwesomeIcon icon={faCartShopping} />
              <div className='d-flex flex-column gap-10'>
                <span className='badge bg-white text-dark'>0</span>
                <p className='mb-0'>$ 500</p>
              </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span><FontAwesomeIcon icon={faTh} /></span>
              Shop Categories
              </button>
            <ul className="dropdown-menu"aria-labelledby="dropdownMenuButton1" >
              <li><Link className="dropdown-item text-white" to="">Home</Link></li>
              <li><Link className="dropdown-item text-white" to="">Our Store</Link></li>
              <li><Link className="dropdown-item text-white" to="">Brands</Link></li>
              <li><Link className="dropdown-item text-white" to="">Blogs</Link></li>
              <li><Link className="dropdown-item text-white" to="">Videos</Link></li>
              <li><Link className="dropdown-item text-white" to="">Catalogues</Link></li>
              <li><Link className="dropdown-item text-white" to="/contact">Contact</Link></li>
            </ul>
              </div>
              </div>
              <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/'>Our Store</NavLink>
                  <NavLink to='/'>Brands</NavLink>
                  <NavLink to='/'>Blogs</NavLink>
                  <NavLink to='/'>Videos</NavLink>
                  <NavLink to='/'>Catalogues</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header