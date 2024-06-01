import React from 'react'
import special1 from '../images/special1.jpg';
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src={special1} alt='special1' className='img-fluid'/>
                </div>

                <div className='special-product-content'>
                    <h5 className='brand'> </h5>
                        <h6 className='title'>
                           CeraVe Face Care Pack 
                        </h6>

                        <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                         />

                   <p className='price'>
                   <strike>Rs. 19,982.00</strike><br/> 
                   <span className='red-p'>Rs. 17,982.00</span> 
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'><b>5</b>days</p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>
                        </div>

                        <div className='prod-count'>
                            <p>Products: </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SpecialProduct