import React from 'react'
import special1 from '../images/special1.jpg';

const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src={special1} alt='special1'/>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct