import React from 'react'
import boost from '../images/boost.webp';
import dove from '../images/dove.jpg';
import loreal from '../images/loreal.jpg';
import blackhead from '../images/blackhead.jpg';
import addcart from '../images/add-cart.svg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import wish from '../images/wish.svg';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';



const products = [
  {
    image : boost,
    brand : 'Neutrogena Hydro Boost',
    producttitle :'FACE CARE,FACE OILS & SERUMS,WOMEN',
    price : 'Rs.9950.00',
    value : 3
  },
  {
    image : dove,
    brand : 'Dove Calming Pistachio and Magnolia Body Wash 500ml',
    producttitle :'BATH & SHOWER, BODY CARE,BODY WASH,WOMEN',
    price : 'Rs.2950.00',
    value : 2
  },
  {
    image : loreal,
    brand : 'LOREAL Men Expert Power Age Revitalizing 24HR Moisturizer 50ml',
    producttitle :'MEN, MOISTURIZERS,SKIN CARE',
    price : 'Rs.2950.00',
    value : 3
  },
  {
    image : blackhead,
    brand : 'Neutrogena Stubborn Blackheads Daily Serum 29ml',
    producttitle :'FACE CARE,FACE OILS & SERUMS,WOMEN',
    price : 'Rs.6500.00',
    value : 1
  }
];

const ProductCard = ({image,brand,producttitle,price,value}) => {
  return (
    <div className='col-3'>
      <div className='product-card position-relative'>

      <div className='wishlist-icon position-absolute'>
        <Link><img src={wish} alt='wishlist'/></Link>
      </div>

        <div className='product-image'>
          <img src={image} alt='product' className='image-fluid'/>
        </div>
        <div className='product-details'>
          <h5 className='brand'>{brand}</h5>
            <h6 className='producttitle'>{producttitle}</h6>
            <ReactStars
            count={5}
            
            size={24}
            activeColor="#ffd700"
            value={value}
            edit={false}
            />
            <p className='price'>{price}</p>
          
        </div>

        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column'>
          <Link >
          <img src={addcart} alt='cart'/>
          </Link>

          <Link >
          <img src={view} alt='view'/>
          </Link>

          <Link >
          <img src={prodcompare} alt='compare'/>
          </Link>


          </div>
        </div>

      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className='row'>
      {products.map((product, index) => (
        <ProductCard
        key={index}
        image={product.image}
        brand={product.brand}
        producttitle={product.producttitle}
        price={product.price}
        value={product.value}
        />
      ))}
    </div>
  );
};

export default ProductList;