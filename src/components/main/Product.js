// Dependencies
import React from 'react';
import ctci from '../../images/products/ctci.png'

// Icons
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

// Styles
import '../../styles/main/Product.css';

export default function Product() {
  return (
    <div className='product'>
      <div className='product-info'>
        {/* Title */}
        <p>Title</p>

        <p className='product-price'>
          {/* Price */}
          <small>$</small><strong>00.00</strong>
        </p>

        <div className='product-rating'>
          {/* Star rating */}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </div>
      </div>

      {/* Image */}
      <img 
        src={ctci}
        alt='Cracking the Coding Interview'
      />
      {/* Add to cart button */}
    </div>
  )
};
